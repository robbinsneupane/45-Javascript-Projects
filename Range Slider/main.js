const range = document.querySelector("#range");
const label = document.querySelector("label");

range.addEventListener("input", (e) => {
  const value = e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  const numOfRangeWidth = Number(
    rangeWidth.substring(0, rangeWidth.length - 2)
  );
  const numOfLabelWidth = Number(
    labelWidth.substring(0, labelWidth.length - 2)
  );

  const max = Number(e.target.max);
  const min = Number(e.target.min);

  const left =
    value * (numOfRangeWidth / max) -
    numOfLabelWidth / 2 +
    scale(value, min, max, 10, -10);

  label.style.left = `${left}px`;
  label.innerText = value;
});

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
