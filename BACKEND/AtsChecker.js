const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Function to extract text from uploaded file
const extractTextFromFile = (file) => {
  return file.buffer.toString('utf-8');
};

// Main ATS analysis function
const analyzeResumeWithATS = async (file, jobDescription = '') => {
  try {
    // Extract text from file
    const resumeText = extractTextFromFile(file);

    // Initialize the model
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
      throw new Error('Error parsing analysis result');
    }

    return analysisResult;
  } catch (error) {
    console.error('Error in ATS analysis:', error);
    throw error;
  }
};

module.exports = {
  analyzeResumeWithATS,
  extractTextFromFile
};