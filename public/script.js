const form = document.getElementById("contactForm");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value
    };

    try {

        

        const response = await fetch("https://portfolio-xhve.onrender.com/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

        const result = await response.json();

        if (result.success) {

            form.reset();
            successMessage.style.display = "block";

        } else {

            alert(result.message);

        }

    } catch (err) {

        console.error(err);
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