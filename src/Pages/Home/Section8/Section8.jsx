import React from 'react';

const Section8 = () => {
    return (
        <div >


            <div
                className="relative w-full bg-no-repeat  bg-cover"
                style={{
                    backgroundImage: ` url(https://i.ibb.co/6rDk4dy/desks.jpg)`,
                    backgroundBlendMode: `overlay`,
                    backgroundColor: `rgba(77, 32, 121, 0.61)`,
                }}
            >






                <div>




                    <div className="hero-content text-center text-neutral-content container lg:container lg:mx-auto  px-8 lg:px-32  pb-6 pt-32 ">
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className="">

                            <h1

                                className="mb-10  lg:-pt-6  lg:ms-6 text-xl lg:text-4xl   text-white text-center lg:px-0 px-5  ">We believe we can level the playing field by <br /> giving every student access to effective, <br /> affordable, and engaging test prep tools.</h1>





                            <div>
                                <button className="btn bg-[#26b67c] hover:bg-[#279b6c] rounded-none border-none text-white text-xl lg:btn-lg  mb-20 lg:mt-4"><a href="#">we're hiring</a></button>
                            </div>



                        </div>
                    </div>

                </div>



            </div>
        </div >
    );
};

export default Section8;