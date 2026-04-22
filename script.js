const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.nextElementSibling;

        if (details.style.display === "none") {
            details.style.display = "block";
            button.textContent = "Hide Details";
        } else {
            details.style.display = "none";
            button.textContent = "Show Details";
        }
        const contactForm = document.getElementById("contact-form");
const errorMessage = document.getElementById("error-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Please fill in all fields.";
    } else {
        errorMessage.style.color = "lightgreen";
        errorMessage.textContent = "Message sent successfully!";
    }
});
    });
});