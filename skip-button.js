document.addEventListener("DOMContentLoaded", () => {
  const scrollDownLink = document.querySelector(".scrolldown-link");
  const scrollIcon = document.querySelector(".scroll-icon.is--home");

  //set the styles when the page loads
  scrollDownLink.style.opacity = "0";
  scrollIcon.style.opacity = "1";

  //update the scroll butonn after scrolling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      scrollDownLink.style.opacity = "1";
      scrollIcon.style.opacity = "0";
    } else {
      document.querySelector(".scrolldown-link").style.opacity = "0";
      scrollIcon.style.opacity = "1";
    }
  });
});
