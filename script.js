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
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const body = [
    `Ism: ${name}`,
    `Javob uchun email: ${email}`,
    "",
    message,
  ].join("\n");

  const to = "ibrohimfayzullayev101@gmail.com";
  const subjectText = `[167-maktab] ${subject}`;

  const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;
  const mailtoUrl = `mailto:${to}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(body)}`;

  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;

  if (isMobile) {
    window.location.href = mailtoUrl.toString();
    return;
  }

  const popup = window.open(gmailUrl.toString(), "_blank", "noopener,noreferrer");
  if (!popup) {
    window.location.href = mailtoUrl.toString();
  }
});
