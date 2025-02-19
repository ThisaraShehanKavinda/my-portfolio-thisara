// Typing animation
var typed = new Typed(".typing", {
    strings: ["", "Front-End Developer", "Web Designer", "Web Developer", "Graphic Designer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    // Wait for EmailJS to be available before initializing
    if (typeof emailjs === "undefined") {
        console.error("❌ EmailJS is not loaded! Check script import.");
        return;
    }

    try {
        emailjs.init("txYOhNtTkHBwBCnK9"); // No .then() needed
        console.log("✅ EmailJS initialized successfully");
    } catch (error) {
        console.error("❌ EmailJS initialization failed:", error);
    }

    // Add event listener for form submission
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        console.log("📝 Form submission triggered");

        // EmailJS service ID and template ID
        const serviceID = 'service_vsfhe73';
        const templateID = 'template_8ci34mf';

        // Prepare the template parameters
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        console.log("📤 Sending email with parameters:", templateParams);

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(response => {
                console.log("✅ Email sent successfully:", response);
                document.getElementById('response').innerHTML = 'Message sent successfully!';
                document.getElementById('response').style.color = 'green';
            })
            .catch(error => {
                console.error("❌ Email sending failed:", error);
                document.getElementById('response').innerHTML = 'Failed to send message. Please try again.';
                document.getElementById('response').style.color = 'red';
            });

        // Reset the form after submission
        document.getElementById('contact-form').reset();
    });
});
