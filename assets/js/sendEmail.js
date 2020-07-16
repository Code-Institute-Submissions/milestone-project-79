// Display alert for form submit button
$(document).ready(function() {
    $("form").submit(function() {
        alert("Thank you, the form has been submitted!");
    });
});

// Function to send email information to email.js
function sendEmail(contactForm) {
    emailjs.send("gmail","recipeasy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "site_enquiry": contactForm.message.value
    });
}