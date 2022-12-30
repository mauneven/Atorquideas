$(function() {
    
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

///* INDEX PRESENTATION *\\\\

{
    class SliderClip {
      constructor(el) {
        this.el = el;
        this.Slides = Array.from(this.el.querySelectorAll("li"));
        this.Nav = Array.from(this.el.querySelectorAll("nav a"));
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true; //true or false
        this.timeTrans = 4000; //transition time in milliseconds
        this.IndexElements = [];
  
        for (let i = 0; i < this.totalSlides; i++) {
          this.IndexElements.push(i);
        }
  
        this.setCurret();
        this.initEvents();
      }
      setCurret() {
        this.Slides[this.current].classList.add("current");
        this.Nav[this.current].classList.add("current_dot");
      }
      initEvents() {
        const self = this;
  
        this.Nav.forEach(dot => {
          dot.addEventListener("click", ele => {
            ele.preventDefault();
            this.changeSlide(this.Nav.indexOf(dot));
          });
        });
  
        this.el.addEventListener("mouseenter", () => self.autoPlay = false);
        this.el.addEventListener("mouseleave", () => self.autoPlay = true);
  
        setInterval(function () {
          if (self.autoPlay) {
            self.current =
            self.current < self.Slides.length - 1 ? self.current + 1 : 0;
            self.changeSlide(self.current);
          }
        }, this.timeTrans);
      }
      changeSlide(index) {
        this.Nav.forEach(allDot => allDot.classList.remove("current_dot"));
  
        this.Slides.forEach((allSlides) =>
        allSlides.classList.remove("prev", "current"));
  
  
        const getAllPrev = value => value < index;
  
        const prevElements = this.IndexElements.filter(getAllPrev);
  
        prevElements.forEach((indexPrevEle) =>
        this.Slides[indexPrevEle].classList.add("prev"));
  
  
        this.Slides[index].classList.add("current");
        this.Nav[index].classList.add("current_dot");
      }}
  
  
    const slider = new SliderClip(document.querySelector(".slider"));
  }

  $(document).ready(function() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;
  
      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  });