import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className=' text-white   bg-opacity-80 bg-transparent absolute z-[3] max-w-screen-4xl w-full'>
            <div className='navbar '>
                {/* #2f97c7 */}
                <div className="container lg:container lg:mx-auto  lg:px-20 lg:pt-3 pb-3  ">
                    <div className="navbar-start container lg:container  ">
                        {/* <div className="dropdown ">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden flex">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow  rounded-box w-52 bg-[#0077b6] text-white">

                                <Link className='ms-20 pt-3'>team</Link>
                                <Link className='ms-20 pt-3'>careers</Link>
                                <Link className='ms-20 pt-3'>testimonials</Link>
                                <Link className='ms-20 pt-3'>blogs</Link>
                                <Link className='ms-20 pt-3'>press</Link>
                                <Link className='ms-20 pt-3 pb-4'>contact</Link>
                            </ul>
                        </div> */}
                        {/* <a className="btn btn-ghost  normal-case text-2xl lg:text-3xl italic font-bold  btn-xs sm:btn-sm md:btn-md lg:btn-lg "><span className='text-2xl lg:text-6xl '>F</span>ish Bazar </a> */}
                        <a className="btn btn-ghost  normal-case text-2xl lg:text-3xl italic font-bold  btn-xs sm:btn-sm md:btn-md lg:btn-lg pt-4 ms-4 lg:ms-0 lg:pt-0 "> <img src="https://i.ibb.co/HqBGLVV/ezgif-com-gif-maker.png" alt="" /> </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 mr-30">
                            <Link to='/' className='mr-3 p-2 px-6 font-bold text-xl hover:text-[#26b67c]   hover:font-bold '>team</Link>

                            <Link className='mr-3 p-2 px-6 font-bold text-xl hover:text-[#26b67c]   hover:font-bold '>careers</Link>

                            <Link className='mr-3 p-2 px-6 font-bold text-xl hover:text-[#26b67c]   hover:font-bold '>testimonials</Link>


                            <Link className="dropdown dropdown-bottom flex justify-center items-center">
                                <label tabIndex={0} className=""><Link className='mr-3 p-2 px-6 font-bold text-xl  hover:text-[#26b67c]   hover:font-bold '>blogs</Link></label>
                                <Link tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  rounded-box w-52 bg-[#2bbd82] text-white  ">
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>GRE Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>GMAT Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>Admissions</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>ACT + SAT Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>IELTS Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>TOEFL Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>MCAT Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>LSAT Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>Praxis Blog</Link>
                                    <Link className=' hover:bg-[#47e9a8] p-2 font-bold text-xl '>Company Blog</Link>
                                </Link>
                            </Link>

                            <Link className='mr-3 p-2 px-6 font-bold text-xl hover:text-[#26b67c]   hover:font-bold '>press</Link>

                            <Link className='mr-3 p-2 px-6 font-bold text-xl hover:text-[#26b67c]   hover:font-bold '>contact</Link>
                        </ul>
                    </div>

                    <div className="navbar-end lg:hidden flex  mt-6">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden rounded-md px-3 border-amber-100 mr-12  ">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                                Menu
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  z-[1] p-2 shadow  rounded-box w-28 bg-[#2bbd82] text-white">

                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold  '>team</Link>
                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold '>careers</Link>
                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold '>testimonials</Link>
                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold '>blogs</Link>






                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold '>press</Link>
                                <Link className=' pt-3  hover:bg-[#47e9a8] p-2 mx-auto font-bold  pb-4'>contact</Link>
                            </ul>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default Nav;