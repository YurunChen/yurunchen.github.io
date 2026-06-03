from scholarly import scholarly
import json
import sys
from datetime import datetime
import os

scholar_id = os.environ.get('GOOGLE_SCHOLAR_ID')
if not scholar_id and len(sys.argv) > 1:
    scholar_id = sys.argv[1]
if not scholar_id:
    print('Error: set GOOGLE_SCHOLAR_ID or pass your Scholar user ID as the first argument.', file=sys.stderr)
    sys.exit(1)

script_dir = os.path.dirname(os.path.abspath(__file__))
results_dir = os.path.join(script_dir, 'results')
author: dict = scholarly.search_author_id(scholar_id)
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
name = author['name']
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']: v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs(results_dir, exist_ok=True)
with open(os.path.join(results_dir, 'gs_data.json'), 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(os.path.join(results_dir, 'gs_data_shieldsio.json'), 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
