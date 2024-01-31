"use client"

import { React, useState } from 'react';
const Login = () => {

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
      
        const handleEmailChange = (e) => {
          setEmail(e.target.value);
        };
      
        const handlePasswordChange = (e) => {
          setPassword(e.target.value);
        };

    return (
        <main>
            <div className="flex flex-col lg:flex-row">
                <div
                    className="bg-regal-blue h-20 text-2xl w-full lg:w-1/2 lg:h-screen lg:bg-[#F8FAFF] flex items-center justify-center"
                        style={{
                            backgroundImage: 'url("/Left side.svg")',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                    <p className="hidden lg:block font-montserrat pb-1 text-left relative lg:uppercase lg:text-5xl lg:font-bold text-white lg:pr-24">
                        Base
                    </p>

                    <p className="lg:hidden md:hidden font-montserrat pb-1 text-left relative right-32 text-white">
                        Base
                    </p>

                    <div className="lg:hidden md:hidden absolute top-3 left-3 p-3">
                        <img className="" src="/Subtract mobile.svg" alt="Logo1" />
                    </div>

                    <div className="hidden lg:block absolute top-0 left-0 p-3">
                        <img className="" src="/Ellipse 111.svg" alt="Logo1" />
                    </div>

                    <div className="hidden lg:block absolute top-0 left-0 lg:pt-9 lg:pl-2">
                        <img src="/Vector 7.svg" alt="Logo1" />
                    </div>

                    <div className="hidden lg:block absolute bottom-0 transform -translate-x-1/3 pl-72 pb-5">
                        <img src="/Frame 2.svg" alt="Socials" />
                    </div>

                    <div className="lg:hidden md:hidden absolute bottom-0 transform -translate-x-1/3 mb-20 ml-28">
                        <img src="/socialsmobile.png" alt="Socials" />
                    </div>

                
                </div>
                <div className="w-full lg:w-1/2 h-64 lg:h-screen bg-white">
                    <section className="bg-[#F8FAFF]">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className='flex flex-col items-start lg:w-[28rem] w-[20rem] lg:pb-16 pb-12'>
                                <p className="font-montserrat text-3xl lg:text-2xl text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                                    Sign In
                                </p>
                                <p className="font-lato lg:text-xm text-left font-bold leading-tight tracking-tight text-gray-900 md:text-2x pb-2">
                                    Sign in to your account
                                </p>
                            </div>
                            <div className='flex flex-row pb-6 lg:w-[28rem] justify-between'>
                                <img src='/Google Sign In.svg' alt="goog"/>
                                <img src='/Apple Sign In.svg' alt="appl"/>
                            </div>
                            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 ">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <form className="space-y-4 md:space-y-6" action="/csv-parser">
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                            <input type="email" name="email" id="email" onChange={handleEmailChange} className="bg-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-black" placeholder="johnDoe@gmail.com" required=""/>
                                        </div>
                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                            <input type="password" name="password" id="password" onChange={handlePasswordChange} placeholder="••••••••" className="bg-gray-100 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder:text-black" required=""/>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline text-blue-400">Forgot password?</a>
                                        </div>
                                        <button type="submit" disabled={!email.trim() || !password.trim()} className="w-full text-white bg-regal-blue hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 text-xl lg:text-sm rounded-lg px-5 py-2.5 text-center disabled:bg-regal-blue-light">Sign In</button>
                                    </form>
                                </div>
                            </div>
                            <p className="text-lg text-center lg:text-sm font-light text-gray-500 pt-3">
                                Don’t have an account yet? <a href="#" className="hidden lg:block font-medium text-blue-400 hover:underline">Register here</a>
                            </p>
                            <a href="#" className="lg:hidden pt-5 text-lg font-medium text-blue-400 hover:underline">Register here</a>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Login