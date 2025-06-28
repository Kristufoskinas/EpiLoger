document.querySelector(".add").addEventListener("click", () => {
  const list = document.getElementById("series-list");

  const row = document.createElement("div");
  row.className = "container";

  const nameCol = document.createElement("div");
  nameCol.className = "column";
  nameCol.style.flex = "3";
  // Input the series name
  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Series name";
  nameInput.className = "input-field";
  nameCol.appendChild(nameInput);

  const linkCol = document.createElement("div");
  linkCol.className = "column";
  linkCol.style.flex = "1";
  // Input the series link
  const linkInput = document.createElement("input");
  const iconButton = document.createElement("button");
  iconButton.textContent = "↗️";
  iconButton.className = "icon-button";
  linkCol.appendChild(iconButton);

  row.appendChild(nameCol);
  row.appendChild(linkCol);
  list.appendChild(row);
});
