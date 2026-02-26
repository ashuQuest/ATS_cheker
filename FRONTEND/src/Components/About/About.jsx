// import { Link } from 'react-router-dom'
// import React from 'react'

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto px-4 py-16">
        // <Link to="/" className="text-[#A6FF5D] hover:underline mb-8 inline-block">
        //   ← Back to Home
        // </Link>
        
//         <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
//           Ab <span className="text-[#A6FF5D]">out</span>
//         </h1>
        
//         <div className="grid md:grid-cols-3 gap-8 mt-12">
//           about section banoo jime left div ho aur ek right div ye ek resume builder left div me koi imag and right div me jo tumhe sahi lage website hai isme ligin ki karurat nahi hai hum use ki koi bhi dtaa aapne pass nahi rakte hai 
//          ye lpu formate me resume provide karta hai bila kise manual chije setiong ki iase tum aapne resume ka bhi Ats score aur jo ke according chije chije pata kar sakte hoo and left and right div ke niche kuchh chije jo tumhe sahi lage add kar sakte hoo uske bad aisa ek niche me aisa question ahi uske answer hone chhaye ek dic me question hoo and jub div me click kare to ans aane chhaye aur
//         </div>




//       </div>
//     </div>
//   )
// }

// export default About










import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { 
  CheckCircle, FileText, Target, Award, ChevronDown, 
  Sparkles, Shield, Zap, Users, Star, TrendingUp,
  ArrowRight, Github, Twitter, Linkedin 
} from 'lucide-react'

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('features');

  const features = [
    { 
      icon: <FileText className="w-6 h-6" />, 
      title: "LPU Format Ready", 
      desc: "Perfectly formatted resumes following LPU guidelines with automatic section alignment",
      color: "from-green-500 to-emerald-400"
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "ATS Score Check", 
      desc: "Real-time ATS compatibility analysis with keyword optimization suggestions",
      color: "from-blue-500 to-cyan-400"
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Smart Suggestions", 
      desc: "AI-powered recommendations to improve your resume's impact and readability",
      color: "from-purple-500 to-pink-400"
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Instant Preview", 
      desc: "See changes in real-time as you type with live formatting preview",
      color: "from-orange-500 to-red-400"
    }
  ];


//   const teamMembers = [
//     { name: "Ashu", role: "Lead Developer", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop" },
//     ];

  const faqs = [
    {
      question: "How does the LPU format resume work?",
      answer: "Our resume builder automatically formats your information according to LPU's official guidelines. We handle margins, section ordering, font styles, and spacing exactly as LPU requires. Just fill in your details, and we'll do the rest!"
    },
    {
      question: "What is ATS score and why is it important?",
      answer: "ATS (Applicant Tracking System) score shows how well your resume performs with automated screening software. We analyze keyword density, formatting compatibility, section headers, and file structure to give you a score out of 100. A higher score means better chances of reaching human recruiters!"
    },
    {
      question: "Do you store my personal data?",
      answer: "Absolutely not! Privacy is our priority. Everything you create stays in your browser's local storage. We never upload or store your resume data on any servers. You're in complete control of your information."
    },
    {
        question:"How do I make text bold or italic in my resume content?",
        answer:"You can easily format your resume text using Markdown style. To make text bold, wrap it in double asterisks like **text** (for example, **This is bold** → This is bold). To make text italic, wrap it in single asterisks like *text* (for example, *This is italic* → This is italic). Using these formatting options helps you highlight important sections in your resume clearly and professionally."

    },
    {
      question: "Can I download my resume?",
      answer: "Yes! You can download your resume as a high-quality PDF. It’s optimized for ATS systems and ready to use for job applications."
    },
    {
      question: "How accurate is the ATS scoring?",
      answer: "Our ATS scoring system is designed to mimic real-world applicant tracking systems used by top companies. It evaluates your resume on key factors like keywords, formatting, and section organization to give you an accurate score and actionable feedback."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A6FF5D]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Back Button with Style */}
        <Link to="/" className="text-[#A6FF5D]  mb-8 inline-block">
          ← Back to Home
        </Link>

        {/* Header Section with Gradient Text */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#A6FF5D]/10 border border-[#A6FF5D]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#A6FF5D]" />
            <span className="text-xs text-[#A6FF5D]">Built for LPU Students</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About{' '}
            <span className="relative">
              <span className="text-[#A6FF5D]">Us</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#A6FF5D] to-transparent rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We're on a mission to help every LPU student create the perfect resume. 
            No signups, no data storage, just powerful tools that work.
          </p>
        </div>

      

        {/* Main Grid - Left hai ye */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Div with Img hai ye main grid div ka  */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#A6FF5D] to-purple-600 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative">
              
              <div className="rounded-2xl overflow-hidden border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=2070&auto=format&fit=crop" 
                  alt="Resume Builder Interface" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-black/90 backdrop-blur-sm border border-gray-800 rounded-xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#A6FF5D]/20 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#A6FF5D]" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">ATS Score</div>
                    <div className="text-xl font-bold text-[#A6FF5D]">92%</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Div with Tabs */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-gray-900 rounded-xl max-w-xs mb-8">
              <button
                onClick={() => setActiveTab('features')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'features' 
                    ? 'bg-[#A6FF5D] text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab('benefits')}
                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === 'benefits' 
                    ? 'bg-[#A6FF5D] text-black' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Benefits
              </button>
            </div>

            {activeTab === 'features' ? (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Everything You Need to{' '}
                  <span className="text-[#A6FF5D]">Succeed</span>
                </h2>
                
                <p className="text-gray-400 leading-relaxed">
                  Create professional, ATS-optimized resumes in minutes. No account required, 
                  no data stored - just you and your perfect resume.
                </p>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="group p-4 rounded-xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-[#A6FF5D]/30 transition-all cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${feature.color} p-2 mb-3 group-hover:scale-110 transition-transform`}>
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3 className="font-semibold text-white mb-1 text-sm">{feature.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Why Choose{' '}
                  <span className="text-[#A6FF5D]">Us</span>
                </h2>
                
                <div className="space-y-4">
                  {[
                    { icon: <Shield className="w-5 h-5" />, title: "100% Privacy", desc: "We don't store any of your data - everything stays in your browser" },
                    { icon: <Zap className="w-5 h-5" />, title: "Lightning Fast", desc: "Create your resume in under 10 minutes with our smart templates" },
                    { icon: <Target className="w-5 h-5" />, title: "ATS Optimized", desc: "Get past automated screenings with our smart keyword analysis" }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                      <div className="w-10 h-10 rounded-lg bg-[#A6FF5D]/10 flex items-center justify-center text-[#A6FF5D]">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        
        {/* <div className="mb-32">
          <h2 className="text-3xl font-bold text-center mb-4">
            Meet Our <span className="text-[#A6FF5D]">Team</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate developers and designers working to make resume building easier for everyone
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#A6FF5D] to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="relative w-32 h-32 rounded-full border-2 border-gray-800 group-hover:border-[#A6FF5D] transition-all object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                <div className="flex justify-center gap-2">
                  <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-[#A6FF5D]/10 text-gray-400 hover:text-[#A6FF5D] transition-all">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-[#A6FF5D]/10 text-gray-400 hover:text-[#A6FF5D] transition-all">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-[#A6FF5D]/10 text-gray-400 hover:text-[#A6FF5D] transition-all">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* FAQ Section with Accordion */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="text-[#A6FF5D]">Questions</span>
            </h2>
            <p className="text-gray-400">
              Got questions? We've got answers!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 overflow-hidden hover:border-[#A6FF5D]/30 transition-all"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium text-white group-hover:text-[#A6FF5D] transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-all duration-300 ${
                      openFaq === index ? 'rotate-180 text-[#A6FF5D]' : ''
                    }`}
                  />
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#A6FF5D]/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Create Your{' '}
              <span className="text-[#A6FF5D]">Perfect Resume?</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of students who've already built their dream resumes. 
              No signup, no credit card, just results.
            </p>
            
            <Link to="/services">
              <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-[#A6FF5D] text-black rounded-full font-medium overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </Link>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-xs text-[A6FF5D] ">
              <span className="flex items-center gap-1">✓ No signup</span>
              <span className="flex items-center gap-1">✓ Free forever</span>
              <span className="flex items-center gap-1">✓ LPU format</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
