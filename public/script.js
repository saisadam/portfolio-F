const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");
const sendButton = document.getElementById("sendButton");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    // Disable button while sending
    sendButton.disabled = true;

    // Hide original text and show loading animation
    sendButton.innerHTML = `
        <span class="loader"></span>
        Sending...
    `;

    const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try {

        const response = await fetch(
            "https://portfolio-xhve.onrender.com/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(data),
            }
        );

        const result = await response.json();

        if (result.success) {

            // Clear form
            form.reset();

            // Stop loading
            sendButton.disabled = false;

            // Restore button
            sendButton.innerHTML = "Send Message";

            // Show success message
            successMessage.style.display = "block";

            // Hide success message after 5 seconds
            setTimeout(() => {

                successMessage.style.display = "none";

            }, 5000);

        } else {

            // Stop loading
            sendButton.disabled = false;

            // Restore button
            sendButton.innerHTML = "Send Message";

            alert(result.message);
        }

    } catch (err) {

        console.error(err);

        // Stop loading
        sendButton.disabled = false;

        // Restore button
        sendButton.innerHTML = "Send Message";

        alert("Something went wrong.");

    }

});


// Mobile Navigation Toggle

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Automatically close mobile menu after selecting a section

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});