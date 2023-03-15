// when document is fully loaded
$(document).ready(function () {
  var calc = 25;
  var $slider = $(".ilist-slider-articlesr");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider__label");

  $(".list-slider-articles").on("init", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var calc = (1 / slick.slideCount) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $(".list-slider-articles").on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    var calc = ((nextSlide + 1) / slick.slideCount) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $(".list-slider").slick({
    dots: false,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    touchThreshold: 300,
    responsive: [
      {
        // tablet
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        // mobile portrait
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $(".list-slider-articles").slick({
    dots: false,
    speed: 1000,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    touchThreshold: 300,
    responsive: [
      {
        // tablet
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      },
      {
        // mobile portrait
        breakpoint: 479,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

function moveLine(myLine) {
  var myDistance = myLine.offset().left - $(".slick-dots li").offset().left;
  var myWidth = myLine.width();

  $(".indicator_line").css({
    width: myWidth + "px",
    transform: "translateX(" + myDistance + "px)"
  });
}

if ($(".slick-dots li.slick-active").length > 0) {
  moveLine($(".slick-dots li.slick-active"));
}

window.onresize = function () {
  if ($(".slick-dots li.slick-active").length > 0) {
    moveLine($(".slick-dots li.slick-active"));
  }
};

// Play animation when something is clicked
$(".menu_link").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
  } else {
    // even clicks
    setTimeout(() => {
      // Put the play below this line
      $(".navbar-link-wrapper").each(function (i) {
        var $item = $(this);
        setTimeout(function () {
          $item.click();
        }, 100 * i);
        // delays the next animation by 200 milliseconds
      });
    }, 500);
  }
  $(this).data("clicks", !clicks);
});

// save range slider
var slider = document.getElementById("myRange");
var output = document.getElementById("range");
output.innerHTML = parseFloat(slider.value).toLocaleString("en-US"); // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = parseFloat(this.value).toLocaleString("en-US");
};
