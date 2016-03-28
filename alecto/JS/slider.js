(function($) {

  $.fn.cslide = function() {

    this.each(function() {

        var slidesContainerId = "#"+($(this).attr("id"));
        var len = $(slidesContainerId+" .cslide__slider").size();        // get number of slides
        // console.log(len)
        // add correct classes to first and last slide
        $(slidesContainerId+" .cslideContainer .cslide__slider").last().addClass("cslide-last");
        $(slidesContainerId+" .cslideContainer .cslide__slider").first().addClass("cslide-first cslide-active");
        // initially disable the previous arrow cuz we start on the first slide
        $(slidesContainerId+" .cslide__prev").addClass("cslide-disabled");

        // handle the next clicking functionality
        $(this).find(".cslide__next").click(function(){
          var i = $(slidesContainerId+" .cslide__slider.cslide-active").index();
          var n = i + 1;
          console.log(n)
          var slideLeft = "-"+n*($(".cslide__slider").width() + 60)+"px";
          if (!$(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-last")) {
            $(slidesContainerId+" .cslide__slider.cslide-active").removeClass("cslide-active").next(".cslide__slider").addClass("cslide-active");
            $(slidesContainerId+" .cslideContainer").animate({
              marginLeft : slideLeft
            }, "slow");
            if ($(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-last")) {
              $(slidesContainerId+" .cslide__next").addClass("cslide-disabled");
            }
          }
          if ((!$(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-first")) && $(slidesContainerId+" .cslide__prev").hasClass("cslide-disabled")) {
            $(slidesContainerId+" .cslide__prev").removeClass("cslide-disabled");
          }
        });

        // handle the prev clicking functionality
        $(slidesContainerId+" .cslide__prev").click(function(){
           var i = $(slidesContainerId+" .cslide__slider.cslide-active").index();
           var n = i - 1;
           var slideRight = "-"+n*($(".cslide__slider").width() + 60)+"px";
           if (!$(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-first")) {
             $(slidesContainerId+" .cslide__slider.cslide-active").removeClass("cslide-active").prev(".cslide__slider").addClass("cslide-active");
             $(slidesContainerId+" .cslideContainer").animate({
               marginLeft : slideRight
             }, "slow");
             if ($(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-first")) {
               $(slidesContainerId+" .cslide__prev").addClass("cslide-disabled");
             }
           }
           if ((!$(slidesContainerId+" .cslide__slider.cslide-active").hasClass("cslide-last")) && $(slidesContainerId+" .cslide__next").hasClass("cslide-disabled")) {
             $(slidesContainerId+" .cslide__next").removeClass("cslide-disabled");
           }
        });

    });

    // return this for chainability
    return this;

}

}(jQuery));
