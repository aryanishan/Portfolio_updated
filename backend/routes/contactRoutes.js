const express = require('express')
const { body } = require('express-validator')
const { submitContactForm } = require('../controllers/contactController')
const validateRequest = require('../middleware/validateRequest')

const router = express.Router()

router.post(
  '/',
  [
    body('name').trim().notEmpty().withMessage('Name is required.').isLength({ max: 120 }),
    body('email').trim().isEmail().withMessage('Valid email is required.'),
    body('message')
      .trim()
      .notEmpty()
      .withMessage('Message is required.')
      .isLength({ min: 10, max: 2000 })
      .withMessage('Message must be between 10 and 2000 characters.'),
  ],
  validateRequest,
  submitContactForm,
)

module.exports = router
