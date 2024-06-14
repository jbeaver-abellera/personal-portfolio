const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .list, .speech-bubble, .wrapper, .project-card, .achievements-container');
hiddenElements.forEach((e) => {
  observer.observe(e);
  e.classList.remove('show');
  });
  

const viewCounter = document.querySelector(".view-counter");
async function updateCounter() {
  let response = await fetch("https://5unbow5ghoy5p6xu7yov53yknq0dgtuj.lambda-url.ap-southeast-1.on.aws/");
  let data = await response.json();
  viewCounter.innerHTML = `Views: ${data}`;
  }

updateCounter()

  jQuery(function() {
    jQuery('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  
        var target = jQuery(this.hash);
        target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          jQuery('html,body').animate({
            scrollTop: target.offset().top -100
          }, 1000);
          return false;
        }
      }
    });
  });



