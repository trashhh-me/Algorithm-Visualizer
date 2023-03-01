const Employee = require('../models/Employee')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const { findOne } = require('../models/User')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error:err
            })
        }
        
let employee = new Employee ({
    name : req.body.name,
    email : req.body.email,
    phone : req.body.phone,
    password : hashedPass
})
employee.save()
.then(employee => {
    res.json ({
        message: 'user added succesfully'
    })
})
.catch(employee => {
    res.json ({
        message: 'an error occured'
    })
})
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    Employee.findOne({$or: [{email : username},{phone : username}]})
    .then(employee => {
        if (employee){
            bcrypt.compare(password, employee.password, function(err, result) {
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name : employee.name}, 'Azqw@qwe#', {expiresIn: '1h'})
                    res.json ({
                        message: "login succesful",
                        token
                    })
                } else {
                    res.json ({
                        message : "password doesnot match",
                    })
                }
            })
        } else {
            res.json ({
                message : "no user found"
            })
        }
    })
}


module.exports = {
    register,login
}