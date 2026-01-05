// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Prevent double form submission
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", () => {
    const button = form.querySelector("button");
    button.disabled = true;
    button.textContent = "Sending...";
  });
}


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
