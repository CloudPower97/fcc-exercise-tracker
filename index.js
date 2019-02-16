const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const cors = require('cors')
const exerciseRouter = require('./routes/exercise')
const { ValidationError } = require('express-json-validator-middleware')
const { MONGO_URI } = process.env
const port = process.env.PORT || 5000

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    const app = express()
      .use(helmet())
      .use(cors())
      .use(express.json())
      .use(
        express.urlencoded({
          extended: false,
        })
      )

    app.use('/api/exercise', exerciseRouter)

    app.use((err, req, res, next) => {
      if (err instanceof ValidationError) {
        const errors = err.validationErrors.body.map(({ message }) => ({
          message,
        }))

        res.status(400).json({
          errors,
        })
        next()
      } else next(err)
    })

    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  })
  .catch(err => {
    console.error(err)
  })
