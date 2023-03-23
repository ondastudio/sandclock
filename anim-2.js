document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(MotionPathPlugin);
  
    const dot = document.querySelector("#dot-2");
    // const dotClasses = ["eth", "lusd"];
  
    const targetIcons = [...document.querySelectorAll(".icon_move")];
    let iconIdx = 0;
  
    function generateCoin() {
      //set coin pos
      gsap.set(dot, { motionPath: { path: `#cirlce-path`, end: 0 } });
  
      //create coin element
      const coinIcon = document.createElement("div");
      coinIcon.classList.add("coin-icon", "lusd");
  
      //clear dot and append new coin
      dot.innerHTML = "";
      dot.appendChild(coinIcon);
    }
  
    function flipCoin() {
      if (iconIdx === targetIcons.length) {
        iconIdx = 0;
      }
  
      //get the current icon and the target icon
      const targetIcon = targetIcons[iconIdx];
      const currentIcon = dot.querySelector(".coin-icon");
  
      //animate the icon
      let state = Flip.getState(currentIcon);
      gsap.to(targetIcon.querySelector(".coin-icon"), {
        scale: 0,
        onComplete: () => {
          targetIcon.innerHTML = "";
          targetIcon.appendChild(currentIcon);
          Flip.from(state, {
            duration: 1,
            onComplete: () => {
              //restart animation when done
              playAnim();
            }
          });
        }
      });
  
      //increment
      iconIdx++;
    }
  
    function playAnim() {
      generateCoin();
  
      const tl = new gsap.timeline();
  
      tl.from(dot, { scale: 0, duration: 1 }).to(dot, {
        motionPath: {
          path: `#cirlce-path`,
          align: `#cirlce-path`,
          alignOrigin: [0.5, 0.5]
        },
        duration: 2,
        ease: "none",
        onComplete: () => {
          flipCoin();
        }
      });
    }
  
    playAnim();
  
    //LOOPING ICONS ANIMATION
    function loopIcons() {
      const icons = [...document.querySelectorAll(".icon_move")];
  
      let coordinates = {
        randX: 0,
        randY: 0
      };
  
      function setCoordinates() {
        coordinates.randX = Math.round(Math.random() * 30) - 5;
        coordinates.randY = Math.round(Math.random() * 30) - 5;
      }
      setCoordinates();
  
      icons.forEach((icon) => {
        setCoordinates();
        function playAnim() {
          gsap.to(icon, {
            x: `${coordinates.randX}em`,
            y: `${coordinates.randY}em`,
            ease: "none",
            duration: 5,
            yoyo: true,
            onComplete: () => {
              setCoordinates();
              playAnim();
            }
          });
        }
  
        playAnim();
      });
    }
  
    loopIcons();
  });
  