// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var header = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > header) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}










const sr = ScrollReveal({
    distance: "50px",
    duration: 3000,
    delay: 500,
    reset: false,
  });


sr.reveal(".sec1", { delay: 150, origin: "top" });
sr.reveal("#section2", { delay: 150, origin: "top" });
sr.reveal("#header", { delay: 150, origin: "top" });