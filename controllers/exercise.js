const exercise = require('../models/exercise')
const user = require('../models/user')

exports.postExercise = ({ body }, res) => {
  const { userId } = body

  user
    .findById(userId)
    .then(() => {
      exercise
        .create(body)
        .then(({ userId, description, duration, date }) => {
          res.status(201).json({
            userId,
            description,
            duration,
            date,
          })
        })
        .catch(err => {
          res.status(422).json(err)
        })
    })
    .catch(err => {
      res.status(404).json(err)
    })
}

exports.postUser = ({ body }, res) => {
  user
    .create(body)
    .then(({ _id: userId, username }) => {
      res.status(201).json({
        userId,
        username,
      })
    })
    .catch(({ errmsg: error }) => {
      res.status(422).json({ error })
    })
}

exports.getLog = ({ query }, res) => {
  const { userId, from, to, limit } = query

  console.log(query)

  if (userId) {
    const query = exercise.find({ userId }, '-_id userId description duration date')

    if (from) {
      query.where('date').gte(from)
    }

    if (to) {
      query.where('date').lte(to)
    }

    if (limit) {
      query.limit(+limit)
    }

    query
      .exec()
      .then(val => {
        res.json(val)
      })
      .catch(err => {
        res.json(err)
      })
  } else {
    res.status(400).json({ error: 'userId required' })
  }
}
