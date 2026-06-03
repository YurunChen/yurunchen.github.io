#!/usr/bin/env bash
# Fetch Google Scholar citation stats locally and push to the google-scholar-stats branch.
#
# Usage (from anywhere inside this repo):
#   ./google_scholar_crawler/update_scholar_stats.sh
#   ./google_scholar_crawler/update_scholar_stats.sh --no-push   # fetch only
#   GOOGLE_SCHOLAR_ID=xxx ./google_scholar_crawler/update_scholar_stats.sh
#
# Setup once:
#   cp google_scholar_crawler/.env.example google_scholar_crawler/.env
#   # edit .env with your Scholar user ID

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
VENV_DIR="$SCRIPT_DIR/.venv"
RESULTS_DIR="$SCRIPT_DIR/results"
PUSH=1

for arg in "$@"; do
  case "$arg" in
    --no-push|--dry-run) PUSH=0 ;;
    -h|--help)
      sed -n '2,12p' "$0"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg" >&2
      exit 1
      ;;
  esac
done

# Load GOOGLE_SCHOLAR_ID from .env (or .env.example as fallback)
if [[ -f "$SCRIPT_DIR/.env" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$SCRIPT_DIR/.env"
  set +a
elif [[ -f "$SCRIPT_DIR/.env.example" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$SCRIPT_DIR/.env.example"
  set +a
fi

if [[ -z "${GOOGLE_SCHOLAR_ID:-}" ]]; then
  echo "Error: GOOGLE_SCHOLAR_ID is not set." >&2
  echo "  cp google_scholar_crawler/.env.example google_scholar_crawler/.env" >&2
  echo "  or: export GOOGLE_SCHOLAR_ID=your_id" >&2
  exit 1
fi

echo "==> Scholar ID: $GOOGLE_SCHOLAR_ID"
echo "==> Repo: $REPO_ROOT"

if [[ ! -d "$VENV_DIR" ]]; then
  echo "==> Creating virtualenv..."
  python3 -m venv "$VENV_DIR"
fi

echo "==> Installing dependencies..."
"$VENV_DIR/bin/pip" install -q -r "$SCRIPT_DIR/requirements.txt"

echo "==> Fetching citation data (this may take a minute)..."
export GOOGLE_SCHOLAR_ID
(cd "$SCRIPT_DIR" && "$VENV_DIR/bin/python" main.py)

if [[ ! -f "$RESULTS_DIR/gs_data.json" ]]; then
  echo "Error: crawler did not produce results/gs_data.json" >&2
  exit 1
fi

CITATIONS="$("$VENV_DIR/bin/python" -c "import json; print(json.load(open('$RESULTS_DIR/gs_data.json'))['citedby'])")"
echo "==> Total citations: $CITATIONS"

if [[ "$PUSH" -eq 0 ]]; then
  echo "==> Skipping push (--no-push). Files written to $RESULTS_DIR"
  exit 0
fi

REMOTE="$(git -C "$REPO_ROOT" config --get remote.origin.url)"
if [[ -z "$REMOTE" ]]; then
  echo "Error: no git remote 'origin' configured." >&2
  exit 1
fi

WORK_DIR="$(mktemp -d)"
trap 'rm -rf "$WORK_DIR"' EXIT

echo "==> Pushing to branch google-scholar-stats..."
if git clone --depth 1 --branch google-scholar-stats "$REMOTE" "$WORK_DIR" 2>/dev/null; then
  :
else
  git init "$WORK_DIR" >/dev/null
  git -C "$WORK_DIR" checkout -b google-scholar-stats >/dev/null
  git -C "$WORK_DIR" remote add origin "$REMOTE"
fi

cp "$RESULTS_DIR/gs_data.json" "$RESULTS_DIR/gs_data_shieldsio.json" "$WORK_DIR/"
git -C "$WORK_DIR" add gs_data.json gs_data_shieldsio.json

if git -C "$WORK_DIR" diff --staged --quiet; then
  echo "==> No changes since last update; nothing to push."
  exit 0
fi

TS="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -C "$WORK_DIR" commit -m "Updated Citation Data ($TS)"
git -C "$WORK_DIR" push origin google-scholar-stats

echo "==> Done. Site will show $CITATIONS citations after GitHub Pages rebuilds (~1–2 min)."
