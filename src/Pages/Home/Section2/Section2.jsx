import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
    useEffect(() => {
        AOS.init();
    }, []);


    return (
        <div className='container lg:container lg:mx-auto  lg:px-20 lg:pt-20 pb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-16 pt-8  mb-6 px-10'>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card w-full">
                    <figure><img src="https://i.ibb.co/MpmFN3m/ezgif-com-gif-maker-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-4xl font-bold text-center text-gray-500">400 million</h2>
                        <p className='text-xl text-center text-gray-500 pt-4'>practice questions answered</p>

                    </div>
                </div>
                <div data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card w-full">
                    <figure><img src="https://i.ibb.co/kXWnhmc/ezgif-com-gif-maker-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-4xl font-bold text-center text-gray-500">185</h2>
                        <p className='text-xl text-center text-gray-500 pt-4'>countries with Magoosh students</p>

                    </div>
                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="card w-full">
                    <figure><img src="https://i.ibb.co/Z8cx8Vp/ezgif-com-gif-maker-3.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className=" text-4xl font-bold text-center text-gray-500">11 million</h2>
                        <p className='text-xl text-center text-gray-500 pt-4'>hours of video lessons watched</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Section2;