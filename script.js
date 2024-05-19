    // Function to handle sending email
    function sendEmail() {
        // Gather form input values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const contactNumber = document.getElementById('contactNumber').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construct email body with line breaks
        const emailBody = `
            ${message}
        `;

        // Encode email body for URL
        const encodedEmailBody = encodeURIComponent(emailBody);

        // Construct mailto link
        const mailtoLink = `mailto:sageaaronpadayachee@gmail.com?subject=${subject}&body=${encodedEmailBody}`;

        // Open default email client
        window.location.href = mailtoLink;
    }

    const sendMessageBtn = document.getElementById('sendMessageBtn');
    sendMessageBtn.addEventListener('click', sendEmail);
