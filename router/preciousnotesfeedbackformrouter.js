const express = require('express');
const { saveFeedback } = require('../controller/feedbackcontroller');

const router = express.Router();

// Endpoint to save feedback
router.post('/feedback', saveFeedback);

module.exports = router;
