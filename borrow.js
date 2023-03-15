// Play animation when scrolled into view
$(".self-paying-el").one("inview", function (event, isInView) {
  if (isInView) {
    // Put the play below this line
    $(".self-paying-el").each(function (i) {
      var $item = $(this);
      setTimeout(function () {
        $item.click();
      }, 200 * i);
      // delays the next animation by 200 milliseconds
    });
  } else {
  }
});
