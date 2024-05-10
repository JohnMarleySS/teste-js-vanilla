function filterByName(event) {
  const search = event.target.value;
  const listItems = document.querySelectorAll("div#search-item");

  listItems.forEach(function (item) {
    item.style.display = "revert";

    if (!item.innerHTML.toLowerCase().includes(search.toLowerCase())) {
      item.style.display = "none";
    }
  });
}
