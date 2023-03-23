function initMotionPath() {
  gsap.registerPlugin(MotionPathPlugin);
  // console.log("coin anim");
  const animDots = ["is-usdc", "is-lusd", "is-dai"];
  const dot = document.querySelector("#anim-dot");
  let index = 0;

  function playAnim(index) {
    // adding icon at the beginning of the animation
    dot.classList.add(`${animDots[index]}`);
    dot.classList.remove("is-main");

    //increment the animation
    function loopAgain() {
      //remove the current dot icon
      dot.classList.remove(`${animDots[index]}`);

      index++;

      //reset index if animation is out of bounds
      if (index === animDots.length) {
        index = 0;
      }
      playAnim(index);
    }

    //create the tween
    let tl = new gsap.timeline();

    tl.to(dot, {
      motionPath: {
        path: `#${animDots[index]}`,
        align: `#${animDots[index]}`,
        alignOrigin: [0.5, 0.5]
        // autoRotate: true
      },
      duration: 12,
      ease: "none",
      onComplete: () => {
        loopAgain();
      }
    }).add(() => {
      dot.classList.add("is-main");
    }, tl.duration() * 0.45);
  }

  playAnim(index);
}

document.addEventListener("DOMContentLoaded", initMotionPath);
