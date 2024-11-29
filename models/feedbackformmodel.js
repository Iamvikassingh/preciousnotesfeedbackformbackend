const mongoose = require('mongoose');

// Define the Feedback Schema
const feedbackSchema = new mongoose.Schema({
    sNo: {
        type: Number,
        required: true,
        unique: true, // Ensures serial numbers are unique
    },
    name: {
        type: String,
        required: [true, 'Name is required'], // Custom error message
        trim: true, // Removes extra whitespace
    },
    course: {
        type: String,
        required: [true, 'Course is required'],
        trim: true,
    },
    userType: {
        type: String,
        enum: ['student', 'teacher'], // Restrict to specific values
        required: [true, 'User type (student/teacher) is required'],
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        trim: true,
    },
    suggestion: {
        type: String,
        required: [true, 'Suggestion is required'],
        trim: true,
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        validate: {
            validator: function (v) {
                return /^[0-9]{10}$/.test(v); // Validates 10-digit phone numbers
            },
            message: (props) => `${props.value} is not a valid phone number!`,
        },
    },
    rating: {
        type: Number,
        required: [true, 'Rating is required'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating must be at most 5'],
    },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create the Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
