const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (!height || height < 0) {
    results.innerHTML = `Please Enter valid Height ${height}`;
  } else if (!weight || height < 0) {
    results.innerHTML = `Please Enter valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
    if (weight < 18.6) {
      results.innerHTML = `Under Weigh ${weight}`;
    } else if (weight > 18.6 && weight < 24.9) {
      results.innerHTML = `Normal Range ${weight}`;
    } else {
      results.innerHTML = `Overweight ${weight}`;
    }
  }
});
