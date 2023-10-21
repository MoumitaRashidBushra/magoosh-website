import React from 'react';
import { FaFacebookSquare, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

const Section10 = () => {
    return (
        <div className='bg-[#26b67c]'>
            <div className='container lg:container lg:mx-auto px-10  lg:px-20  pt-8 lg:pt-16 pb-16'>

                <div className=" flex flex-col lg:flex-row justify-center items-center lg:text-4xl text-xl text-white">

                    <div>
                        <h1

                            className="   text-xl lg:text-4xl   text-white text-center lg:px-0 font-bold ">Connect with us</h1>

                    </div>

                    <div className=' lg:ms-20 mt-2 flex gap-8 lg:gap-12'>
                        <div>
                            <a href="#"><FaTwitter className='lg:text-4xl text-xl text-white hover:text-[#4D2079]'></FaTwitter></a>
                        </div>

                        <div>
                            <a href="#"><FaFacebookSquare className='lg:text-4xl text-xl text-white hover:text-[#4D2079]'></FaFacebookSquare></a>
                        </div>

                        <div>
                            <a href="#"><FaLinkedinIn className='lg:text-4xl text-xl text-white hover:text-[#4D2079]'></FaLinkedinIn></a>
                        </div>

                        <div>
                            <a href="#"><FaYoutube className='lg:text-4xl text-xl text-white hover:text-[#4D2079]'></FaYoutube></a>
                        </div>

                        <div>
                            <a href="#"><FaInstagram className='lg:text-4xl text-xl text-white hover:text-[#4D2079]'></FaInstagram></a>
                        </div>

                    </div>




                </div>

            </div>
        </div>
    );
};

export default Section10;