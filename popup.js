document.getElementById("add").addEventListener("click", () => {
  const list = document.getElementById("series-list"); // Get the list from HTML

  const row = document.createElement("div"); // Create a Row child
  row.className = "container";

  const nameCol = document.createElement("div"); // Create the series name column
  nameCol.className = "column";
  nameCol.style.flex = "5";

  const linkCol = document.createElement("div"); // Create the series link column
  linkCol.className = "column";
  linkCol.style.flex = "1";

  const input = document.createElement("input"); // Create the actual input for series name
  input.type = "text";
  input.placeholder = "Series Name";
  //   input.className = "input-field";
  nameCol.appendChild(input);

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = document.createElement("div");
      text.textContent = input.value;
      input.replaceWith(text);

      const link = document.createElement("button");
      link.textContent = "↗️";

      const savedURL = window.location.href;

      link.addEventListener("click", () => {
        window.open(savedURL, "_blank");
      });

      linkCol.appendChild(link);
    }
  });

  row.appendChild(nameCol);
  row.appendChild(linkCol);
  list.appendChild(row);

  input.focus();
});
