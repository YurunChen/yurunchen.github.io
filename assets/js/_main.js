/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
   // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  // FitVids init
  $("#main").fitVids();

  // init sticky sidebar
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    var show = $(".author__urls-wrapper button").length === 0 ? $(window).width() > 925 : !$(".author__urls-wrapper button").is(":visible");
    // console.log("has button: " + $(".author__urls-wrapper button").length === 0);
    // console.log("Window Width: " + windowWidth);
    // console.log("show: " + show);
    //old code was if($(window).width() > 1024)
    if (show) {
      // fix
      Stickyfill.rebuild();
      Stickyfill.init();
      $(".author__urls").show();
    } else {
      // unfix
      Stickyfill.stop();
      $(".author__urls").hide();
    }
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  // Follow menu drop down

  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // init smooth scroll
  $("a").smoothScroll({offset: -20});

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    // disableOn: function() {
    //   if( $(window).width() < 500 ) {
    //     return false;
    //   }
    //   return true;
    // },
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

  // News View More functionality
  function initNewsViewMore() {
    const newsContainer = document.getElementById('news-container');
    const viewMoreBtn = document.getElementById('view-more-btn');
    const newsCount = document.getElementById('news-count');
    
    if (!newsContainer || !viewMoreBtn || !newsCount) return;
    
    const allNewsItems = newsContainer.querySelectorAll('.news-item');
    const hiddenNewsItems = newsContainer.querySelectorAll('.news-item-hidden');
    let currentVisibleCount = allNewsItems.length - hiddenNewsItems.length;
    let currentPage = 1;
    const itemsPerPage = 10;
    
    // Update news count display
    function updateNewsCount() {
      newsCount.textContent = `Showing ${currentVisibleCount} of ${allNewsItems.length} news items`;
    }
    
    // Show more news items
    function showMoreNews() {
      const startIndex = currentPage * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, hiddenNewsItems.length);
      
      // Show next batch of hidden items
      for (let i = startIndex; i < endIndex; i++) {
        if (hiddenNewsItems[i]) {
          hiddenNewsItems[i].classList.remove('news-item-hidden');
          hiddenNewsItems[i].style.display = 'block';
          currentVisibleCount++;
        }
      }
      
      currentPage++;
      updateNewsCount();
      
      // Check if we've shown all items
      if (endIndex >= hiddenNewsItems.length) {
        viewMoreBtn.style.display = 'none';
        newsCount.innerHTML = `Showing all ${allNewsItems.length} news items`;
      } else {
        viewMoreBtn.textContent = 'View More';
      }
    }
    
    // Initialize
    updateNewsCount();
    
    // Add click event listener
    viewMoreBtn.addEventListener('click', showMoreNews);
  }
  
  // Initialize news functionality when DOM is ready
  initNewsViewMore();

});
