document.querySelector(".add").addEventListener("click", () => {
  const list = document.getElementById("series-list");

  const row = document.createElement("div");
  row.className = "container";

  const nameCol = document.createElement("div");
  nameCol.className = "column";
  nameCol.style.flex = "3";
  nameCol.textContent = "New Series";

  const linkCol = document.createElement("div");
  linkCol.className = "column";
  linkCol.style.flex = "1";
  linkCol.textContent = "Link";

  row.appendChild(nameCol);
  row.appendChild(linkCol);
  list.appendChild(row);
});
