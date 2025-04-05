let delay = 300;
let timer = null;

window.addEventListener("resize", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    if (window.innerWidth <= 768) {
      // mobile
      // console.log(document.querySelector(".web"));
      console.log("mobile");
    } else if (window.innerWidth <= 1210) {
      // labtop
      console.log("labtop");
    } else {
      // desktop
      console.log("desktop");
    }
  }, delay);
});

const elements = document.querySelectorAll(".slide-in");

function checkVisibility() {
  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkVisibility);

checkVisibility();
