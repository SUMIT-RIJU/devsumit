const emailjs = require('emailjs-com')

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gm33b55', 'template_htfbblh', 'contact-form', 'user_Fk8X5Aq41qf2A8UJLJtxf')
     .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)