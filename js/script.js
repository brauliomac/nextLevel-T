document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const feedback = document.getElementById("newsletter-feedback");

  if (form && feedback) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Aqui você poderia enviar via fetch/axios
      feedback.classList.remove("d-none");
      form.reset();
    });
  }
});
