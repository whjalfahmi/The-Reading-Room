
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

// Replace this with the email address you want
// to receive messages at.
const contactEmailAddress = "";

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    if (!contactEmailAddress) {
        formStatus.textContent =
            "Contact email is not configured yet.";
        return;
    }

    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please complete all fields.";
        return;
    }

    const subject = encodeURIComponent(
        "Message from The Reading Room"
    );

    const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoLink =
        `mailto:${contactEmailAddress}?subject=${subject}&body=${body}`;

    formStatus.textContent =
        "Your email app should open. Review and send your message there.";

    window.location.href = mailtoLink;
});
