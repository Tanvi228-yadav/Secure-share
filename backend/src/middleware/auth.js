'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config');

// JWT verification middleware
function verifyToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send({ message: 'No token provided!' });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'Unauthorized!' });
        req.userId = decoded.id;
        next();
    });
}

// Refresh token logic
function refreshToken(req, res) {
    const token = req.body.token;
    if (!token) return res.status(403).send({ message: 'No token provided!' });

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) return res.status(401).send({ message: 'Unauthorized!' });
        const newToken = jwt.sign({ id: decoded.id }, config.secret, { expiresIn: 86400 }); // expires in 24 hours
        res.status(200).send({ token: newToken });
    });
}

// Role-based access control middleware
function authorizeRoles(...roles) {
    return (req, res, next) => {
        if (!roles.includes(req.userRole)) {
            return res.status(403).send({ message: 'Require Admin Role!' });
        }
        next();
    };
}

module.exports = {
    verifyToken,
    refreshToken,
    authorizeRoles
};
