var body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
  if (e.key === "l") {
    body.classList.add("light");
  } else if (e.key === "d") {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
    }
  }
});

var fav = document.querySelector("#favorite");
var heading = document.querySelector("h1");
var selection = "regular";

fav.addEventListener("change", function (e) {
  selection = e.target.value;
  if (selection === "stealth") {
    heading.innerText = "Stealth Quincy 😎";
  } else if (selection === "party") {
    heading.innerText = "Party Quincy";
  } else heading.innerText = "Quincy";
});
