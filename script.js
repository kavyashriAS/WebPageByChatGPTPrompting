// JavaScript for form submission and dropdown menu

document.addEventListener("DOMContentLoaded", function() {
    // Form submission handling
    const contactForm = document.getElementById("contact-form");
    const messageBox = document.getElementById("message-box");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        messageBox.style.display = "block";
        messageBox.textContent = "Submitted! We will get back to
