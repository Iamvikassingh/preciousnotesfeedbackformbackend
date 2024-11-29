const Feedback = require('../models/feedbackformmodel');

// Save feedback data from the frontend
const saveFeedback = async (req, res) => {
    try {
        const feedbackData = req.body;

        // Auto-increment logic for sNo
        const lastFeedback = await Feedback.findOne().sort({ sNo: -1 });
        const sNo = lastFeedback ? lastFeedback.sNo + 1 : 1;

        // Create and save the new feedback
        const feedback = new Feedback({ ...feedbackData, sNo });
        await feedback.save();

        res.status(201).json({ message: 'Feedback submitted successfully', feedback });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    saveFeedback,
};
