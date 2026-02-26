// import React from "react";
// import { Link } from "react-router-dom";

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto py-16 border border-amber-200">
//         <Link to="/" className="text-[#A6FF5D]  mb-8 inline-block">
//           ← Back to Home
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//           Our <span className="text-[#A6FF5D]">Services</span>
//         </h1>

//         <div className="flex mt-12 border border-amber-200 justify-between w-full">
//           {/* Service 1 */}

//           <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition ">

//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition">
//               <div
//                 className="h-[200px] w-[300px]"
//                 style={{
//                   backgroundImage:
//                     "url('img-1)",
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//               <h2 className="text-2xl font-semibold mb-3">B.Tech CSE Resume</h2>
//               <p className="text-gray-300 w-[280px]">
//                 Create an ATS-friendly resume that highlights your skills,
//                 projects, and experience to stand out in tech placements.
//               </p>
//               <button>Start now</button>
//             </div>
 
                


//           </div>

//           {/* Service 2 */}
//           <Link to="/app/service/ats-optimizer">
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition">
//               <h2 className="text-2xl font-semibold mb-3">ATS Optimization</h2>
//               <p className="text-gray-300">
//                 Make your resume ATS-friendly and get more interviews.
//               </p>
//             </div>
//           </Link>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// <Link to="/app/service/Resume/Building" >
//           <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition ">
//             <h2 className="text-2xl font-semibold mb-3">Resume Building</h2>
//             <p className="text-gray-300">Professional resume building services to help you stand out.</p>
//           </div>
//           </Link>









// import React from "react";
// import { Link } from "react-router-dom";

// const Services = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto py-16 px-4">
//         <Link to="/" className="text-[#A6FF5D] hover:text-[#8be04e] mb-8 inline-block transition-colors">
//           ← Back to Home
//         </Link>

//         <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
//           Our <span className="text-[#A6FF5D]">Services</span>
//         </h1>

//         <div className="flex flex-col lg:flex-row gap-8 mt-12">
//           {/* Left side - Three cards in a column */}
//           <div className="flex flex-col gap-6 lg:w-2/3">
//             {/* Service 1 - B.Tech CSE Resume */}
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10">
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div
//                   className="h-[180px] w-full md:w-[250px] rounded-lg"
//                   style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-semibold mb-3">B.Tech CSE Resume</h2>
//                   <p className="text-gray-300 mb-4">
//                     Create an ATS-friendly resume that highlights your skills,
//                     projects, and experience to stand out in tech placements.
//                   </p>
//                   <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105">
//                     Start Now →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Service 2 - MBA Resume */}
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10">
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div
//                   className="h-[180px] w-full md:w-[250px] rounded-lg"
//                   style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-semibold mb-3">MBA/BBA Resume</h2>
//                   <p className="text-gray-300 mb-4">
//                     Showcase your business acumen, leadership skills, and management potential with a professionally crafted resume.
//                   </p>
//                   <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105">
//                     Start Now →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Service 3 - Law Resume */}
//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10">
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div
//                   className="h-[180px] w-full md:w-[250px] rounded-lg"
//                   style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-semibold mb-3">Law Resume</h2>
//                   <p className="text-gray-300 mb-4">
//                     Highlight your legal expertise, case experience, and academic achievements with a compelling law resume.
//                   </p>
//                   <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105">
//                     Start Now →
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10">
//               <div className="flex flex-col md:flex-row gap-6 items-start">
//                 <div
//                   className="h-[180px] w-full md:w-[250px] rounded-lg"
//                   style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-semibold mb-3">Law Resume</h2>
//                   <p className="text-gray-300 mb-4">
//                     Highlight your legal expertise, case experience, and academic achievements with a compelling law resume.
//                   </p>
//                   <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105">
//                     Start Now →
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>

          

//           {/* Right side - ATS Optimizer Card */}
//           <div className="lg:w-1/3">
//             <Link to="/app/service/ats-optimizer" className="block h-full">
//               <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10 h-full">
//                 <div
//                   className="h-[200px] w-full rounded-lg mb-4"
//                   style={{
//                     backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <h2 className="text-2xl font-semibold mb-3">ATS Optimization</h2>
//                 <p className="text-gray-300 mb-4">
//                   Make your resume ATS-friendly and get more interviews with our advanced optimization tools.
//                 </p>
//                 <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105 w-full">
//                   Optimize Now →
//                 </button>
//               </div>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;







import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto py-16 px-4">
        <Link to="/" className="text-[#A6FF5D] hover:text-[#8be04e] mb-8 inline-block transition-colors">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Our <span className="text-[#A6FF5D]">Services</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 mt-12">
          {/* Left side - Grid with 4 cards (2x2) */}
          <div className="lg:w-2/3 hover:border-[#A6FF5D]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Service 1 - B.Tech CSE Resume */}
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10">
                <div
                  className="h-[150px] w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-xl font-semibold mb-2">B.Tech CSE Resume</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Create an ATS-friendly resume that highlights your skills and projects for tech placements.
                </p>
                <Link to="/app/service/Resume/Building">
                <button className="bg-[#A6FF5D] cursor-pointer text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#8be04e] transition-all duration-300 text-sm w-full">
                  Start Now →
                </button>
                </Link>
              </div>
              

              {/* Service 2 - MBA Resume */}
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/10">
                <div
                  className="h-[150px] w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-xl font-semibold mb-2">MBA Resume</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Showcase your business acumen and leadership skills with a professionally crafted MBA resume.
                </p>
                
                <button className="bg-yellow-400 hover:cursor-not-allowed text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#dc2626] transition-all duration-300 text-sm w-full">
                  Coming Soon →
                </button>
                <div className="h-5 group-hover:text-[#dc2626] flex w-full text-[10px] justify-center items-center text-[#ffffff60] ">Available soon for MBA students</div>
                
              </div>

              {/* Service 3 - BBA Resume */}
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/10">
                <div
                  className="h-[150px] w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-xl font-semibold mb-2">BBA Resume</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Build a strong foundation for your business career with an impressive BBA resume.
                </p>
                <button className="bg-yellow-400 hover:cursor-not-allowed text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#dc2626] transition-all duration-300 text-sm w-full">
                  Coming Soon →
                </button>
                <div className="h-5 group-hover:text-[#dc2626] flex w-full text-[10px] justify-center items-center text-[#ffffff60] ">Available soon for BBA students</div>

              </div>

              {/* Service 4 - Law Resume */}
              <div className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#dc2626] transition-all duration-300 hover:shadow-lg hover:shadow-[#dc2626]/10">
                <div
                  className="h-[150px] w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-xl font-semibold mb-2">Law Resume</h2>
                <p className="text-gray-300 text-sm mb-4">
                  Highlight your legal expertise and case experience with a compelling law resume.
                </p>
                <button className="bg-yellow-400 hover:cursor-not-allowed text-gray-900 font-semibold px-4 py-2 rounded-lg hover:bg-[#dc2626] transition-all duration-300 text-sm w-full">
                  Coming Soon →
                </button>
                <div className="h-5 group-hover:text-[#dc2626] flex w-full text-[10px] justify-center items-center text-[#ffffff60] ">Available soon for Law students</div>

              </div>
            </div>
          </div>

          {/* Right side - ATS Optimizer Card */}
          <div className="lg:w-1/3">
            
              <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-[#A6FF5D] transition-all duration-300 hover:shadow-lg hover:shadow-[#A6FF5D]/10 ">
                <div
                  className="h-[200px] w-full rounded-lg mb-4"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <h2 className="text-2xl font-semibold mb-3">ATS Optimization</h2>
                <p className="text-gray-300 mb-4 flex-grow">
                  Make your resume ATS-friendly and get more interviews with our advanced optimization tools.
                </p>
                <Link to="/app/service/ats-optimizer" >
                <button className="bg-[#A6FF5D] text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-[#8be04e] transition-all duration-300 transform hover:scale-105 w-full">
                  Optimize Now →
                </button>
                </Link>
              </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Services;