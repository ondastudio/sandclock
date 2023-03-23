window.addEventListener("load", () => {
    const tabs = document.querySelectorAll(".amth-strategy_tab-link");
    let index = 0;
    tabs.forEach((tab, i) => {
      tab.addEventListener("click", () => {
        setTimeout(() => {
          if (i === 2) {
            const url = tab.getAttribute("data-url");
            window.open(url, "_blank");
            tab.classList.remove("w--current");
            tabs[index].classList.add("w--current");
          } else {
            index = i;
          }
        }, 10);
      });
    });
  });