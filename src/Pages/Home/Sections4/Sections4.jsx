import React from 'react';

const Sections4 = () => {
    return (
        <div className='bg-[#26b67c]'>

            <div data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='container lg:container lg:mx-auto  lg:px-20  pt-10 lg:pt-12 pb-12'>

                <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-10  lg:px-28    px-6 justify-center items-center'>

                    <div className=' text-center col-span-1'>
                        <div className="avatar">
                            <div className="w-32 rounded-full">
                                <img src="https://i.ibb.co/34B78bV/Cindy-Le.png" />
                            </div>

                        </div>
                        <div>
                            <h1 className='pt-1 font-bold text-white ps-5 text-2xl '>Cindy L.</h1>
                        </div>
                    </div>

                    <div className=' col-span-2'>
                        <p className=' text-white  text-xl ps-4 lg:ps-0 mb-4'>
                            "Magoosh seemed to be by far the best option:  a program I could use whenever I liked, following my own schedule."
                        </p>
                    </div>

                    <div className='md:text-center col-span-1 ps-10 lg:ps-0 '>
                        <button className="btn bg-white hover:bg-violet-950 rounded-none border-none text-[#26b67c] text-xl btn-wide  normal-case  "><a href="#">student testimonials</a></button>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Sections4;