const grid =
  document.getElementById(
    "buttonGrid"
  );

destinations.forEach(item => {

  const button =
    document.createElement(
      "button"
    );

  button.className =
    "transfer-btn";

  button.textContent =
    item.label;

  button.onclick = () => {

    alert(
      item.dnis
    );

  };

  grid.appendChild(button);

});
``