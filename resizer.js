document.addEventListener("DOMContentLoaded", () => {
  //only run on desktop
  if (window.innerWidth > 991) {
    const handlers = [
      ...document.querySelectorAll("[data-handlerAnim='handler']")
    ];
    let handlersWidth = 0;

    handlers.forEach((handler) => {
      handlersWidth += handler.getBoundingClientRect().width;
    });

    //update the percentage counters
    function updatePerc() {
      const tags = [...document.querySelectorAll("[data-handlerAnim='tag']")];
      tags.forEach((tag) => {
        const tagWidth = tag.getBoundingClientRect().width;
        const totalWidth =
          tag.parentNode.getBoundingClientRect().width - handlersWidth;
        const perc = Math.round((tagWidth / totalWidth) * 100);

        tag.querySelector(".counter").innerHTML = `${perc}`;
      });
    }

    updatePerc();

    handlers.forEach((handler) => {
      //get elements
      const leftSide = handler.previousElementSibling;
      const rightSide = handler.nextElementSibling;

      // current mouse pos
      let x = 0;

      //get left width
      let leftWidth = 0;

      //handlers
      function mouseMoveHandler(e) {
        const dx = e.clientX - x;
        const newLeftWidth =
          (((leftWidth + dx) * 100) /
            handler.parentNode.getBoundingClientRect().width) *
          5;
        leftSide.style.width = `${newLeftWidth}%`;
        updatePerc();

        //set styles while user is dragging
        handler.style.cursor = "col-resize";
        document.body.style.cursor = "col-resize";

        leftSide.style.userSelect = "none";
        leftSide.style.pointerEvents = "none";

        rightSide.style.userSelect = "none";
        rightSide.style.pointerEvents = "none";
      }

      function mouseUpHandler() {
        //reset styles when user stops dragging
        handler.style.removeProperty("cursor");
        document.body.style.removeProperty("cursor");

        leftSide.style.removeProperty("user-select");
        leftSide.style.removeProperty("pointer-events");

        rightSide.style.removeProperty("user-select");
        rightSide.style.removeProperty("pointer-events");

        //remove handlers when mouse is up
        document.removeEventListener("mousemove", mouseMoveHandler);
        document.removeEventListener("mouseup", mouseUpHandler);
      }

      //handler mouse event when user clicks on resizer
      const mouseDownHandler = function (e) {
        //get current mouse pos
        x = e.clientX;
        leftWidth = leftSide.getBoundingClientRect().width;

        //attach listeners to document
        document.addEventListener("mousemove", mouseMoveHandler);
        document.addEventListener("mouseup", mouseUpHandler);
      };

      handler.addEventListener("mousedown", mouseDownHandler);
    });
  }
});
