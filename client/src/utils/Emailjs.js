import emailjs from 'emailjs-com';

export const sendEmail = (form) => {
  const emailjsUserId = import.meta.env.VITE_APP_EMAILJS;

  return emailjs
    .sendForm('service_zjv1bbl', 'template_0344q91', form, emailjsUserId)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error;
    });
};

export const sendMessage = (form) => {
  const emailjsUserId = import.meta.env.VITE_APP_EMAILJS;
  return emailjs.sendForm(
    'service_zjv1bbl', // Your EmailJS service ID
    'template_jquqkon', // Your EmailJS template ID
    form,
    emailjsUserId // Your EmailJS public key
  );
};

export default { sendEmail, sendMessage };
