import React from 'react';
import Navbar from '../Layout/Navbar';
import { GiHandBag } from "react-icons/gi";
import { MdSlowMotionVideo } from "react-icons/md";
import Button from '../component/Button';
import { MAINSIDE } from '../assets';

const LandingPage = () => {
    return (
        <div className="relative bg-white min-h-screen">
            <Navbar />

            <div className="overflow-hidden">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255, 183, 197, 0.5) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 245, 220, 0.9) 100%)',
                        zIndex: 0,
                    }}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 h-full relative z-10">
                <div className="col-span-1 lg:col-span-6 flex items-center justify-center lg:justify-start bg-white bg-opacity-50 px-4 lg:px-10 py-8 lg:py-0">
                    <div className="flex flex-col gap-5 text-center lg:text-left">
                        <p className="px-4 py-2 lg:px-8 lg:py-4 bg-white rounded-full text-pinkColor text-sm font-semibold flex items-center gap-2 w-44 lg:w-56 h-12 lg:h-14 shadow-custom md:mt-12 sm:mt2-8">
                            Explore the world! <GiHandBag />
                        </p>

                        <p className="text-black text-4xl lg:text-6xl font-semibold">
                            Travel <span className="text-pinkColor">top destination</span> of the world
                        </p>
                        <p className="text-navColor text-base lg:text-lg">
                            We always make our customer happy by providing as many choices as possible
                        </p>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-2">
                            <Button className="bg-tapc text-white rounded-full px-6 lg:px-8 py-3 lg:py-4 text-sm custom-shadow custom-shadow-hover">
                                Get Started
                            </Button>
                            <Button className="bg-transparent text-black rounded-full px-6 lg:px-8 py-3 lg:py-4 border flex items-center gap-3 text-sm custom-shadow custom-shadow-hover">
                                <MdSlowMotionVideo className="text-tapc" /> Watch Demo
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 lg:col-span-6 bg-white bg-opacity-50 pt-8 lg:pt-20">
                    <div className="text-center text-black">
                        <img src={MAINSIDE} alt="" className="h-auto w-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
