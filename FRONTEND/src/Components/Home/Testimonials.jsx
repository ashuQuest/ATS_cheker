import React from 'react'

const Testimonials = () => {
const testimonials = [
        { id: 1, description: "The ATS score feature makes it easy to understand how well my resume matches a job role.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Rahul Sharma", company: "Vercel" },
        { id: 2, description: "I like how quickly it analyzes the resume and gives clear results without any confusion. ", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400", name: "Priyanka Verma", company: "Amazon" },
        { id: 3, description: "Uploading resume and job description is simple, and the score comes instantly.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Aman Gupta", company: "Flipkart" },
        { id: 4, description: "The PDF download option is very useful to keep track of different job applications.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", name: "Rekha Mehta", company: "Linear" },
        { id: 5, description: "It helps me identify missing keywords in my resume without manually checking everything.", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Arjun Singh", company: "Microsoft" },
        { id: 6, description: "Clean interface and smooth experience from start to finish.", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", name: "Sakshi Kumari", company: "Stripe" },
        { id: 7, description: "A helpful tool for students preparing for placements and internships.", image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png", name: "Christofer Levin", company: "Deloitte" },
        { id: 8, description: "Saves time by automating resume analysis based on job descriptions.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Prishu Turner", company: "Vercel" },
        { id: 9, description: "Gives a good idea of how strong my resume is before applying for a job.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Vikas Patel", company: "Amazon" }
    ]

    const columns = [
        { start: 0, end: 3, className: "animate-scroll-up-1" },
        { start: 3, end: 6, className: "hidden md:block animate-scroll-up-2" },
        { start: 6, end: 9, className: "hidden lg:block animate-scroll-up-3" }
    ]

    const renderCard = (testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="group bg-linear-to-b from-[#020204] to-[#191130] border border-blue-800 rounded-xl p-6 mb-4 hover:border-green-700 transition-all duration-300">
            <div className="mb-5">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <g className="stroke-[#fff] group-hover:stroke-green-700 transition-all duration-300"  strokeOpacity=".7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z"/></g>
                </svg>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                {testimonial.description}
            </p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="size-9 rounded-full border border-slate-800" />
                <div>
                    <p className="text-sm text-slate-300">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
            </div>
        </div>
    )

    return (
        <div id='Testimonials'>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap');
                    *{
                        font-family: "Geist", sans-serif;
                    }

                    @keyframes scroll-up {
                        0% {
                            transform: translateY(0);
                        }
                        100% {
                            transform: translateY(-50%);
                        }
                    }
                    .animate-scroll-up-1 {
                        animation: scroll-up 25s linear infinite;
                    }
                    .animate-scroll-up-2 {
                        animation: scroll-up 30s linear infinite;
                    }
                    .animate-scroll-up-3 {
                        animation: scroll-up 20s linear infinite; 
                    }
                `}
            </style>

            <div className="bg-black flex flex-col items-center justify-center py-16 px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-medium text-white mb-4">
                        Smart Resume Analysis, Built for You
                    </h1>
                    <p className="text-sm text-slate-200 max-w-md mx-auto">
                     Upload your resume, compare it with job descriptions, and get an ATS score — all in seconds, no manual effort needed.
                    </p>
                </div>

                <div className="relative w-full max-w-6xl overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[600px] overflow-hidden">
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className={col.className}>
                                {[...testimonials.slice(col.start, col.end), ...testimonials.slice(col.start, col.end)].map((testimonial, index) =>
                                    renderCard(testimonial, index)
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
