import React from "react";

const LeftPanel = ({ formData, setFormData, currentStep, setCurrentStep }) => {
  const steps = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Skills" },
    { id: 3, name: "Work Experience" },
    { id: 4, name: "Internship" }, // Added Internship step
    { id: 5, name: "Projects" },
    { id: 6, name: "Training" },
    { id: 7, name: "Certifications" },
    { id: 8, name: "Achievements" },
    { id: 9, name: "Education" }
  ];

  const handleInputChange = (section, field, value, index = null) => {
    setFormData(prev => {
      // Case 1: Array with index (workExperience, projects, internship, etc.)
      if (index !== null && Array.isArray(prev[section])) {
        return {
          ...prev,
          [section]: prev[section].map((item, i) => 
            i === index ? { ...item, [field]: value } : item
          )
        };
      }
      
      // Case 2: Nested Object (skills, education.university, etc.)
      else if (section && field) {
        // Handle skills object
        if (section === "skills") {
          return {
            ...prev,
            skills: {
              ...prev.skills,
              [field]: value
            }
          };
        }
        
        // Handle education nested objects
        if (section === "education") {
          return {
            ...prev,
            education: {
              ...prev.education,
              [field]: {
                ...prev.education[field],
                ...value
              }
            }
          };
        }
        
        // Handle other nested objects
        return {
          ...prev,
          [section]: {
            ...prev[section],
            [field]: value
          }
        };
      }
      
      // Case 3: Direct field (fullName, email, etc.)
      else {
        return {
          ...prev,
          [field]: value
        };
      }
    });
  };

  const handleAddItem = (section, template) => {
    setFormData(prev => ({
      ...prev,
      [section]: Array.isArray(prev[section]) 
        ? [...prev[section], template] 
        : [template]
    }));
  };

  const handleRemoveItem = (section, index) => {
    setFormData(prev => {
      if (Array.isArray(prev[section]) && prev[section].length > 1) {
        return {
          ...prev,
          [section]: prev[section].filter((_, i) => i !== index)
        };
      }
      return prev;
    });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  // ========== PERSONAL INFO ==========
  const renderPersonalInfo = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Personal Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">Full Name *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => handleInputChange(null, "fullName", e.target.value)}
            placeholder="Ashutosh Kumar"
            required
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange(null, "email", e.target.value)}
            placeholder="ashutosh62052kumar@gmail.com"
            required
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange(null, "phone", e.target.value)}
            placeholder="+91 6205433088"
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">LinkedIn</label>
          <input
            type="url"
            value={formData.linkedin}
            onChange={(e) => handleInputChange(null, "linkedin", e.target.value)}
            placeholder="https://www.linkedin.com/in/ashuquest/"
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">GitHub</label>
          <input
            type="url"
            value={formData.github}
            onChange={(e) => handleInputChange(null, "github", e.target.value)}
            placeholder="https://github.com/ashuQuest"
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">Portfolio/Website</label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => handleInputChange(null, "website", e.target.value)}
            placeholder="https://yourportfolio.com"
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="col-span-2 mb-4">
          <label className="block mb-1 text-gray-600 text-sm font-medium">Address</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange(null, "address", e.target.value)}
            placeholder="City, Country"
            className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );

  // ========== SKILLS ==========
  const renderSkills = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Skills</h3>
      
      {/* Languages */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 text-sm font-semibold">• Languages</label>
        <input
          type="text"
          value={formData.skills?.languages || ""}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, languages: e.target.value }
          }))}
          placeholder="C++, JavaScript, HTML5, CSS3, Python, Java"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Frameworks & Libraries */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 text-sm font-semibold">• Frameworks & Libraries</label>
        <input
          type="text"
          value={formData.skills?.frameworks || ""}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, frameworks: e.target.value }
          }))}
          placeholder="React.js, Node.js, Express.js, Next.js, Tailwind CSS"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Tools & Platforms */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 text-sm font-semibold">• Tools & Platforms</label>
        <input
          type="text"
          value={formData.skills?.tools || ""}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, tools: e.target.value }
          }))}
          placeholder="VS Code, Git, GitHub, Postman, Netlify, NPM, MongoDB"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Core CS Fundamentals */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 text-sm font-semibold">• Core CS Fundamentals</label>
        <input
          type="text"
          value={formData.skills?.csFundamentals || ""}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, csFundamentals: e.target.value }
          }))}
          placeholder="Data Structures, Algorithms, OOP, DBMS, Operating Systems"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Soft Skills */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 text-sm font-semibold">• Soft Skills</label>
        <input
          type="text"
          value={formData.skills?.soft || ""}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            skills: { ...prev.skills, soft: e.target.value }
          }))}
          placeholder="Problem-Solving, Attention to Detail, Team Collaboration, Communication"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );

  // ========== WORK EXPERIENCE (Freelance + Full-time only) ==========
  const renderWorkExperience = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Work Experience</h3>
      {formData.workExperience?.map((exp, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
          <h4 className="text-gray-600 mb-4 text-base font-medium">
            {exp.type === "freelance" ? "FREELANCE" : "FULL-TIME"} #{index + 1}
          </h4>
          
          {/* Experience Type Selector - Removed internship option */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Type</label>
            <select
              value={exp.type || "freelance"}
              onChange={(e) => handleInputChange("workExperience", "type", e.target.value, index)}
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="freelance">Freelance</option>
              <option value="fulltime">Full-time</option>
            </select>
          </div>

          {/* Position/Title and Company */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Position/Title</label>
              <input
                type="text"
                value={exp.position || ""}
                onChange={(e) => handleInputChange("workExperience", "position", e.target.value, index)}
                placeholder={exp.type === "freelance" ? "Freelancer" : "Software Developer"}
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Company/Organization</label>
              <input
                type="text"
                value={exp.company || ""}
                onChange={(e) => handleInputChange("workExperience", "company", e.target.value, index)}
                placeholder={exp.type === "freelance" ? "Recilens Corporation Pvt. Ltd." : "Company Name"}
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Duration */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
              <input
                type="text"
                value={exp.duration || ""}
                onChange={(e) => handleInputChange("workExperience", "duration", e.target.value, index)}
                placeholder={exp.type === "freelance" ? "Mar' 25 – Sep' 25" : "Jan' 24 – Present"}
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description Points (3 points) */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Description (3 bullet points)</label>
            <textarea
              rows="4"
              value={exp.description || ""}
              onChange={(e) => handleInputChange("workExperience", "description", e.target.value, index)}
              placeholder="• Developed end-to-end web applications...&#10;• Implemented secure user authentication...&#10;• Collaborated with cross-functional teams..."
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Write each point on a new line starting with •</p>
          </div>

          {/* Technologies Used */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Technologies Used</label>
            <input
              type="text"
              value={exp.technologies || ""}
              onChange={(e) => handleInputChange("workExperience", "technologies", e.target.value, index)}
              placeholder="React, Node.js, MongoDB"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {formData.workExperience?.length > 1 && (
            <button 
              type="button" 
              className="bg-red-500 text-white border-none px-4 py-2 rounded-md text-xs cursor-pointer mt-2 hover:bg-red-700 transition-colors"
              onClick={() => handleRemoveItem("workExperience", index)}
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("workExperience", {
          type: "freelance",
          position: "",
          company: "",
          duration: "",
          description: "",
          technologies: ""
        })}
      >
        + Add Work Experience
      </button>
    </div>
  );

  // ========== INTERNSHIP (New Section) ==========
  const renderInternship = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Internship</h3>
      {formData.internship?.map((intern, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
          <h4 className="text-gray-600 mb-4 text-base font-medium">INTERNSHIP #{index + 1}</h4>
          
          {/* Position/Title and Company with Certificate indicator */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Position/Title</label>
              <input
                type="text"
                value={intern.position || ""}
                onChange={(e) => handleInputChange("internship", "position", e.target.value, index)}
                placeholder="Problem Setter Intern"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Company/Organization</label>
              <input
                type="text"
                value={intern.company || ""}
                onChange={(e) => handleInputChange("internship", "company", e.target.value, index)}
                placeholder="Code Asylum"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Duration and Certificate Link */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
              <input
                type="text"
                value={intern.duration || ""}
                onChange={(e) => handleInputChange("internship", "duration", e.target.value, index)}
                placeholder="Jun' 24 – Jul' 24"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Certificate Link</label>
              <input
                type="url"
                value={intern.certificateLink || ""}
                onChange={(e) => handleInputChange("internship", "certificateLink", e.target.value, index)}
                placeholder="https://drive.google.com/..."
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description Points (2 points from the example) */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Description (2 bullet points)</label>
            <textarea
              rows="4"
              value={intern.description || ""}
              onChange={(e) => handleInputChange("internship", "description", e.target.value, index)}
              placeholder="• Designed and validated algorithm and data structure problems for Code Asylum contests, ensuring correctness and engagement.&#10;• Worked as a Teaching Assistant (TA) for Data Structures and Algorithms courses, guiding students through concepts and hands-on problem solving."
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Write each point on a new line starting with •</p>
          </div>

          {/* Technologies Used */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Technologies Used</label>
            <input
              type="text"
              value={intern.technologies || ""}
              onChange={(e) => handleInputChange("internship", "technologies", e.target.value, index)}
              placeholder="C++, Data Structures and Algorithms"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {formData.internship?.length > 1 && (
            <button 
              type="button" 
              className="bg-red-500 text-white border-none px-4 py-2 rounded-md text-xs cursor-pointer mt-2 hover:bg-red-700 transition-colors"
              onClick={() => handleRemoveItem("internship", index)}
            >
              Remove Internship
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("internship", {
          position: "",
          company: "",
          duration: "",
          certificateLink: "",
          description: "",
          technologies: ""
        })}
      >
        + Add Internship
      </button>
    </div>
  );

  // ========== PROJECTS ==========
  const renderProjects = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Projects</h3>
      {formData.projects?.map((project, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
          <h4 className="text-gray-600 mb-4 text-base font-medium">Project #{index + 1}</h4>
          
          {/* Project Name with Technologies */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Project Name</label>
              <input
                type="text"
                value={project.name || ""}
                onChange={(e) => handleInputChange("projects", "name", e.target.value, index)}
                placeholder="Real-Time Chat Application"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Technologies</label>
              <input
                type="text"
                value={project.technologies || ""}
                onChange={(e) => handleInputChange("projects", "technologies", e.target.value, index)}
                placeholder="HTML, MERN Stack, JWT, Socket.io, MongoDB"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* GitHub Link and Date */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">GitHub Link</label>
              <input
                type="url"
                value={project.githubLink || ""}
                onChange={(e) => handleInputChange("projects", "githubLink", e.target.value, index)}
                placeholder="https://github.com/..."
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Date (Month' Year)</label>
              <input
                type="text"
                value={project.date || ""}
                onChange={(e) => handleInputChange("projects", "date", e.target.value, index)}
                placeholder="Nov' 25"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Description Points (3 points) */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Description (3 bullet points)</label>
            <textarea
              rows="5"
              value={project.description || ""}
              onChange={(e) => handleInputChange("projects", "description", e.target.value, index)}
              placeholder="• Developed a full-stack real-time chat application...&#10;• Implemented secure user authentication using JWT...&#10;• Designed and deployed a responsive interface..."
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Write each point on a new line starting with •</p>
          </div>

          {formData.projects?.length > 1 && (
            <button 
              type="button" 
              className="bg-red-500 text-white border-none px-4 py-2 rounded-md text-xs cursor-pointer mt-2 hover:bg-red-700 transition-colors"
              onClick={() => handleRemoveItem("projects", index)}
            >
              Remove Project
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("projects", {
          name: "", technologies: "", githubLink: "", date: "", description: ""
        })}
      >
        + Add Project
      </button>
    </div>
  );

  // ========== TRAINING ==========
  const renderTraining = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Training</h3>
      {formData.training?.map((train, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
          <h4 className="text-gray-600 mb-4 text-base font-medium">Training #{index + 1}</h4>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Organization</label>
              <input
                type="text"
                value={train.organization || ""}
                onChange={(e) => handleInputChange("training", "organization", e.target.value, index)}
                placeholder="CSE Pathshala (Education Platform)"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
              <input
                type="text"
                value={train.duration || ""}
                onChange={(e) => handleInputChange("training", "duration", e.target.value, index)}
                placeholder="Jun' 25 – Jul' 25"
                className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Topic/Course</label>
            <input
              type="text"
              value={train.topic || ""}
              onChange={(e) => handleInputChange("training", "topic", e.target.value, index)}
              placeholder="C Programming"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Description Points (2 points) */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Description (2 bullet points)</label>
            <textarea
              rows="4"
              value={train.description || ""}
              onChange={(e) => handleInputChange("training", "description", e.target.value, index)}
              placeholder="• Built strong fundamentals in C programming...&#10;• Implemented 20+ C programs and mini-projects..."
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">Write each point on a new line starting with •</p>
          </div>

          {formData.training?.length > 1 && (
            <button 
              type="button" 
              className="bg-red-500 text-white border-none px-4 py-2 rounded-md text-xs cursor-pointer mt-2 hover:bg-red-700 transition-colors"
              onClick={() => handleRemoveItem("training", index)}
            >
              Remove Training
            </button>
          )}
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("training", {
          organization: "", duration: "", topic: "", description: ""
        })}
      >
        + Add Training
      </button>
    </div>
  );

  // ========== CERTIFICATIONS ==========
  const renderCertifications = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Certifications</h3>
      {formData.certifications?.map((cert, index) => (
        <div key={index} className="flex items-start gap-2 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-gray-600 font-bold">•</span>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
            <input
              type="text"
              value={cert.name || ""}
              onChange={(e) => handleInputChange("certifications", "name", e.target.value, index)}
              placeholder="Responsible & Safe AI Systems"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              value={cert.issuer || ""}
              onChange={(e) => handleInputChange("certifications", "issuer", e.target.value, index)}
              placeholder="NPTEL IIT Hyderabad"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={cert.date || ""}
                onChange={(e) => handleInputChange("certifications", "date", e.target.value, index)}
                placeholder="Oct' 24"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
              <input
                type="url"
                value={cert.link || ""}
                onChange={(e) => handleInputChange("certifications", "link", e.target.value, index)}
                placeholder="Link"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
              {formData.certifications?.length > 1 && (
                <button 
                  type="button" 
                  className="bg-red-500 text-white border-none w-8 h-8 rounded-md cursor-pointer text-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  onClick={() => handleRemoveItem("certifications", index)}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("certifications", { name: "", issuer: "", date: "", link: "" })}
      >
        + Add Certification
      </button>
    </div>
  );

  // ========== ACHIEVEMENTS ==========
  const renderAchievements = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Achievements</h3>
      {formData.achievements?.map((ach, index) => (
        <div key={index} className="flex items-start gap-2 mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <span className="text-gray-600 font-bold">•</span>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              value={ach.description || ""}
              onChange={(e) => handleInputChange("achievements", "description", e.target.value, index)}
              placeholder="Solved 500+ coding problems across LeetCode, GFG & HackerRank"
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={ach.date || ""}
                onChange={(e) => handleInputChange("achievements", "date", e.target.value, index)}
                placeholder="Feb' 25"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
              <input
                type="url"
                value={ach.link || ""}
                onChange={(e) => handleInputChange("achievements", "link", e.target.value, index)}
                placeholder="Certificate Link (Optional)"
                className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
              />
              {formData.achievements?.length > 1 && (
                <button 
                  type="button" 
                  className="bg-red-500 text-white border-none w-8 h-8 rounded-md cursor-pointer text-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  onClick={() => handleRemoveItem("achievements", index)}
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      <button 
        type="button" 
        className="bg-green-600 text-white border-none px-5 py-2.5 rounded-md text-sm cursor-pointer mt-2.5 hover:bg-green-700 transition-colors"
        onClick={() => handleAddItem("achievements", { description: "", date: "", link: "" })}
      >
        + Add Achievement
      </button>
    </div>
  );

  // ========== EDUCATION ==========
  const renderEducation = () => (
    <div className="mb-8">
      <h3 className="text-gray-800 text-lg mb-5 font-semibold">Education</h3>
      
      {/* University Education */}
      <div className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
        <h4 className="text-gray-600 mb-4 text-base font-medium">University/Graduation</h4>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Institution Name</label>
            <input
              type="text"
              value={formData.education?.university?.name || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, name: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="Lovely Professional University"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Location</label>
            <input
              type="text"
              value={formData.education?.university?.location || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, location: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="Phagwara, Punjab"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
            <input
              type="text"
              value={formData.education?.university?.duration || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, duration: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="Aug' 22 – Present"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Degree</label>
            <input
              type="text"
              value={formData.education?.university?.degree || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, degree: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="Bachelor of Technology"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Field of Study</label>
            <input
              type="text"
              value={formData.education?.university?.field || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, field: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="Computer Science and Engineering"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">CGPA/Percentage</label>
            <input
              type="text"
              value={formData.education?.university?.cgpa || ""}
              onChange={(e) => {
                const newUniv = { ...formData.education?.university, cgpa: e.target.value };
                handleInputChange("education", "university", newUniv);
              }}
              placeholder="8.01 CGPA"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Intermediate/+2 Education */}
      <div className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
        <h4 className="text-gray-600 mb-4 text-base font-medium">Intermediate / +2</h4>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Institution Name</label>
            <input
              type="text"
              value={formData.education?.intermediate?.name || ""}
              onChange={(e) => {
                const newInter = { ...formData.education?.intermediate, name: e.target.value };
                handleInputChange("education", "intermediate", newInter);
              }}
              placeholder="Sri Venkateshwara Jr College"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Location</label>
            <input
              type="text"
              value={formData.education?.intermediate?.location || ""}
              onChange={(e) => {
                const newInter = { ...formData.education?.intermediate, location: e.target.value };
                handleInputChange("education", "intermediate", newInter);
              }}
              placeholder="Bodhan, Telangana"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
            <input
              type="text"
              value={formData.education?.intermediate?.duration || ""}
              onChange={(e) => {
                const newInter = { ...formData.education?.intermediate, duration: e.target.value };
                handleInputChange("education", "intermediate", newInter);
              }}
              placeholder="Jun' 21 – Apr' 22"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Board/Stream</label>
            <input
              type="text"
              value={formData.education?.intermediate?.board || ""}
              onChange={(e) => {
                const newInter = { ...formData.education?.intermediate, board: e.target.value };
                handleInputChange("education", "intermediate", newInter);
              }}
              placeholder="Intermediate - PCM"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Percentage</label>
            <input
              type="text"
              value={formData.education?.intermediate?.percentage || ""}
              onChange={(e) => {
                const newInter = { ...formData.education?.intermediate, percentage: e.target.value };
                handleInputChange("education", "intermediate", newInter);
              }}
              placeholder="95.6%"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Matriculation/10th Education */}
      <div className="bg-gray-50 p-5 rounded-lg mb-5 border border-gray-200">
        <h4 className="text-gray-600 mb-4 text-base font-medium">Matriculation / 10th</h4>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block mb-1 text-gray-600 text-sm font-medium">Institution Name</label>
            <input
              type="text"
              value={formData.education?.matriculation?.name || ""}
              onChange={(e) => {
                const newMatric = { ...formData.education?.matriculation, name: e.target.value };
                handleInputChange("education", "matriculation", newMatric);
              }}
              placeholder="Sri Venkateshwara School"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Location</label>
            <input
              type="text"
              value={formData.education?.matriculation?.location || ""}
              onChange={(e) => {
                const newMatric = { ...formData.education?.matriculation, location: e.target.value };
                handleInputChange("education", "matriculation", newMatric);
              }}
              placeholder="Bodhan, Telangana"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Duration</label>
            <input
              type="text"
              value={formData.education?.matriculation?.duration || ""}
              onChange={(e) => {
                const newMatric = { ...formData.education?.matriculation, duration: e.target.value };
                handleInputChange("education", "matriculation", newMatric);
              }}
              placeholder="Jun' 19 – Apr' 20"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Board</label>
            <input
              type="text"
              value={formData.education?.matriculation?.board || ""}
              onChange={(e) => {
                const newMatric = { ...formData.education?.matriculation, board: e.target.value };
                handleInputChange("education", "matriculation", newMatric);
              }}
              placeholder="Matriculation"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600 text-sm font-medium">Percentage</label>
            <input
              type="text"
              value={formData.education?.matriculation?.percentage || ""}
              onChange={(e) => {
                const newMatric = { ...formData.education?.matriculation, percentage: e.target.value };
                handleInputChange("education", "matriculation", newMatric);
              }}
              placeholder="95.6%"
              className="w-full p-2.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch(currentStep) {
      case 1: return renderPersonalInfo();
      case 2: return renderSkills();
      case 3: return renderWorkExperience();
      case 4: return renderInternship(); // New internship section
      case 5: return renderProjects();
      case 6: return renderTraining();
      case 7: return renderCertifications();
      case 8: return renderAchievements();
      case 9: return renderEducation();
      default: return renderPersonalInfo();
    }
  };

  return (
    <div className=" bg-white border overflow-y-auto p-5 text-[black]">
      <div className="max-w-[600px] mx-auto">
        {/* Step Indicator */}
        <div className="flex justify-between mb-8 py-2.5 border-b-2 border-gray-200 sticky top-0 bg-white z-10">
          {steps.map(step => (
            <div 
              key={step.id} 
              className={`flex flex-col items-center cursor-pointer transition-all duration-300 flex-1 ${
                currentStep === step.id ? 'opacity-100' : 
                currentStep > step.id ? 'opacity-80' : 'opacity-50'
              }`}
              onClick={() => setCurrentStep(step.id)}
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 ${
                currentStep === step.id ? 'bg-blue-500 text-white' :
                currentStep > step.id ? 'bg-green-500 text-white' : 'bg-gray-200'
              }`}>
                {step.id}
              </span>
              <span className="text-xs text-center">{step.name}</span>
            </div>
          ))}
        </div>
        
        {/* Form Content */}
        <div>
          {renderCurrentStep()}
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8 pt-5 border-t-2 border-gray-200 sticky bottom-0 bg-white pb-5">
          <button 
            onClick={handlePrevious} 
            disabled={currentStep === 1}
            className="px-8 py-3 border-none rounded-md cursor-pointer text-base font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-gray-500 text-white hover:bg-gray-600"
          >
            Previous
          </button>
          <button 
            onClick={handleSkip} 
            className="px-8 py-3 border-none rounded-md cursor-pointer text-base font-medium transition-all bg-orange-500 text-white hover:bg-orange-600"
          >
            Skip
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentStep === steps.length}
            className="px-8 py-3 border-none rounded-md cursor-pointer text-base font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );


  
};

export default LeftPanel;




// import React from 'react'

// const LeftPanel = () => {
//   return (
//     <div className="">LeftPanel</div>
//   )
// }

// export default LeftPanel






