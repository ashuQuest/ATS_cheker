// import React, { useRef, forwardRef, useImperativeHandle } from "react";


// import React, { useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";

// const RightPanel = forwardRef(({ formData }, ref) => {
//   const resumeRef = useRef();

//   // ✅ SAHI TARIKA - No 'const' inside useImperativeHandle
//   useImperativeHandle(ref, () => ({

// const RightPanel = ({ formData }) => {
//   const resumeRef = useRef();

//   const downloadPDF = async () => {
//     const element = resumeRef.current;

//     try {
//       const canvas = await html2canvas(element, {
//         scale: 3,
//         useCORS: true,
//         backgroundColor: "#ffffff",
//         logging: false,
//         allowTaint: false,
//         foreignObjectRendering: false,
//         windowWidth: 210 * 3.78, // A4 width in pixels (210mm * 3.78 = ~794px)
//         onclone: (clonedDoc, clonedElement) => {
//           // Ensure cloned element has exact dimensions
//           clonedElement.style.width = '210mm';
//           clonedElement.style.margin = '0';
//           clonedElement.style.padding = '8mm'; // Match your padding
          
//           const allElements = clonedElement.getElementsByTagName('*');
//           for (let el of allElements) {
//             if (el.style) {
//               const styles = window.getComputedStyle(el);
//               if (styles.color && styles.color.includes('oklch')) {
//                 el.style.color = '#000000';
//               }
//               if (styles.backgroundColor && styles.backgroundColor.includes('oklch')) {
//                 el.style.backgroundColor = '#ffffff';
//               }
//             }
//           }
//         }
//       });

//       const imgData = canvas.toDataURL("image/png");

//       // PDF setup
//       const pdf = new jsPDF({
//         orientation: "p",
//         unit: "mm",
//         format: "a4",
//       });

//       const pdfWidth = 210; // A4 width in mm
//       const pdfHeight = 297; // A4 height in mm
      
//       // Calculate image dimensions to fit PDF width
//       const imgWidth = pdfWidth;
//       const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
//       // Calculate how many pages needed
//       let remainingHeight = imgHeight;
//       let position = 0;
//       let pageCount = 1;

//       // Add first page
//       pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//       remainingHeight -= pdfHeight;
      
//       // Add subsequent pages if needed
//       while (remainingHeight > 0) {
//         position -= pdfHeight; // Move position up for next page
//         pdf.addPage();
//         pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
//         remainingHeight -= pdfHeight;
//         pageCount++;
//       }

//       console.log(`PDF generated with ${pageCount} pages`);
//       pdf.save("Resume.pdf");
      
//     } catch (error) {
//       console.error("PDF generation error:", error);
//       alert("Error generating PDF. Please try again.");
//     }
//   };

//   const hasItems = (array) => {
//     return array && Array.isArray(array) && array.some(item => 
//       item && Object.values(item).some(val => val && val.toString().trim() !== '')
//     );
//   };

//   const getValidItems = (array, condition = (item) => true) => {
//     if (!array || !Array.isArray(array)) return [];
//     return array.filter(item => item && condition(item));
//   };

//   return (
//     <div className="w-1/2 bg-green-300 overflow-y-auto p-5 flex flex-col items-center">
//       <button 
//         onClick={downloadPDF} 
//         className="sticky top-5 z-50 bg-green-600 text-white border-none px-6 py-3 rounded-md cursor-pointer text-base font-medium transition-all mb-5 shadow-md hover:bg-green-700"
//       >
//         📥 Download PDF
//       </button>
      
//       {/* Resume Preview - with explicit height and overflow handling */}
//       <div className="w-[210mm] min-h-[297mm] overflow-visible bg-white shadow-lg">
//         <div 
//           ref={resumeRef}
//           className="p-8 font-[Georgia] text-black"
//           style={{ 
//             backgroundColor: "#ffffff",
//             color: "#000000",
//             fontFamily: "Georgia, serif",
//             width: "210mm",
//             minHeight: "297mm",
//             boxSizing: "border-box"
//           }}
//         >
//           {/* Header - Personal Info */}
//           <div className="mb-1">
//             <h1 className="text-2xl font-bold mb-2" style={{color: "#002060", textTransform: "capitalize"}}>
//               {formData?.fullName || "Your Name"}
//             </h1>
            
//             <div className="flex justify-between items-center text-sm mb-1 text-[10px]">
//               {formData?.linkedin && (
//                 <div><b>LinkedIn:</b> <span style={{color:"#0000EE", textDecoration: "underline"}}>{formData.linkedin}</span></div>
//               )}
//               {formData?.email && (
//                 <span><b>Email:</b> <span style={{color:"#0000EE"}}>{formData.email}</span></span>
//               )}
//             </div>
            
//             <div className="text-sm space-y-0.5 flex justify-between text-[10px]">
//               {formData?.github && (
//                 <div><b>Github:</b> <span style={{color:"#0000EE", textDecoration: "underline"}}>{formData.github}</span></div>
//               )}
//               {formData?.phone && (
//                 <span><b>Mobile:</b> +91 {formData.phone}</span>
//               )}
//             </div>
//           </div>

//           {/* SKILLS Section */}
//           {formData?.skills && (
//             <div className="mb-1 font-[Georgia]">
//               <h2 className="font-bold uppercase" style={{fontSize:"12px", color: "#1a1a1a"}}>Skills</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {formData.skills.languages && (
//                 <div className="flex justify-between pl-2 mt-1">
//                   <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Languages</span>:</span>
//                   <span className="text-sm w-[77%] text-[10px]">{formData.skills.languages}</span>
//                 </div>
//               )}
              
//               {formData.skills.frameworks && (
//                 <div className="flex justify-between pl-2">
//                   <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Frameworks & Libraries</span>:</span>
//                   <span className="text-sm w-[77%] text-[10px]">{formData.skills.frameworks}</span>
//                 </div>
//               )}
              
//               {formData.skills.tools && (
//                 <div className="flex justify-between pl-2">
//                   <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Tools & Platforms</span>:</span>
//                   <span className="text-sm w-[77%] text-[10px]">{formData.skills.tools}</span>
//                 </div>
//               )}
              
//               {formData.skills.csFundamentals && (
//                 <div className="flex justify-between pl-2">
//                   <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Core CS Fundamentals</span>:</span>
//                   <span className="text-sm w-[77%] text-[10px]">{formData.skills.csFundamentals}</span>
//                 </div>
//               )}
              
//               {formData.skills.soft && (
//                 <div className="flex justify-between pl-2">
//                   <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Soft Skills</span>:</span>
//                   <span className="text-sm w-[77%] text-[10px]">{formData.skills.soft}</span>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* WORK EXPERIENCE Section */}
//           {hasItems(formData?.workExperience) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold" style={{color: "#1a1a1a"}}>WORK EXPERIENCE</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.workExperience, exp => exp.position && exp.type !== "internship").map((exp, index) => (
//                 <div key={index}>
//                   <div className="font-semibold text-base flex text-[10px] mt-1 ml-2 justify-between capitalize">
//                     <div>
//                       {exp.type === "freelance" ? "Freelancer" : exp.position}
//                       <span className="text-black"> {exp.company && ` | ${exp.company}${exp.company && exp.githubLink ? ' |' : ''}`}{exp.githubLink && ' GitHub'}</span>
//                     </div>
//                     {exp.duration && (
//                       <div className="whitespace-pre-wrap">
//                         {exp.duration
//                           .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                           .replace(/\s*[-–—]\s*/g, ' – ')
//                           .replace(/\s+/g, ' ')
//                           .trim()}
//                       </div>
//                     )}
//                   </div>
                  
//                   {exp.description && (
//                     <div className="text-[10px] w-[96%] pl-2">
//                       {exp.description.split('\n').map((line, i) => (
//                         line.trim() && (
//                           <div key={i} className="flex items-start gap-1">
//                             <span className="text-black">•</span>
//                             <span>{line.replace('•', '').trim()}</span>
//                           </div>
//                         )
//                       ))}
//                     </div>
//                   )}
                  
//                   {exp.technologies && (
//                     <div className="text-[10px] pl-4">
//                       <b>Technologies</b>: {exp.technologies}
//                     </div>
//                   )}
                  
//                   {index < formData.workExperience.filter(e => e.position && e.type !== "internship").length - 1 && (
//                     <div className="my-1"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* INTERNSHIP Section */}
//           {hasItems(formData?.internship) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold" style={{color: "#1a1a1a"}}>INTERNSHIP</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.internship, intern => intern.position).map((intern, index) => (
//                 <div key={index}>
//                   <div className="mb-[2px]">
//                     <div className="font-bold text-[10px] pl-2 flex justify-between items-center mt-1">
//                       <div>
//                         {intern.position}
//                         <span>{intern.company && ` - ${intern.company}`}</span> 
//                         {intern.certificateLink && " | Certificate"}
//                       </div>
//                       {intern.duration && (
//                         <div className="whitespace-pre-wrap">
//                           {intern.duration
//                             .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                             .replace(/\s*[-–—]\s*/g, ' – ')
//                             .replace(/\s+/g, ' ')
//                             .trim()}
//                         </div>
//                       )}
//                     </div>
                    
//                     {intern.description && (
//                       <div className="text-[10px] text-black pl-2 w-[96%]">
//                         {intern.description.split('\n').map((line, i) => (
//                           line.trim() && (
//                             <div key={i} className="flex items-start gap-1">
//                               <span className="text-black">•</span>
//                               <span>{line.replace('•', '').trim()}</span>
//                             </div>
//                           )
//                         ))}
//                       </div>
//                     )}
                    
//                     {intern.technologies && (
//                       <div className="text-[10px] pl-4">
//                         <b>Technologies</b>: {intern.technologies}
//                       </div>
//                     )}
//                   </div>
                  
//                   {index < formData.internship.filter(i => i.position).length - 1 && (
//                     <div className="my-1"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* PROJECTS Section */}
//           {hasItems(formData?.projects) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Projects</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.projects, proj => proj.name).map((project, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-center text-[10px] pl-2 mt-1">
//                     <span className="font-semibold capitalize">{project.name}</span>
//                     {project.date && (
//                       <div className="whitespace-pre-wrap font-bold capitalize">
//                         {project.date
//                           .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                           .replace(/\s*[-–—]\s*/g, ' – ')
//                           .replace(/\s+/g, ' ')
//                           .trim()}
//                       </div>
//                     )}
//                   </div>
                 
//                   {project.description && (
//                     <div className="text-[10px] text-black pl-2 w-[96%]">
//                       {project.description.split('\n').map((line, i) => (
//                         line.trim() && (
//                           <div key={i} className="flex items-start gap-1">
//                             <span className="text-black">•</span>
//                             <span>{line.replace('•', '').trim()}</span>
//                           </div>
//                         )
//                       ))}
//                     </div>
//                   )}

//                   {project.technologies && (
//                     <div className="text-[10px] pl-4">
//                       <b>Technologies</b>: {project.technologies}
//                     </div>
//                   )}
                  
//                   {project.githubLink && (
//                     <div className="text-[10px] pl-4 text-blue-600 underline">
//                       {project.githubLink}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* TRAINING Section */}
//           {hasItems(formData?.training) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Training</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.training, train => train.organization).map((train, index) => (
//                 <div key={index}>
//                   <div className="flex justify-between items-center text-[10px] pl-2 mt-1">
//                     <span className="font-semibold capitalize">{train.organization} | Certificate</span>
//                     {train.duration && (
//                       <div className="whitespace-pre-wrap font-bold capitalize">
//                         {train.duration
//                           .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                           .replace(/\s*[-–—]\s*/g, ' – ')
//                           .replace(/\s+/g, ' ')
//                           .trim()}
//                       </div>
//                     )}
//                   </div>
                  
//                   {train.topic && (
//                     <div className="text-[10px] pl-2 text-black font-bold capitalize">
//                       {train.topic}
//                     </div>
//                   )}
                  
//                   {train.description && (
//                     <div className="text-[10px] text-black pl-2 w-[96%]">
//                       {train.description.split('\n').map((line, i) => (
//                         line.trim() && (
//                           <div key={i} className="flex items-start gap-1">
//                             <span className="text-black">•</span>
//                             <span>{line.replace('•', '').trim()}</span>
//                           </div>
//                         )
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* CERTIFICATIONS Section */}
//           {hasItems(formData?.certifications) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Certifications</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.certifications, cert => cert.name).map((cert, index) => (
//                 <div key={index}>
//                   <div className="text-[10px] mt-1">
//                     <div className="justify-between flex capitalize items-center">
//                       <div>
//                         <span className="text-black ml-1">•</span>
//                         <span className="ml-1">{cert.name}</span>
//                         {cert.issuer && <span> - {cert.issuer}</span>}
//                       </div>
//                       {cert.date && (
//                         <span>
//                           {cert.date
//                             .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                             .replace(/\s*[-–—]\s*/g, ' – ')
//                             .replace(/\s+/g, ' ')
//                             .trim()}
//                         </span>
//                       )}
//                     </div>
//                     {cert.link && (
//                       <div className="text-xs text-blue-600 underline pl-4">{cert.link}</div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ACHIEVEMENTS Section */}
//           {hasItems(formData?.achievements) && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Achievements</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {getValidItems(formData.achievements, ach => ach.description).map((ach, index) => (
//                 <div key={index}>
//                   <div className="text-[10px] mt-1">
//                     <div className="justify-between flex capitalize items-center">
//                       <div>
//                         <span className="text-black ml-1">•</span>
//                         <span className="ml-1" 
//                           dangerouslySetInnerHTML={{ 
//                             __html: ach.description
//                               .replace(/^[•\-]\s*/, '')
//                               .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                               .replace(/\*(.*?)\*/g, '<i>$1</i>')
//                               .replace(/__(.*?)__/g, '<u>$1</u>')
//                           }}
//                         />
//                         {ach.link && <span className="text-blue-600 underline ml-1">| Link</span>}
//                       </div>
//                       {ach.date && (
//                         <span>
//                           {ach.date
//                             .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
//                             .replace(/\s*[-–—]\s*/g, ' – ')
//                             .replace(/\s+/g, ' ')
//                             .trim()}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* EDUCATION Section */}
//           {formData?.education && (
//             <div className="font-[Georgia]">
//               <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Education</h2>
//               <div className="border-b border-black mt-2"></div>
              
//               {/* University */}
//               {formData.education?.university?.name && (
//                 <div className="text-[10px] mt-1">
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold capitalize"
//                       dangerouslySetInnerHTML={{ 
//                         __html: formData.education.university.name
//                           .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                       }}
//                     />
//                     {formData.education.university.location && (
//                       <span className="capitalize"
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.university.location
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>

//                   <div className="flex justify-between">
//                     <div
//                       dangerouslySetInnerHTML={{ 
//                         __html: `
//                           ${formData.education.university.degree || ''}
//                           ${formData.education.university.field ? ` - ${formData.education.university.field}` : ''}
//                           ${formData.education.university.cgpa ? `; CGPA: ${formData.education.university.cgpa}` : ''}
//                         `
//                       }}
//                     />
//                     {formData.education.university.duration && (
//                       <div
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.university.duration
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Intermediate */}
//               {formData.education?.intermediate?.name && (
//                 <div className="text-[10px] mt-1">
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold capitalize"
//                       dangerouslySetInnerHTML={{ 
//                         __html: formData.education.intermediate.name
//                           .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                       }}
//                     />
//                     {formData.education.intermediate.location && (
//                       <span className="capitalize"
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.intermediate.location
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>

//                   <div className="flex justify-between">
//                     <div
//                       dangerouslySetInnerHTML={{ 
//                         __html: `
//                           ${formData.education.intermediate.board || ''}
//                           ${formData.education.intermediate.percentage ? `; Percentage: ${formData.education.intermediate.percentage}` : ''}
//                         `
//                       }}
//                     />
//                     {formData.education.intermediate.duration && (
//                       <div
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.intermediate.duration
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               )}

//               {/* Matriculation */}
//               {formData.education?.matriculation?.name && (
//                 <div className="text-[10px] mt-1">
//                   <div className="flex justify-between items-center">
//                     <span className="font-bold capitalize"
//                       dangerouslySetInnerHTML={{ 
//                         __html: formData.education.matriculation.name
//                           .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                       }}
//                     />
//                     {formData.education.matriculation.location && (
//                       <span className="capitalize"
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.matriculation.location
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>

//                   <div className="flex justify-between">
//                     <div
//                       dangerouslySetInnerHTML={{ 
//                         __html: `
//                           ${formData.education.matriculation.board || ''}
//                           ${formData.education.matriculation.percentage ? `; Percentage: ${formData.education.matriculation.percentage}` : ''}
//                         `
//                       }}
//                     />
//                     {formData.education.matriculation.duration && (
//                       <div
//                         dangerouslySetInnerHTML={{ 
//                           __html: formData.education.matriculation.duration
//                             .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
//                         }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RightPanel;


























import React, { useRef, forwardRef, useImperativeHandle } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const RightPanel = forwardRef(({ formData }, ref) => {
  const resumeRef = useRef();

  // ✅ Expose download function to parent component
  useImperativeHandle(ref, () => ({
    downloadPDF: async () => {
      const element = resumeRef.current;

      try {
        const canvas = await html2canvas(element, {
          scale: 3,
          useCORS: true,
          backgroundColor: "#ffffff",
          logging: false,
          allowTaint: false,
          foreignObjectRendering: false,
          windowWidth: 210 * 3.78,
          onclone: (clonedDoc, clonedElement) => {
            clonedElement.style.width = '210mm';
            clonedElement.style.margin = '0';
            clonedElement.style.padding = '8mm';
            
            const allElements = clonedElement.getElementsByTagName('*');
            for (let el of allElements) {
              if (el.style) {
                const styles = window.getComputedStyle(el);
                if (styles.color && styles.color.includes('oklch')) {
                  el.style.color = '#000000';
                }
                if (styles.backgroundColor && styles.backgroundColor.includes('oklch')) {
                  el.style.backgroundColor = '#ffffff';
                }
              }
            }
          }
        });

        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: "a4",
        });

        const pdfWidth = 210;
        const pdfHeight = 297;
        
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        let remainingHeight = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        remainingHeight -= pdfHeight;
        
        while (remainingHeight > 0) {
          position -= pdfHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          remainingHeight -= pdfHeight;
        }

        pdf.save("Resume.pdf");
        
      } catch (error) {
        console.error("PDF generation error:", error);
        alert("Error generating PDF. Please try again.");
      }
    }
  }));

  const hasItems = (array) => {
    return array && Array.isArray(array) && array.some(item => 
      item && Object.values(item).some(val => val && val.toString().trim() !== '')
    );
  };

  const getValidItems = (array, condition = (item) => true) => {
    if (!array || !Array.isArray(array)) return [];
    return array.filter(item => item && condition(item));
  };

  return (
    <div className="w-full overflow-y-auto flex flex-col items-center no-scrollbar">
      {/* Resume Preview */}
      <div className="w-[190mm] min-h-[297mm] bg-white shadow-lg ">
        <div 
          ref={resumeRef}
          className="p-8 font-[Georgia] text-black"
          style={{ 
            backgroundColor: "#ffffff",
            color: "#000000",
            fontFamily: "Georgia, serif",
            width: "210mm",
            minHeight: "297mm",
            boxSizing: "border-box"
          }}
        >
          {/* Header - Personal Info WITH DOWNLOAD BUTTON */}
          <div className="mb-1">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold mb-2" style={{color: "#002060", textTransform: "capitalize"}}>
                {formData?.fullName || "Your Name"}
              </h1>
              
              {/* DOWNLOAD BUTTON - Now in header section */}
             
            </div>
            
            <div className="flex justify-between items-center text-sm mb-1 text-[10px]">
              {formData?.linkedin && (
                <div><b>LinkedIn:</b> <span style={{color:"#0000EE", textDecoration: "underline"}}>{formData.linkedin}</span></div>
              )}
              {formData?.email && (
                <span><b>Email:</b> <span style={{color:"#0000EE"}}>{formData.email}</span></span>
              )}
            </div>
            
            <div className="text-sm space-y-0.5 flex justify-between text-[10px]">
              {formData?.github && (
                <div><b>Github:</b> <span style={{color:"#0000EE", textDecoration: "underline"}}>{formData.github}</span></div>
              )}
              {formData?.phone && (
                <span><b>Mobile:</b> +91 {formData.phone}</span>
              )}
            </div>
          </div>

          {/* Rest of your sections (Skills, Work Experience, etc.) remain EXACTLY the same */}
          {/* SKILLS Section */}
          {formData?.skills && (
            <div className="mb-1 font-[Georgia]">
              <h2 className="font-bold uppercase" style={{fontSize:"12px", color: "#1a1a1a"}}>Skills</h2>
              <div className="border-b border-black mt-2"></div>
              
              {formData.skills.languages && (
                <div className="flex justify-between pl-2 mt-1">
                  <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Languages</span>:</span>
                  <span className="text-sm w-[77%] text-[10px]">{formData.skills.languages}</span>
                </div>
              )}
              
              {formData.skills.frameworks && (
                <div className="flex justify-between pl-2">
                  <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Frameworks & Libraries</span>:</span>
                  <span className="text-sm w-[77%] text-[10px]">{formData.skills.frameworks}</span>
                </div>
              )}
              
              {formData.skills.tools && (
                <div className="flex justify-between pl-2">
                  <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Tools & Platforms</span>:</span>
                  <span className="text-sm w-[77%] text-[10px]">{formData.skills.tools}</span>
                </div>
              )}
              
              {formData.skills.csFundamentals && (
                <div className="flex justify-between pl-2">
                  <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Core CS Fundamentals</span>:</span>
                  <span className="text-sm w-[77%] text-[10px]">{formData.skills.csFundamentals}</span>
                </div>
              )}
              
              {formData.skills.soft && (
                <div className="flex justify-between pl-2">
                  <span className="text-[10px]"><span className="font-bold">•</span> <span className="font-bold">Soft Skills</span>:</span>
                  <span className="text-sm w-[77%] text-[10px]">{formData.skills.soft}</span>
                </div>
              )}
            </div>
          )}

          {/* WORK EXPERIENCE Section */}
          {hasItems(formData?.workExperience) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold" style={{color: "#1a1a1a"}}>WORK EXPERIENCE</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.workExperience, exp => exp.position && exp.type !== "internship").map((exp, index) => (
                <div key={index}>
                  <div className="font-semibold text-base flex text-[10px] mt-1 ml-2 justify-between capitalize">
                    <div>
                      {exp.type === "freelance" ? "Freelancer" : exp.position}
                      <span className="text-black"> {exp.company && ` | ${exp.company}${exp.company && exp.githubLink ? ' |' : ''}`}{exp.githubLink && ' GitHub'}</span>
                    </div>
                    {exp.duration && (
                      <div className="whitespace-pre-wrap">
                        {exp.duration
                          .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                          .replace(/\s*[-–—]\s*/g, ' – ')
                          .replace(/\s+/g, ' ')
                          .trim()}
                      </div>
                    )}
                  </div>
                  
                  {exp.description && (
                    <div className="text-[10px] w-[96%] pl-2">
                      {exp.description.split('\n').map((line, i) => (
                        line.trim() && (
                          <div key={i} className="flex items-start gap-1">
                            <span className="text-black">•</span>
                            <span>{line.replace('•', '').trim()}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                  
                  {exp.technologies && (
                    <div className="text-[10px] pl-4">
                      <b>Technologies</b>: {exp.technologies}
                    </div>
                  )}
                  
                  {index < formData.workExperience.filter(e => e.position && e.type !== "internship").length - 1 && (
                    <div className="my-1"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* INTERNSHIP Section */}
          {hasItems(formData?.internship) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold" style={{color: "#1a1a1a"}}>INTERNSHIP</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.internship, intern => intern.position).map((intern, index) => (
                <div key={index}>
                  <div className="mb-[2px]">
                    <div className="font-bold text-[10px] pl-2 flex justify-between items-center mt-1">
                      <div>
                        {intern.position}
                        <span>{intern.company && ` - ${intern.company}`}</span> 
                        {intern.certificateLink && " | Certificate"}
                      </div>
                      {intern.duration && (
                        <div className="whitespace-pre-wrap">
                          {intern.duration
                            .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                            .replace(/\s*[-–—]\s*/g, ' – ')
                            .replace(/\s+/g, ' ')
                            .trim()}
                        </div>
                      )}
                    </div>
                    
                    {intern.description && (
                      <div className="text-[10px] text-black pl-2 w-[96%]">
                        {intern.description.split('\n').map((line, i) => (
                          line.trim() && (
                            <div key={i} className="flex items-start gap-1">
                              <span className="text-black">•</span>
                              <span>{line.replace('•', '').trim()}</span>
                            </div>
                          )
                        ))}
                      </div>
                    )}
                    
                    {intern.technologies && (
                      <div className="text-[10px] pl-4">
                        <b>Technologies</b>: {intern.technologies}
                      </div>
                    )}
                  </div>
                  
                  {index < formData.internship.filter(i => i.position).length - 1 && (
                    <div className="my-1"></div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* PROJECTS Section */}
          {hasItems(formData?.projects) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Projects</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.projects, proj => proj.name).map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center text-[10px] pl-2 mt-1">
                    <span className="font-semibold capitalize">{project.name}</span>
                    {project.date && (
                      <div className="whitespace-pre-wrap font-bold capitalize">
                        {project.date
                          .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                          .replace(/\s*[-–—]\s*/g, ' – ')
                          .replace(/\s+/g, ' ')
                          .trim()}
                      </div>
                    )}
                  </div>
                 
                  {project.description && (
                    <div className="text-[10px] text-black pl-2 w-[96%]">
                      {project.description.split('\n').map((line, i) => (
                        line.trim() && (
                          <div key={i} className="flex items-start gap-1">
                            <span className="text-black">•</span>
                            <span>{line.replace('•', '').trim()}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {project.technologies && (
                    <div className="text-[10px] pl-4">
                      <b>Technologies</b>: {project.technologies}
                    </div>
                  )}
                  
                  {project.githubLink && (
                    <div className="text-[10px] pl-4 text-blue-600 underline">
                      {project.githubLink}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* TRAINING Section */}
          {hasItems(formData?.training) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Training</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.training, train => train.organization).map((train, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center text-[10px] pl-2 mt-1">
                    <span className="font-semibold capitalize">{train.organization} | Certificate</span>
                    {train.duration && (
                      <div className="whitespace-pre-wrap font-bold capitalize">
                        {train.duration
                          .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                          .replace(/\s*[-–—]\s*/g, ' – ')
                          .replace(/\s+/g, ' ')
                          .trim()}
                      </div>
                    )}
                  </div>
                  
                  {train.topic && (
                    <div className="text-[10px] pl-2 text-black font-bold capitalize">
                      {train.topic}
                    </div>
                  )}
                  
                  {train.description && (
                    <div className="text-[10px] text-black pl-2 w-[96%]">
                      {train.description.split('\n').map((line, i) => (
                        line.trim() && (
                          <div key={i} className="flex items-start gap-1">
                            <span className="text-black">•</span>
                            <span>{line.replace('•', '').trim()}</span>
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* CERTIFICATIONS Section */}
          {hasItems(formData?.certifications) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Certifications</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.certifications, cert => cert.name).map((cert, index) => (
                <div key={index}>
                  <div className="text-[10px] mt-1">
                    <div className="justify-between flex capitalize items-center">
                      <div>
                        <span className="text-black ml-1">•</span>
                        <span className="ml-1">{cert.name}</span>
                        {cert.issuer && <span> - {cert.issuer}</span>}
                      </div>
                      {cert.date && (
                        <span>
                          {cert.date
                            .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                            .replace(/\s*[-–—]\s*/g, ' – ')
                            .replace(/\s+/g, ' ')
                            .trim()}
                        </span>
                      )}
                    </div>
                    {cert.link && (
                      <div className="text-xs text-blue-600 underline pl-4">{cert.link}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ACHIEVEMENTS Section */}
          {hasItems(formData?.achievements) && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Achievements</h2>
              <div className="border-b border-black mt-2"></div>
              
              {getValidItems(formData.achievements, ach => ach.description).map((ach, index) => (
                <div key={index}>
                  <div className="text-[10px] mt-1">
                    <div className="justify-between flex capitalize items-center">
                      <div>
                        <span className="text-black ml-1">•</span>
                        <span className="ml-1" 
                          dangerouslySetInnerHTML={{ 
                            __html: ach.description
                              .replace(/^[•\-]\s*/, '')
                              .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                              .replace(/\*(.*?)\*/g, '<i>$1</i>')
                              .replace(/__(.*?)__/g, '<u>$1</u>')
                          }}
                        />
                        {ach.link && <span className="text-blue-600 underline ml-1">| Link</span>}
                      </div>
                      {ach.date && (
                        <span>
                          {ach.date
                            .replace(/([a-zA-Z]{3})'?(\d{2})/g, "$1’$2")
                            .replace(/\s*[-–—]\s*/g, ' – ')
                            .replace(/\s+/g, ' ')
                            .trim()}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* EDUCATION Section */}
          {formData?.education && (
            <div className="font-[Georgia]">
              <h2 className="text-[12px] font-bold uppercase" style={{color: "#1a1a1a"}}>Education</h2>
              <div className="border-b border-black mt-2"></div>
              
              {/* University */}
              {formData.education?.university?.name && (
                <div className="text-[10px] mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold capitalize"
                      dangerouslySetInnerHTML={{ 
                        __html: formData.education.university.name
                          .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                      }}
                    />
                    {formData.education.university.location && (
                      <span className="capitalize"
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.university.location
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>

                  <div className="flex justify-between">
                    <div
                      dangerouslySetInnerHTML={{ 
                        __html: `
                          ${formData.education.university.degree || ''}
                          ${formData.education.university.field ? ` - ${formData.education.university.field}` : ''}
                          ${formData.education.university.cgpa ? `; CGPA: ${formData.education.university.cgpa}` : ''}
                        `
                      }}
                    />
                    {formData.education.university.duration && (
                      <div
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.university.duration
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Intermediate */}
              {formData.education?.intermediate?.name && (
                <div className="text-[10px] mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold capitalize"
                      dangerouslySetInnerHTML={{ 
                        __html: formData.education.intermediate.name
                          .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                      }}
                    />
                    {formData.education.intermediate.location && (
                      <span className="capitalize"
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.intermediate.location
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>

                  <div className="flex justify-between">
                    <div
                      dangerouslySetInnerHTML={{ 
                        __html: `
                          ${formData.education.intermediate.board || ''}
                          ${formData.education.intermediate.percentage ? `; Percentage: ${formData.education.intermediate.percentage}` : ''}
                        `
                      }}
                    />
                    {formData.education.intermediate.duration && (
                      <div
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.intermediate.duration
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Matriculation */}
              {formData.education?.matriculation?.name && (
                <div className="text-[10px] mt-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold capitalize"
                      dangerouslySetInnerHTML={{ 
                        __html: formData.education.matriculation.name
                          .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                      }}
                    />
                    {formData.education.matriculation.location && (
                      <span className="capitalize"
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.matriculation.location
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>

                  <div className="flex justify-between">
                    <div
                      dangerouslySetInnerHTML={{ 
                        __html: `
                          ${formData.education.matriculation.board || ''}
                          ${formData.education.matriculation.percentage ? `; Percentage: ${formData.education.matriculation.percentage}` : ''}
                        `
                      }}
                    />
                    {formData.education.matriculation.duration && (
                      <div
                        dangerouslySetInnerHTML={{ 
                          __html: formData.education.matriculation.duration
                            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                        }}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default RightPanel;









