const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Menyuni ochish" : "Menyuni yopish");
  mainNav?.classList.toggle("is-open", !isOpen);
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const contactForm = document.querySelector("[data-contact-form]");
contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const subject = `[167-maktab] ${formData.get("subject")}`;
  const body = [
    `Ism: ${formData.get("name")}`,
    `Javob uchun email: ${formData.get("email")}`,
    "",
    String(formData.get("message")),
  ].join("\n");
  const gmailUrl = new URL("https://mail.google.com/mail/u/0/");
  gmailUrl.searchParams.set("view", "cm");
  gmailUrl.searchParams.set("fs", "1");
  gmailUrl.searchParams.set("to", "ibrohimfayzullayev101@gmail.com");
  gmailUrl.searchParams.set("su", subject);
  gmailUrl.searchParams.set("body", body);

  window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
});
