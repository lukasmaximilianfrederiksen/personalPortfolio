let tl = gsap.timeline({
  paused: "true",
});
tl.to(".menu", {
  duration: 1,
  x: "0%",
  ease: Expo.easeInOut,
});
tl.fromTo(
  ".li",
  {
    y: "-100%",
    opacity: 0,
  },
  {
    duration: 0.5,
    opacity: 1,
    y: "0%",
    stagger: 0.25,
  }
);

function toggle() {
  tl.play();
}
function togglec() {
  tl.reverse();
}
