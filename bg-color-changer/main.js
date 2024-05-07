const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "red":
        body.style.backgroundColor = e.target.id;
        break;

      case "green":
        body.style.backgroundColor = e.target.id;
        break;

      case "blue":
        body.style.backgroundColor = e.target.id;
        break;

      case "white":
        body.style.backgroundColor = e.target.id;
        break;

      case "purple":
        body.style.backgroundColor = e.target.id;
        break;

      default:
        break;
    }
  });
});
