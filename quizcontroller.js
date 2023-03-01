const Quiz = require("../models/Quiz");

const index = (req, res, next) => {
    quizmodel.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

const store = (req, res, next) => {
    let quiz = new Quiz({
        question: req.body.question,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
        answer: req.body.answer,
    })
    quiz.save()
    .then(response => {
        res.json({
            message: 'questions added'
        })
    })
    .catch(error => {
        res.json({
            message : 'an error occured'
        })
    })
}

module.exports = {
    index,store
}