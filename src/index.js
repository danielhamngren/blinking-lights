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
  const tag = document.createElement("div");
  tag.className = "dot";
  const color = colors.random();

  tag.style.height = `${absoluteSize}px`;
  tag.style.width = `${absoluteSize}px`;
  const element = document.getElementById("app");
  if (element) {
    element.appendChild(tag);
  }
  tag.style.left = `${e.x - tag.clientWidth / 2}px`;
  tag.style.top = `${e.y - tag.clientHeight / 2}px`;

  tag.style.background = color;
  tag.style.boxShadow = `0px 0px ${absoluteSize / 2}px ${color}`;
});
