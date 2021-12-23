import "./styles.css";

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const colors = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "cyan",
  "magenta",
  "pink"
];

document.addEventListener("click", (e) => {
  let size = 20 + 20 * Math.random();
  const tag = document.createElement("div");
  tag.className = "dot";
  const color = colors.random();
  console.log(color);

  tag.style.left = `${e.x - size / 2}px`;
  tag.style.top = `${e.y - size / 2}px`;
  tag.style.height = `${size}px`;
  tag.style.width = `${size}px`;
  tag.style.background = color;
  tag.style.boxShadow = `0px 0px ${size / 2}px ${color}`;

  const element = document.getElementById("app");
  if (element) {
    element.appendChild(tag);
  }
});
