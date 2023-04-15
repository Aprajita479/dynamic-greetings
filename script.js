let container = document.querySelector(".container");
let timeNow = new Date().getHours();
let greeting =
  timeNow >= 5 && timeNow < 12
    ? "Good Morning Friend"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon Friend"
    : "Good evening Friend";
container.innerHTML = `<h1>${greeting}</h1>`;
