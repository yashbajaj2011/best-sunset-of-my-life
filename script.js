document.addEventListener("DOMContentLoaded", () => {
  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");
  const animation = document.getElementById("animation");

  document.getElementById("askYes").addEventListener("click", () => {
    alert("Yay! Let's continue! 😄");
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  });

  document.getElementById("askNo").addEventListener("click", () => {
    alert("Oops, sorry! Try again! 😜");
  });

  document.getElementById("sunsetYes").addEventListener("click", () => {
    alert("This is going to be magical! ✨");
    page2.classList.add("hidden");
    animation.classList.remove("hidden");
  });

  document.getElementById("sunsetNo").addEventListener("click", () => {
    alert("Oops, sorry! Try again! 😜");
  });
});
