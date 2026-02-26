// import React, { useState } from 'react'
// import axios from 'axios';



// const AtsHome = () => {


//   const [file, setFile] = useState(null);
//   const [jobDescription, setJobDescription] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       // Check file type
//       const allowedTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//       if (!allowedTypes.includes(selectedFile.type)) {
//         setError('Please upload a .txt, .doc, or .docx file');
//         setFile(null);
//         return;
//       }
//       setFile(selectedFile);
//       setError('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('Please select a file');
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     const formData = new FormData();
//     formData.append('resume', file);
//     formData.append('jobDescription', jobDescription);

//     try {
//       const response = await axios.post('http://localhost:5000/api/analyze-resume', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setResult(response.data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Error analyzing resume. Please try again.');
//       console.error('Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
     
//     <div className="App">
//       <header className="App-header">
//         <h1>ATS Resume Analyzer</h1>
//         <p>Upload your resume and get an ATS score with detailed feedback</p>
//       </header>

//       <main className="App-main">
//         <div className="upload-container">
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="resume">Upload Resume (TXT, DOC, DOCX):</label>
//               <input
//                 type="file"
//                 id="resume"
//                 accept=".txt,.doc,.docx,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                 onChange={handleFileChange}
//                 className="file-input"
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="jobDescription">Job Description (Optional):</label>
//               <textarea
//                 id="jobDescription"
//                 value={jobDescription}
//                 onChange={(e) => setJobDescription(e.target.value)}
//                 placeholder="Paste the job description here for more accurate analysis..."
//                 rows="5"
//                 className="textarea-input"
//               />
//             </div>

//             {error && <div className="error-message">{error}</div>}

//             <button type="submit" disabled={loading} className="submit-btn">
//               {loading ? 'Analyzing...' : 'Analyze Resume'}
//             </button>
//           </form>
//         </div>

//         {loading && (
//           <div className="loading">
//             <div className="spinner"></div>
//             <p>Analyzing your resume with AI...</p>
//           </div>
//         )}

//         {result && (
//           <div className="result-container">
//             <h2>Analysis Results</h2>
            
//             <div className="score-section">
//               <div className="score-circle">
//                 <span className="score-number">{result.score}</span>
//                 <span className="score-label">ATS Score</span>
//               </div>
//             </div>

//             <div className="summary-section">
//               <h3>Summary</h3>
//               <p>{result.summary}</p>
//             </div>

//             <div className="feedback-section">
//               <div className="strengths">
//                 <h3>✅ Strengths</h3>
//                 <ul>
//                   {result.feedback.strengths.map((strength, index) => (
//                     <li key={index}>{strength}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="weaknesses">
//                 <h3>⚠️ Areas for Improvement</h3>
//                 <ul>
//                   {result.feedback.weaknesses.map((weakness, index) => (
//                     <li key={index}>{weakness}</li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="suggestions">
//                 <h3>💡 Suggestions</h3>
//                 <ul>
//                   {result.feedback.suggestions.map((suggestion, index) => (
//                     <li key={index}>{suggestion}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <button onClick={() => setResult(null)} className="new-analysis-btn">
//               Analyze Another Resume
//             </button>
            
//           </div>
//         )}

//       </main>
//     </div>

//   );
    


// }

// export default AtsHome




// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [file, setFile] = useState(null);
//   const [jobDescription, setJobDescription] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       // Check file type
//       const allowedTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//       if (!allowedTypes.includes(selectedFile.type)) {
//         setError('Please upload a .txt, .doc, or .docx file');
//         setFile(null);
//         return;
//       }
//       setFile(selectedFile);
//       setError('');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) {
//       setError('Please select a file');
//       return;
//     }

//     setLoading(true);
//     setError('');
    
//     const formData = new FormData();
//     formData.append('resume', file);
//     formData.append('jobDescription', jobDescription);

//     try {
//       const response = await axios.post('http://localhost:5000/api/analyze-resume', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       setResult(response.data);
//     } catch (err) {
//       setError(err.response?.data?.error || 'Error analyzing resume. Please try again.');
//       console.error('Error:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-blue-600">
//       <header className="bg-white/10 backdrop-blur-md text-white py-8 px-4 text-center shadow-lg">
//         <h1 className="text-4xl md:text-5xl font-bold mb-2">ATS Resume Analyzer</h1>
//         <p className="text-lg opacity-90">Upload your resume and get an ATS score with detailed feedback</p>
//       </header>

//       <main className="flex-1 flex flex-col items-center p-8">
//         <div className="bg-white rounded-xl p-8 w-full max-w-2xl shadow-2xl">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label htmlFor="resume" className="block mb-2 text-gray-700 font-semibold">
//                 Upload Resume (TXT, DOC, DOCX):
//               </label>
//               <input
//                 type="file"
//                 id="resume"
//                 accept=".txt,.doc,.docx,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//                 onChange={handleFileChange}
//                 className="w-full p-3 border-2 border-dashed border-purple-500 rounded-lg bg-purple-50 cursor-pointer hover:border-purple-700 transition-colors"
//               />
//             </div>

//             <div className="mb-6">
//               <label htmlFor="jobDescription" className="block mb-2 text-gray-700 font-semibold">
//                 Job Description (Optional):
//               </label>
//               <textarea
//                 id="jobDescription"
//                 value={jobDescription}
//                 onChange={(e) => setJobDescription(e.target.value)}
//                 placeholder="Paste the job description here for more accurate analysis..."
//                 rows="5"
//                 className="w-full p-3 border-2 border-gray-200 rounded-lg font-inherit resize-y focus:outline-none focus:border-purple-500 transition-colors"
//               />
//             </div>

//             {error && (
//               <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 border-l-4 border-red-700">
//                 {error}
//               </div>
//             )}

//             <button 
//               type="submit" 
//               disabled={loading} 
//               className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg text-lg font-semibold cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
//             >
//               {loading ? 'Analyzing...' : 'Analyze Resume'}
//             </button>
//           </form>
//         </div>

//         {loading && (
//           <div className="text-center mt-8 text-white">
//             <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
//             <p>Analyzing your resume with AI...</p>
//           </div>
//         )}

//         {result && (
//           <div className="bg-white rounded-xl p-8 mt-8 w-full max-w-4xl shadow-2xl">
//             <h2 className="text-2xl text-gray-700 mb-8 text-center border-b-2 border-gray-100 pb-4">
//               Analysis Results
//             </h2>
            
//             <div className="flex justify-center mb-8">
//               <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex flex-col justify-center items-center text-white shadow-lg">
//                 <span className="text-4xl font-bold">{result.score}</span>
//                 <span className="text-sm opacity-90 mt-2">ATS Score</span>
//               </div>
//             </div>

//             <div className="bg-purple-50 p-6 rounded-lg mb-8">
//               <h3 className="text-gray-700 mb-4">Summary</h3>
//               <p className="text-gray-600 leading-relaxed">{result.summary}</p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <div className="bg-green-50 p-4 rounded-lg">
//                 <h3 className="text-gray-700 mb-4 text-lg">✅ Strengths</h3>
//                 <ul className="list-none p-0">
//                   {result.feedback.strengths.map((strength, index) => (
//                     <li key={index} className="py-2 border-b border-black/10 last:border-b-0 leading-relaxed">
//                       {strength}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-orange-50 p-4 rounded-lg">
//                 <h3 className="text-gray-700 mb-4 text-lg">⚠️ Areas for Improvement</h3>
//                 <ul className="list-none p-0">
//                   {result.feedback.weaknesses.map((weakness, index) => (
//                     <li key={index} className="py-2 border-b border-black/10 last:border-b-0 leading-relaxed">
//                       {weakness}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="bg-blue-50 p-4 rounded-lg">
//                 <h3 className="text-gray-700 mb-4 text-lg">💡 Suggestions</h3>
//                 <ul className="list-none p-0">
//                   {result.feedback.suggestions.map((suggestion, index) => (
//                     <li key={index} className="py-2 border-b border-black/10 last:border-b-0 leading-relaxed">
//                       {suggestion}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <button 
//               onClick={() => setResult(null)} 
//               className="w-full py-4 bg-gray-100 text-gray-700 rounded-lg text-base font-semibold cursor-pointer border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
//             >
//               Analyze Another Resume
//             </button>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default App;



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AtsHome = () => {
  const [file, setFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const allowedTypes = ['text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(selectedFile.type)) {
        setError('Please upload a .txt, .doc, or .docx file');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file');
      return;
    }

    setLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await axios.post('http://localhost:5000/api/analyze-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Error analyzing resume. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Back Button - Matching Services style */}
        <Link to="/services" className="text-[#A6FF5D] hover:underline mb-8 inline-flex items-center gap-2 group">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="group-hover:-translate-x-1 transition-transform"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Services
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          ATS <span className="text-[#A6FF5D]">Optimizer</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Upload your resume and get an ATS score with detailed feedback to improve your chances
        </p>

        {!result ? (
          <div className="max-w-2xl mx-auto">
            {/* Upload Form - Matching Services card style */}
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="resume" className="block text-white font-medium mb-2">
                    Upload Resume <span className="text-gray-400 text-sm">(TXT, DOC, DOCX)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      accept=".txt,.doc,.docx,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      onChange={handleFileChange}
                      className="w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A6FF5D] file:text-gray-900 hover:file:bg-[#8be04e] cursor-pointer border border-gray-700 rounded-lg p-2 bg-gray-900/50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="jobDescription" className="block text-white font-medium mb-2">
                    Job Description <span className="text-gray-400 text-sm">(Optional)</span>
                  </label>
                  <textarea
                    id="jobDescription"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the job description here for more accurate analysis..."
                    rows="5"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#A6FF5D] transition"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                    {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={loading} 
                  className="w-full bg-[#A6FF5D] hover:bg-[#8be04e] text-gray-900 font-semibold py-3 px-6 rounded-lg transition transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Analyzing...' : 'Analyze Resume'}
                </button>
              </form>
            </div>

            {loading && (
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-3 bg-gray-800/50 px-6 py-3 rounded-full border border-gray-700">
                  <div className="w-5 h-5 border-2 border-[#A6FF5D] border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-gray-300">Analyzing your resume with AI...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Results Section - Matching Services card style */
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-8 text-center border-b border-gray-700 pb-4">
                Analysis <span className="text-[#A6FF5D]">Results</span>
              </h2>
              
              {/* Score Circle */}
              <div className="flex justify-center mb-8">
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-[#A6FF5D]"
                    style={{ 
                      clipPath: `polygon(50% 50%, 50% 0%, ${result.score >= 25 ? '100% 0%' : '50% 0%'}, ${result.score >= 50 ? '100% 50%' : '50% 50%'}, ${result.score >= 75 ? '100% 100%' : '50% 50%'}, ${result.score >= 90 ? '50% 100%' : '50% 50%'})`
                    }}
                  ></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-white">{result.score}</span>
                    <span className="text-xs text-gray-400">ATS Score</span>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 mb-8">
                <h3 className="text-[#A6FF5D] font-semibold mb-3">📋 Summary</h3>
                <p className="text-gray-300 leading-relaxed">{result.summary}</p>
              </div>

              {/* Feedback Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Strengths */}
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h3 className="text-green-400 font-semibold mb-4 flex items-center gap-2">
                    <span>✅</span> Strengths
                  </h3>
                  <ul className="space-y-2">
                    {result.feedback.strengths.map((strength, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Weaknesses */}
                <div className="bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                  <h3 className="text-yellow-400 font-semibold mb-4 flex items-center gap-2">
                    <span>⚠️</span> Improvements
                  </h3>
                  <ul className="space-y-2">
                    {result.feedback.weaknesses.map((weakness, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">•</span>
                        <span>{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Suggestions */}
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h3 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                    <span>💡</span> Suggestions
                  </h3>
                  <ul className="space-y-2">
                    {result.feedback.suggestions.map((suggestion, index) => (
                      <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={() => setResult(null)} 
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Analyze Another Resume
                </button>
                <button 
                  onClick={() => window.print()}
                  className="px-6 py-3 border border-gray-700 hover:border-[#A6FF5D] rounded-lg transition text-gray-400 hover:text-[#A6FF5D]"
                  title="Save Results"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AtsHome;