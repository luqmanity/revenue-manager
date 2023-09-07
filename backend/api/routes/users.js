const express = require('express');
const db = require('../../functions/database');
const database = require('../../functions/database');
const router = express.Router();

// Get request
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Users were fetched"
    });
});

// Adding new users
router.post('/', (req, res, next) => {
    const user = {
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age
    };
    database(`
    INSERT INTO users (email, firstname, lastname, age)
    VALUES ('${user.email}', '${user.firstname}', '${user.lastname}', ${user.age});
    `);

    res.status(200).json({
        message: "Handling post request",
        createdProduct: user
    });
});

module.exports = router;