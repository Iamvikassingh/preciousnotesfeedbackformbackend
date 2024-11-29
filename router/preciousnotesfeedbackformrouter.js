const express = require('express');
const {
    saveFeedback,
    getAllFeedback
} = require('../controller/feedbackcontroller');

const router = express.Router();

// Endpoint to save feedback
router.post('/feedback', saveFeedback);
router.get('/detailfeedback',getAllFeedback)

module.exports = router;
