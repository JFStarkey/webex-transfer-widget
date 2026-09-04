console.log("window.destinations =", window.destinations);

const grid =
  document.getElementById("buttonGrid");

if (!window.destinations) {

  console.error(
    "window.destinations is undefined"
  );

} else {

  window.destinations.forEach(item => {

    const button =
      document.createElement("button");

    button.className =
      "transfer-btn";

    button.textContent =
      item.label;

    button.onclick = () => {

      alert(item.dnis);

    };

    grid.appendChild(button);

  });

}