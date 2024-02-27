const navToggleBtn = document.getElementById("navToggle"),
  navMenu = document.getElementById("buttom");


navToggleBtn.addEventListener("click", () => {
  navMenu.classList.add("html--show")}
);

navToggleBtn.addEventListener("click", () => {
  navMenu.classList.remove("html--show")
});
