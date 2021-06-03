
//ดึงตัวแปรจาก  HTML
const bars = document.querySelector("#bars");
const menu = document.querySelector("#menu");

//ADD EVENT Click showMenu
bars.addEventListener("click", () => {
  if (menu.classList.contains("hidden") && window.innerWidth < 768) {
    menu.classList.remove("hidden");
    menu.classList.add(//tailwindcss class
      "flex",
      "flex-col",
      "text-center",
      "w-full",
      "absolute",
      "top-16"
    );
  } else {
    menu.classList.add("hidden");//remove class
  }
});
//Add Event click class hidden
menu.addEventListener("click", () => {
  menu.classList.add("hidden");
});

//if widht > 768 ? addClass hidden : remove tailwindcss class
window.addEventListener("resize", () => { //resizePage
  if (window.innerWidth > 768) {
    menu.classList.add("hidden");
    menu.classList.remove(
      "flex",
      "flex-col",
      "text-center",
      "w-full",
      "absolute",
      "top-16"
    );
  }
});
