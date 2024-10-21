const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2; 
const fileUpload = require('express-fileupload'); 

dotenv.config();

// Import routes
const companyRoutes = require('./routes/companyRoutes');
const teamRoutes = require('./routes/teamRoutes');
const careerRoutes = require('./routes/careerRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const applicationsRoutes = require('./routes/applicationRoute');
const jobRoutes = require('./routes/jobRoutes')
const contactRoutes = require('./routes/contactRoutes');

const app = express();

// Connect to MongoDB
connectDB();

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));


// Middleware setup
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload()); 

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

console.log("Cloudinary configuration:");
console.log("Cloud Name:", process.env.CLOUDINARY_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Not Loaded");

// Routes
app.use('/api', companyRoutes);
app.use('/api/team', teamRoutes);
app.use('/api', careerRoutes);
app.use("/api", jobRoutes);
app.use('/api', applicationsRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
