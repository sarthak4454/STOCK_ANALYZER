const jwt = require('jsonwebtoken');

//const SECRET = "shruti1234";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
        expiresIn: "15d",
    });
};

module.exports = generateToken;
