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
  let size = 0.1 + 0.1 * Math.random();
  let absoluteSize = Math.max(e.pageX, e.pageY) * size;
  const dot = document.createElement("div");
  dot.className = "dot";
  const color = colors.random();

  dot.style.height = `${absoluteSize}px`;
  dot.style.width = `${absoluteSize}px`;
  const element = document.getElementById("app");
  if (element) {
    element.appendChild(dot);
  }
  dot.style.left = `${e.x - dot.clientWidth / 2}px`;
  dot.style.top = `${e.y - dot.clientHeight / 2}px`;

  dot.style.background = color;
  dot.style.boxShadow = `0px 0px ${absoluteSize / 2}px ${color}`;
});
