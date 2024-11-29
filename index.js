const express = require("express");
const { connectToDb } = require('./connectionwithmongodb');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const ConnectionString = process.env.CONNECTIONSTRINGTODB;
const DataBaseName = 'Preciousnotesfeedbackform';
const originforcors = process.env.ORIGIN;

const userRouter = require('./router/preciousnotesfeedbackformrouter');

const app = express();

// CORS configuration
app.use(cors({
    origin: originforcors,  // Allow only your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],  // Specify any additional headers if needed
}));

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB Connection
connectToDb(`${ConnectionString}/${DataBaseName}`)
    .then(() => {
        console.log(`Successfully connected to the database: ${DataBaseName}`);
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err);
        process.exit(1); // Exit the process if DB connection fails
    });

// Routes
app.use('/api', userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is started on the port number ${PORT} - Welcome PreciousNotes's Developer: Vikas Singh`);
});

