function sendEmail(contactForm) {
    emailjs.send("gmail","recipeasy", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "site_enquiry": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
}