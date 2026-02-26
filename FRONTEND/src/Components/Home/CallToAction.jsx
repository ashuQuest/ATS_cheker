import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
        <>
            <style>
                {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
                    *{
                        font-family: "Poppins", sans-serif;
                    }
                `}
            </style>

            <section className="  px-4 bg-black border border-top-[#E0E7FF]">
                <div className="max-w-5xl mx-auto bg-linear-to-b from-[#F8FAFF] to-[#EEF2FF]  rounded-[20px] px-8 py-12 md:py-20 bg-[url('https://assets.prebuiltui.com/images/components/cta/cta-grid-bg.png')] bg-cover bg-center bg-no-repeat">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-5xl/14 leading-tight font-semibold tracking-tighter max-w-xl mx-auto mb-4 text-[#A6FF5D]">
                            Optimize Your<span className="bg-linear-to-r from-[#A5B4FC] to-[#666666] bg-clip-text text-transparent"> Resume Effortlessly</span>
                        </h1>
                        <p className="text-sm text-neutral-600 max-w-md mx-auto mb-8">
                            Analyze your resume instantly — upload it, match with job descriptions, and get your ATS score in seconds.
                        </p>
                        <Link to="/app/service/ats-optimizer">
                        <button className="bg-linear-to-b from-[#1E1E1E] to-[#050505] text-white text-sm px-6 py-3 rounded-lg border border-[#242424] inline-flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer group">
                            <div className="relative overflow-hidden">
                                <span className="block transition-transform duration-200 group-hover:-translate-y-full">
                                    Optimize Your Resume for Free
                                </span>
                                <span className="absolute top-0 left-0 block transition-transform duration-200 group-hover:translate-y-0 translate-y-full">
                                    Optimize Your Resume for Free
                                </span>
                            </div>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m5.833 14.168 8.334-8.333m0 8.333V5.835H5.833" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction






