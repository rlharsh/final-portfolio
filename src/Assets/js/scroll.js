document.addEventListener("DOMContentLoaded", (event) => {
  const scrollContainer = document.querySelector(".tabcontroller"); // Replace with your actual class or id selector

  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();

    scrollContainer.scrollLeft += e.deltaY;
  });
});
