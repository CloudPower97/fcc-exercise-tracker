const express = require('express')
const { Validator } = require('express-json-validator-middleware')

const { validate } = new Validator({ allErrors: true })

const userSchema = {
  $schema: 'http://json-schema.org/schema#',
  title: 'The user schema',
  type: 'object',
  required: ['username'],
  properties: {
    username: {
      type: 'string',
    },
  },
}

const exerciseSchema = {
  $schema: 'http://json-schema.org/schema#',
  title: 'The exercise schema',
  type: 'object',
  required: ['userId', 'description', 'duration'],
  properties: {
    userId: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    duration: {
      type: 'number',
    },
    date: {
      type: 'string',
      format: 'date-time',
    },
  },
}

const router = express.Router()
const { postExercise, postUser, getLog } = require('../controllers/exercise')

router.get('/log', getLog)

router.post('/new-user', validate({ body: userSchema }), postUser)

router.post('/add', validate({ body: exerciseSchema }), postExercise)

module.exports = router
