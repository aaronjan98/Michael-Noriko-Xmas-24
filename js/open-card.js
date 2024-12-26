const card = document.querySelector(".card");

card.addEventListener("click", () => {
  const isOpen = card.getAttribute("data-open") === "true";
  card.setAttribute("data-open", !isOpen);
});
