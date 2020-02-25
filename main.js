const navLinks = document.querySelector(".navLinks");
const navchildNodes = navLinks.childNodes;
const bubble = document.querySelector(".bubble");

navchildNodes.forEach(node => {
  if (node.nodeType == 1) {
    if (node.tagName == "LI") {
      node.addEventListener("mouseover", () => {
        const coords = node.getBoundingClientRect();
        const directions = {
          height: coords.height,
          width: coords.width,
          top: coords.top,
          left: coords.left
        };
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
      });
    }
    /*
    coords = node.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    };
    node.addEventListener("mouseover", () => {
      bubble.style.setProperty("left", `${directions.left}px`);
      bubble.style.setProperty("top", `${directions.top}px`);
      bubble.style.setProperty("width", `${directions.width}px`);
      bubble.style.setProperty("height", `${directions.height}px`);
    });
    */
  }
});
