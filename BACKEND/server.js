const express = require('express');
const multer = require('multer');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());


// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/plain' || 
        file.mimetype === 'application/msword' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only .txt, .doc, .docx files are allowed!'), false);
    }
  }
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to extract text from uploaded file
const extractTextFromFile = (file) => {
  // For now, assuming text files only
  // You can add PDF parsing later with pdf-parse library
  return file.buffer.toString('utf-8');
};

// API endpoint to analyze resume
app.post('/api/analyze-resume', upload.single('resume'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Extract text from file
    const resumeText = extractTextFromFile(req.file);

    // Get job description from request body (optional)
    const jobDescription = req.body.jobDescription || '';

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

    // Create prompt for ATS score analysis
    const prompt = `
    You are an expert ATS (Applicant Tracking System) analyzer. Analyze the following resume and provide:
    1. An ATS score out of 100
    2. Detailed feedback on strengths and weaknesses
    3. Specific suggestions for improvement

    ${jobDescription ? `Job Description: ${jobDescription}` : 'No specific job description provided. Provide general ATS analysis.'}

    Resume:
    ${resumeText}

    Please provide the response in the following JSON format:
    {
      "score": number,
      "feedback": {
        "strengths": ["strength1", "strength2", ...],
        "weaknesses": ["weakness1", "weakness2", ...],
        "suggestions": ["suggestion1", "suggestion2", ...]
      },
      "summary": "brief summary of the analysis"
      
    }
    `;

    // Generate content
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Parse the JSON response
    let analysisResult;
    try {
      // Remove any markdown formatting if present
      const jsonString = text.replace(/```json\n?|\n?```/g, '').trim();
      analysisResult = JSON.parse(jsonString);
    } catch (parseError) {
      console.error('Error parsing Gemini response:', parseError);
      return res.status(500).json({ error: 'Error parsing analysis result' });
    }

    res.json(analysisResult);
  } catch (error) {
    console.error('Error analyzing resume:', error);
    res.status(500).json({ error: 'Failed to analyze resume' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



















// const express = require('express');
// const multer = require('multer');
// const cors = require('cors');
// const { GoogleGenerativeAI } = require('@google/generative-ai');
// require('dotenv').config();

// // Import new modules
// const connectDB = require('./config/db');
// const authRoutes = require('./routes/authRoutes');
// const { protect } = require('./middleware/auth');

// const app = express();
// const port = process.env.PORT || 5000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Multer setup for file upload
// const storage = multer.memoryStorage();
// const upload = multer({ 
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === 'text/plain' || 
//         file.mimetype === 'application/msword' ||
//         file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
//       cb(null, true);
//     } else {
//       cb(new Error('Only .txt, .doc, .docx files are allowed!'), false);
//     }
//   }
// });

// // Initialize Gemini AI
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Function to extract text from uploaded file
// const extractTextFromFile = (file) => {
//   return file.buffer.toString('utf-8');
// };

// // Auth Routes
// app.use('/api/auth', authRoutes);

// // Protected API endpoint to analyze resume (now requires authentication)
// app.post('/api/analyze-resume', protect, upload.single('resume'), async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({ error: 'No file uploaded' });
//     }

//     // Extract text from file
//     const resumeText = extractTextFromFile(req.file);

//     // Get job description from request body (optional)
//     const jobDescription = req.body.jobDescription || '';

//     // Initialize the model
//     const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

//     // Create prompt for ATS score analysis
//     const prompt = `
//     You are an expert ATS (Applicant Tracking System) analyzer. Analyze the following resume and provide:
//     1. An ATS score out of 100
//     2. Detailed feedback on strengths and weaknesses
//     3. Specific suggestions for improvement

//     ${jobDescription ? `Job Description: ${jobDescription}` : 'No specific job description provided. Provide general ATS analysis.'}

//     Resume:
//     ${resumeText}

//     Please provide the response in the following JSON format:
//     {
//       "score": number,
//       "feedback": {
//         "strengths": ["strength1", "strength2", ...],
//         "weaknesses": ["weakness1", "weakness2", ...],
//         "suggestions": ["suggestion1", "suggestion2", ...]
//       },
//       "summary": "brief summary of the analysis"
//     }
//     `;

//     // Generate content
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     const text = response.text();
    
//     // Parse the JSON response
//     let analysisResult;
//     try {
//       const jsonString = text.replace(/```json\n?|\n?```/g, '').trim();
//       analysisResult = JSON.parse(jsonString);
//     } catch (parseError) {
//       console.error('Error parsing Gemini response:', parseError);
//       return res.status(500).json({ error: 'Error parsing analysis result' });
//     }

//     res.json(analysisResult);
//   } catch (error) {
//     console.error('Error analyzing resume:', error);
//     res.status(500).json({ error: 'Failed to analyze resume' });
//   }
// });

// // Health check endpoint (public)
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'Server is running' });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });