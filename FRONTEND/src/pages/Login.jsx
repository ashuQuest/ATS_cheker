// import React from 'react'
// import { useNavigate } from 'react-router-dom' // Import for navigation

// const Login = () => {
//     const [state, setState] = React.useState("login")
//     const navigate = useNavigate() // For redirect after login

//     const [formData, setFormData] = React.useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData(prev => ({ ...prev, [name]: value }))
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         // Add your login/signup logic here
//         console.log('Form submitted:', formData)
        
//         // After successful login, redirect to home
//         // navigate('/')
//     }

//     return (
//         <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
//             {/* Animated Background Elements */}
//             <div className='absolute inset-0 overflow-hidden'>
//                 <div className='absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
//                 <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
//                 <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
//             </div>

//             {/* Main Content */}
//             <div className="relative z-10 w-full max-w-md px-4">
//                 {/* Logo or Brand */}
//                 <div className="text-center mb-8">
//                     <h1 className="text-4xl font-bold text-white mb-2">
//                         <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
//                             RESUME
//                         </span>
//                         <span className="text-indigo-400"> BUILDER</span>
//                     </h1>
//                     <p className="text-gray-400 text-sm">Build your professional resume today</p>
//                 </div>

//                 {/* Form Container */}
//                 <div className="relative">
//                     {/* Glow Effect */}
//                     <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    
//                     {/* Form */}
//                     <form
//                         onSubmit={handleSubmit}
//                         className="relative w-full bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl px-8 py-10 shadow-2xl"
//                     >
//                         <h1 className="text-white text-3xl font-medium text-center">
//                             {state === "login" ? "Welcome Back" : "Create Account"}
//                         </h1>

//                         <p className="text-gray-400 text-sm mt-2 text-center">
//                             {state === "login" 
//                                 ? "Please sign in to continue" 
//                                 : "Sign up to get started with your resume"}
//                         </p>

//                         {/* Name Field - Only for Signup */}
//                         {state !== "login" && (
//                             <div className="flex items-center mt-6 w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                     <circle cx="12" cy="8" r="5" />
//                                     <path d="M20 21a8 8 0 0 0-16 0" />
//                                 </svg>
//                                 <input 
//                                     type="text" 
//                                     name="name" 
//                                     placeholder="Full Name" 
//                                     className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
//                                     value={formData.name} 
//                                     onChange={handleChange} 
//                                     required={state !== "login"}
//                                 />
//                             </div>
//                         )}

//                         {/* Email Field */}
//                         <div className={`flex items-center ${state !== "login" ? 'mt-4' : 'mt-6'} w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all`}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <rect x="2" y="4" width="20" height="16" rx="2" />
//                                 <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
//                             </svg>
//                             <input 
//                                 type="email" 
//                                 name="email" 
//                                 placeholder="Email Address" 
//                                 className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
//                                 value={formData.email} 
//                                 onChange={handleChange} 
//                                 required 
//                             />
//                         </div>

//                         {/* Password Field */}
//                         <div className="flex items-center mt-4 w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                                 <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
//                                 <path d="M7 11V7a5 5 0 0 1 10 0v4" />
//                             </svg>
//                             <input 
//                                 type="password" 
//                                 name="password" 
//                                 placeholder="Password" 
//                                 className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
//                                 value={formData.password} 
//                                 onChange={handleChange} 
//                                 required 
//                             />
//                         </div>

//                         {/* Forgot Password - Only for Login */}
//                         {state === "login" && (
//                             <div className="mt-3 text-right">
//                                 <button type="button" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
//                                     Forgot password?
//                                 </button>
//                             </div>
//                         )}

//                         {/* Submit Button */}
//                         <button 
//                             type="submit" 
//                             className="mt-6 w-full h-12 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
//                         >
//                             {state === "login" ? "Sign In" : "Create Account"}
//                         </button>

//                         {/* Toggle between Login/Signup */}
//                         <p 
//                             onClick={() => setState(prev => prev === "login" ? "register" : "login")} 
//                             className="text-gray-400 text-sm mt-6 text-center cursor-pointer hover:text-gray-300 transition"
//                         >
//                             {state === "login" ? "Don't have an account?" : "Already have an account?"}
//                             <span className="text-indigo-400 hover:text-indigo-300 ml-1 font-medium">
//                                 {state === "login" ? "Sign up" : "Sign in"}
//                             </span>
//                         </p>

//                         {/* Terms & Privacy */}
//                         <p className="text-gray-500 text-xs text-center mt-6">
//                             By continuing, you agree to our{' '}
//                             <button className="text-indigo-400 hover:underline">Terms</button>
//                             {' '}and{' '}
//                             <button className="text-indigo-400 hover:underline">Privacy Policy</button>
//                         </p>
//                     </form>
//                 </div>
//             </div>

//             {/* Add custom animations */}
//             <style jsx>{`
//                 @keyframes blob {
//                     0% { transform: translate(0px, 0px) scale(1); }
//                     33% { transform: translate(30px, -50px) scale(1.1); }
//                     66% { transform: translate(-20px, 20px) scale(0.9); }
//                     100% { transform: translate(0px, 0px) scale(1); }
//                 }
//                 .animate-blob {
//                     animation: blob 7s infinite;
//                 }
//                 .animation-delay-2000 {
//                     animation-delay: 2s;
//                 }
//                 .animation-delay-4000 {
//                     animation-delay: 4s;
//                 }
//             `}</style>
//         </div>
//     )
// }

// export default Login






import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [state, setState] = useState("login")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear error when user starts typing
        setError('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const url = state === "login" 
                ? 'http://localhost:5000/api/auth/login'
                : 'http://localhost:5000/api/auth/register'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong')
            }

            // Save token and user data to localStorage
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            console.log('Success:', data.message || (state === "login" ? 'Logged in successfully' : 'Registered successfully'))
            
            // Redirect to home page
            navigate('/')
            
        } catch (err) {
            setError(err.message)
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        navigate('/login')
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000'></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-md px-4">
                {/* Logo or Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">
                        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            RESUME
                        </span>
                        <span className="text-indigo-400"> BUILDER</span>
                    </h1>
                    <p className="text-gray-400 text-sm">Build your professional resume today</p>
                </div>

                {/* Form Container */}
                <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative w-full bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-2xl px-8 py-10 shadow-2xl"
                    >
                        <h1 className="text-white text-3xl font-medium text-center">
                            {state === "login" ? "Welcome Back" : "Create Account"}
                        </h1>

                        <p className="text-gray-400 text-sm mt-2 text-center">
                            {state === "login" 
                                ? "Please sign in to continue" 
                                : "Sign up to get started with your resume"}
                        </p>

                        {/* Error Message */}
                        {error && (
                            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/50 rounded-lg">
                                <p className="text-red-400 text-sm text-center">{error}</p>
                            </div>
                        )}

                        {/* Name Field - Only for Signup */}
                        {state !== "login" && (
                            <div className="flex items-center mt-6 w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="8" r="5" />
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                </svg>
                                <input 
                                    type="text" 
                                    name="name" 
                                    placeholder="Full Name" 
                                    className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
                                    value={formData.name} 
                                    onChange={handleChange} 
                                    required={state !== "login"}
                                    disabled={loading}
                                />
                            </div>
                        )}

                        {/* Email Field */}
                        <div className={`flex items-center ${state !== "login" ? 'mt-4' : 'mt-6'} w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                <path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" />
                            </svg>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email Address" 
                                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                disabled={loading}
                            />
                        </div>

                        {/* Password Field */}
                        <div className="flex items-center mt-4 w-full bg-gray-700/50 ring-1 ring-gray-600 focus-within:ring-indigo-500 h-12 rounded-lg overflow-hidden px-4 gap-2 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Password (min. 6 characters)" 
                                className="w-full bg-transparent text-white placeholder-gray-500 border-none outline-none text-sm" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                                disabled={loading}
                                minLength={state !== "login" ? 6 : undefined}
                            />
                        </div>

                        {/* Forgot Password - Only for Login */}
                        {state === "login" && (
                            <div className="mt-3 text-right">
                                <button type="button" className="text-sm text-indigo-400 hover:text-indigo-300 transition">
                                    Forgot password?
                                </button>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className={`mt-6 w-full h-12 rounded-lg text-white font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Please wait...' : (state === "login" ? "Sign In" : "Create Account")}
                        </button>

                        {/* Toggle between Login/Signup */}
                        <p 
                            onClick={() => !loading && setState(prev => prev === "login" ? "register" : "login")} 
                            className={`text-gray-400 text-sm mt-6 text-center ${loading ? 'cursor-default' : 'cursor-pointer hover:text-gray-300'} transition`}
                        >
                            {state === "login" ? "Don't have an account?" : "Already have an account?"}
                            <span className="text-indigo-400 hover:text-indigo-300 ml-1 font-medium">
                                {state === "login" ? "Sign up" : "Sign in"}
                            </span>
                        </p>

                        {/* Terms & Privacy */}
                        <p className="text-gray-500 text-xs text-center mt-6">
                            By continuing, you agree to our{' '}
                            <button className="text-indigo-400 hover:underline">Terms</button>
                            {' '}and{' '}
                            <button className="text-indigo-400 hover:underline">Privacy Policy</button>
                        </p>
                    </form>
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}

export default Login