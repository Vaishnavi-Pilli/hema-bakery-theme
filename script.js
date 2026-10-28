document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  // The order form creates a WhatsApp message; it does not store or submit data to a server.
  const form = document.getElementById("order-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(form);
      const fields = [
        ["Name", data.get("name")], ["Phone", data.get("phone")],
        ["Cake", data.get("cake")], ["Flavor", data.get("flavor")],
        ["Size", data.get("size")], ["Date needed", data.get("date")],
        ["Message / design", data.get("message")], ["Pickup or delivery", data.get("delivery")]
      ].filter(([, value]) => value);
      const message = "Hello Hema Bakery! I would like to place an order:\\n" +
        fields.map(([label, value]) => `${label}: ${value}`).join("\\n");
      // Bakery contact number supplied by the user. Change it here if needed.
      const phone = "917989839636";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const data = new FormData(contactForm);
      const message = `Hello Hema Bakery!\\nName: ${data.get("name")}\\nPhone: ${data.get("phone")}\\nMessage: ${data.get("message")}`;
      window.open(`https://wa.me/917989839636?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }
});
