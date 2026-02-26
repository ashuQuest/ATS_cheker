// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import LeftPanel from "./LeftPanel"; // Adjust path as needed
// import RightPanel from "./RightPanel"; // Adjust path as needed

// const AtsBuildigHome = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     // Personal Information
//     fullName: "",
//     email: "",
//     phone: "",
//     address: "",
//     linkedin: "",
//     github: "",
//     website: "",

//     // Skills (as object with categories)
//     skills: {
//       languages: "",
//       frameworks: "",
//       tools: "",
//       csFundamentals: "",
//       soft: "",
//     },

//     // Work Experience (as array) - Freelance & Full-time only
//     workExperience: [],

//     // Internship (NEW - separate section)
//     internship: [],

//     // Projects (as array)
//     projects: [],

//     // Training (as array)
//     training: [],

//     // Certifications (as array)
//     certifications: [],

//     // Achievements (as array)
//     achievements: [],

//     // Education (as nested object)
//     education: {
//       university: {
//         name: "",
//         location: "",
//         degree: "",
//         field: "",
//         duration: "",
//         cgpa: "",
//       },
//       intermediate: {
//         name: "",
//         location: "",
//         board: "",
//         stream: "",
//         duration: "",
//         percentage: "",
//       },
//       matriculation: {
//         name: "",
//         location: "",
//         board: "",
//         duration: "",
//         percentage: "",
//       },
//     },
//   });

//  const rightPanelRef = useRef();

//   const handleDownloadPDF = () => {
//     // Call the downloadPDF function from RightPanel
//     if (rightPanelRef.current) {
//       rightPanelRef.current.downloadPDF();
//     }
// };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
//       <div className="container mx-auto  py-16 border-amber-500 border w-screen">
//         {/* Back Button */}
//         <Link
//           to="/services"
//           className="text-[#A6FF5D] hover:underline mb-8 inline-block border-amber-500 border"
//         >
//           ← Back to Services
//         </Link>

//         {/* PDF Download Section */}
//         <div className="mb-12 flex flex-col sm:flex-row justify-between items-center bg-gray-800/50 p-4 rounded-xl  gap-4 border-amber-500 border">
//           <h2 className="text-2xl font-semibold">Resume Building</h2>
//           <button className="bg-[#A6FF5D] text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-[#95e64d] transition flex items-center gap-2 w-full sm:w-auto justify-center"
//             onClick={handleDownloadPDF}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//               />
//             </svg>
//             Download PDF
//           </button>
//         </div>

//         {/* Two Column Layout with LeftPanel and RightPanel */}
//         {/* Two Column Layout with LeftPanel and RightPanel */}
//         <div className="flex flex-col md:flex-row gap-8 mt-8">
//           {/* Left Panel - 50% width with scrolling */}
//           <div className="w-full md:w-1/2">
//             <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 max-h-[800px] overflow-y-auto">
//               <LeftPanel
//                 formData={formData}
//                 setFormData={setFormData}
//                 currentStep={currentStep}
//                 setCurrentStep={setCurrentStep}
//               />
//             </div>
//           </div>

//           {/* Right Panel - 50% width with fixed height for A4-like preview */}
//           <div className="w-full md:w-1/2">
//             <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 sticky top-24">
//               <div className="max-h-[800px] overflow-y-auto">
//                 <RightPanel formData={formData} />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Optional: Add margin bottom for better spacing */}
//         <div className="mb-8"></div>

//         {/* Optional: Add margin bottom for better spacing */}
//         <div className="mb-8"></div>
//       </div>
//     </div>
//   );
// };

// export default AtsBuildigHome;

import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const AtsBuildigHome = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // ... aapka sara form data (same rahega)
  });

  const rightPanelRef = useRef();

  const handleDownloadPDF = () => {
    if (rightPanelRef.current) {
      rightPanelRef.current.downloadPDF();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white ">
      <div className="container mx-auto px-4 ">
        {/* Back Button */}
        <Link
          to="/services"
          className="text-[#A6FF5D] mb-8 inline-block mt-10"
        >
          ← Back to Services
        </Link>

        {/* PDF Download Section */}
        <div className="mb-12 flex flex-col sm:flex-row justify-between items-center bg-gray-800/50 p-4 rounded-xl gap-4">
          <h2 className="text-2xl font-semibold">Resume Building</h2>
          <button
            onClick={handleDownloadPDF}
            className="bg-[#A6FF5D] text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-[#95e64d] transition flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Two Column Layout */}
      </div>

      <div className="flex flex-col md:flex-row mt-8">
        {/* Left Panel */}
        <div className="w-full md:w-1/2 ">
          <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 max-h-[800px] overflow-y-auto no-scrollbar">
            <LeftPanel
              formData={formData}
              setFormData={setFormData}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          </div>
        </div>

        {/* Right Panel with REF */}
        <div className="md:w-1/2">
          <div className="max-h-[800px] overflow-y-auto no-scrollbar ">
            <RightPanel ref={rightPanelRef} formData={formData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtsBuildigHome;
