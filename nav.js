document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth < 992) {
      const menuButton = document.querySelector(".menu_link");
  
      menuButton.onclick = () => {
        if (menuButton.classList.contains("is-open")) {
          //close
          console.log("close");
          document.querySelector(".brand-link.is-careers").style.opacity = "0%";
          menuButton.classList.remove("is-open");
        } else {
          menuButton.classList.add("is-open");
          document.querySelector(".brand-link.is-careers").style.opacity = "0%";
          console.log("open");
        }
      };
    }
  });
  