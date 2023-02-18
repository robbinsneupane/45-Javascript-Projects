const celsius = document.querySelector("#celsius");
const fahreinheit = document.querySelector("#fahreinheit");
const kelvin = document.querySelector("#kelvin");
const input = document.querySelectorAll("input");

input.forEach((input) => {
  input.addEventListener("change", (e) => {
    updateUnits(e);
  });
});

function updateUnits(e) {
  const targetValue = +e.target.value;

  switch (e.target.id) {
    case "celsius":
      fahreinheit.value = (targetValue * 1.8 + 32).toFixed(2);
      kelvin.value = (targetValue + 273.15).toFixed(2);
      break;
    case "fahreinheit":
      celsius.value = ((targetValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((targetValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (targetValue + 273.15).toFixed(2);
      fahreinheit.value = ((targetValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
