document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#hire").addEventListener("click", () => {
    document.querySelector("#appointment-form").style.display = "initial";
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#appointment-form", offsetY: 70 },
    });
  });
  document.querySelectorAll("#navigator > button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#${btn.id.slice(1)}-content`, offsetY: 70 },
      });
    });
  });
  var button = document.querySelector("#appointment");

  button.addEventListener("click", () => {
    document.getElementById("appointment-form").style.display = "initial";
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: "#appointment-form", offsetY: 70 },
    });
  });

  var closeButton = document.querySelector("#close");
  closeButton.addEventListener("click", () => {
    document.getElementById("appointment-form").style.display = "none";
    gsap.to(window, {
      duration: 0.5,
      scrollTo: { y: `#contact-content`, offsetY: 70 },
    });
    document.getElementById("email").value = "";
    document.getElementById("country").value = "";
    document.getElementById("city").value = "";
    document.getElementById("message-box").value = "";
  });
});
function refresh() {
  document.getElementById("email").value = "";
  document.getElementById("country").value = "";
  document.getElementById("city").value = "";
  document.getElementById("message-box").value = "";
}
gsap.to("#home-content", {
  scrollTrigger: {
    trigger: "#home-content",
    pin: "#home-content",
    start: "top top",
    endTrigger: "#about-content",
    scroller: "body",
    markers: false,
  },
  onStart: () => {
    document.getElementById("sliding-content1").style.display = "block";
  },
});

var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#first",
    start: "-30% center",
    scrub: 1.25,
  },
});

t1.to("#first", {
  top: "-80vmin",
});

var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#para1>p",
    start: "-30% 30%",
    end: "bottom center",
    scrub: 1.25,
  },
});

t2.to("#para1>p", {
  left: "0vw",
});

var t3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#para2>p",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t3.to("#para2>p", {
  left: "-3vw",
});

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-1",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t4.to("#ans-1", {
  left: "0vw",
});

var t5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-2",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t5.to("#ans-2", {
  left: "-3vw",
});

var t6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-3",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t6.to("#ans-3", {
  left: "0vw",
});

var t7 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-4",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t7.to("#ans-4", {
  left: "-3vw",
});

var t8 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-5",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t8.to("#ans-5", {
  left: "0vw",
});

var t9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-6",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t9.to("#ans-6", {
  left: "-3vw",
});

var t10 = gsap.timeline({
  scrollTrigger: {
    trigger: "#ans-7",
    start: "-30% center",
    end: "bottom center",
    scrub: 1.25,
  },
});

t10.to("#ans-7", {
  left: "0vw",
});

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
