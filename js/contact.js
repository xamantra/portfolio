$('#contact_form').submit(function(e) {
    e.preventDefault();

    const contact_name = String($('#contact_name').val());
    const contact_email = String($('#contact_email').val());
    const contact_subject = String($('#contact_subject').val());
    const contact_message = String($('#contact_message').val());

    const error = [];

    if (contact_name.length < 3) {
        error.push('Name must be at least 3 characters');
    }

    if (contact_email.length < 8 || !contact_email.includes('@')) {
        error.push('Invalid email address');
    }

    if (contact_subject.length < 4) {
        error.push('Subject must be at least 4 characters');
    }

    if (contact_message.length < 10) {
        error.push('Message must be at least 10 characters');
    }

    if (error.length > 0) {
        alert(error);
        return;
    }

    const d = {
        contact_name: contact_name,
        contact_email: contact_email,
        contact_subject: contact_subject,
        contact_message: contact_message
    };

    console.log(d);
});
