const list = document.getElementById("infi-list");

let count = 1;

// Add items function
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${count++}`;
    list.appendChild(li);
  }
}

// Initial items
addItems(10);

// Infinite scroll
list.addEventListener("scroll", () => {
  // small threshold to avoid precision issues
  if (list.scrollTop + list.clientHeight >= list.scrollHeight - 5) {
    addItems(2);
  }
});
