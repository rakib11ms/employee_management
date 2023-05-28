const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');


const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}

const createRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('check', hashedPassword)
        const data = {
            name: name,
            email: email,
            password: hashedPassword
        }

        const user = new User(data);
        await user.save();
        const token = createToken(user._id);
        res.json(
            {
                status: 200,
                user: user
            }
        )
    }
    catch (error) {
        res.status(400).json({ error: error.message })

    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Check if the user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'User doesnot exists' });
        }

        // Validate the password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Create and send the token
        const token = createToken(user._id);
        res.json({ status: 200, user,token });
    } catch (error) {
        res.json({ status:400,error: error.message });
    }
};

module.exports = {
    createRegister, login
}

