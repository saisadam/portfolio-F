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
const menu = document.getElementById("menu-toggle");
const links = document.getElementById("nav-links");

menu.onclick = () => {
    links.classList.toggle("active");
};