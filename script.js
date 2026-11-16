const contactForm = document.getElementById("contactForm");

if (contactForm) {
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (fullName === "" || email === "" || subject === "" || message === "") {
            formFeedback.textContent = "Please complete all fields.";
            formFeedback.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formFeedback.textContent = "Please enter a valid email address.";
            formFeedback.style.color = "red";
            return;
        }

        formFeedback.textContent = "Your form has been checked successfully. ";
        formFeedback.style.color = "green";
        contactForm.reset();
    });
}
