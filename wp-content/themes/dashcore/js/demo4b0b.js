/**
 * FOR DEMO PURPOSES ONLY
 **/

'use strict';

// document ready
jQuery(function() {
    var $accordionColorSelector = jQuery("#accordion-theme-current");
    var $accordion = jQuery("#accordion-colored");

    $accordion.addClass("accordion-" + $accordion.data("current"));
    $accordionColorSelector.addClass("btn-outline-" + $accordion.data("current"));

    jQuery("#demo-accordion-theme-selector").on("click", ".dropdown-item", function(e) {
        e.preventDefault();

        var color = jQuery(this).data("color");
        var current = $accordion.data("current");

        $accordion
            .removeClass("accordion-" + current)
            .addClass("accordion-" + color);

        $accordion.data("current", color);

        // Update the selector text
        $accordionColorSelector.html(color);
        $accordionColorSelector
            .removeClass("btn-outline-" + current)
            .addClass("btn-outline-" + color);
    });

    jQuery(".navigation", ".demo-blocks").each(function(i, e) {
        var $element = jQuery(e);

        jQuery(".navbar-toggler", e).on("click", function() {
            $element.toggleClass("navbar-expanded");
        });
    });

    /**
     * ANIMATION BAR
     **/
    (function () {
        jQuery(".horizontal-demo-bars").animateBar({
            orientation: "horizontal",
            step: 100,
            duration: 1000,
            elements: [
                { label: "Implementation", value: 89}, // style: { progress: "progress-4" }
                { label: "Design", value: 97 },
                { label: "Branding", value: 81 },
                { label: "Beauty", value: 99 },
                { label: "Responsiveness", value: 99 }
            ]
        });

        jQuery(".vertical-demo-bars").animateBar({
            orientation: "vertical",
            step: 100,
            duration: 1000,
            elements: [
                { value: 89},
                { value: 97 },
                { value: 81 },
                { value: 99 },
                { value: 99 }
            ]
        });
    })();
});

function mainSlider() {
    var BasicSlider = $('.slider-active');
    BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-angle-right"></i></button>',
        arrows: true,
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

$('.postbox__gallery').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

$('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
            // openerElement is the element on which popup was initialized, in this case its <a> tag
            // you don't need to add "opener" option if this code matches your needs, it's defailt one.
            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});

$('.popup-video').magnificPopup({
    type: 'iframe'
});

$('.blog-masonry').imagesLoaded( function() {
    // init Isotope
    var $grid = $('.blog-masonry').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item',
      }
    });
});