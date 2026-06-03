const orderForm = document.getElementById("order-form");
const reviewForm = document.getElementById("review-form");
const popup = document.getElementById("popup");
const popupClose = document.querySelectorAll("#popup-close, .popup-close");
const popupWhatsApp = document.getElementById("popup-whatsapp");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const yearEl = document.getElementById("year");

const whatsAppNumber = "918898227569";

function buildWhatsAppMessage({
  customerName,
  customerPhone,
  menuItem,
  quantity,
  orderNotes,
}) {
  const message = `Hello,%0AI would like to place an order.%0A%0AName:%0A${customerName}%0A%0APhone:%0A${customerPhone}%0A%0AItem:%0A${menuItem}%0A%0AQuantity:%0A${quantity}%0A%0ANotes:%0A${orderNotes || "No additional notes."}`;
  return `https://wa.me/${whatsAppNumber}?text=${message}`;
}

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(orderForm);
  const messageUrl = buildWhatsAppMessage({
    customerName: formData.get("customerName").trim(),
    customerPhone: formData.get("customerPhone").trim(),
    menuItem: formData.get("menuItem"),
    quantity: formData.get("quantity"),
    orderNotes: formData.get("orderNotes").trim(),
  });
  window.open(messageUrl, "_blank");
});

reviewForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("review-name").value.trim();
  const rating = document.getElementById("review-rating").value;
  const reviewText = document.getElementById("review-text").value.trim();

  if (!name || !reviewText) return;

  const reviewGrid = document.querySelector(".reviews-grid");
  const newCard = document.createElement("article");
  newCard.className = "review-card";
  newCard.innerHTML = `
    <p class="stars">${"⭐".repeat(Number(rating))}</p>
    <p>${reviewText}</p>
  `;
  reviewGrid.appendChild(newCard);
  reviewForm.reset();
});

function showPopup() {
  popup.classList.remove("hidden");
}

function hidePopup() {
  popup.classList.add("hidden");
}

setTimeout(showPopup, 3000);
popupWhatsApp.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(`https://wa.me/${whatsAppNumber}`, "_blank");
});
popupClose.forEach((button) => button.addEventListener("click", hidePopup));

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  navToggle.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
    }
  });
});

yearEl.textContent = new Date().getFullYear();
