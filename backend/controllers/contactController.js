const ContactMessage = require('../models/ContactMessage')
const { sendContactNotification } = require('../config/mailer')

async function submitContactForm(req, res, next) {
  try {
    const { name, email, message } = req.body

    const savedMessage = await ContactMessage.create({ name, email, message })
    const emailSent = await sendContactNotification({ name, email, message })

    return res.status(201).json({
      message: emailSent
        ? 'Message sent successfully. I will get back to you soon.'
        : 'Message stored successfully. Configure SMTP credentials to enable email notifications.',
      data: {
        id: savedMessage._id,
        emailSent,
      },
    })
  } catch (error) {
    return next(error)
  }
}

module.exports = { submitContactForm }
