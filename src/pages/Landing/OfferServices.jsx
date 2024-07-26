import React from 'react';
import { MdLocationPin } from "react-icons/md";
import { RiCalendarScheduleFill, RiCoupon2Fill } from "react-icons/ri";
import { SERVICEOFFER } from '../../assets';

const OfferServices = () => {
    const servcieOfferData = [
        { icon: MdLocationPin, title: "We offer best services", description: "Lorem Ipsum is not simply random text", bgc: "#FF5722" },
        { icon: RiCalendarScheduleFill, title: "Schedule your trip", description: "It has roots in a piece of classical", bgc: "#FACD49" },
        { icon: RiCoupon2Fill, title: "Get discounted coupons", description: "Lorem Ipsum is not simply random text", bgc: "#F85E9F" },
    ];

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='space-y-5'>
                    <div>
                        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold globalSubHeading leading-tight'>
                            Key features
                        </p>
                        <p className='text-base sm:text-lg md:text-xl lg:text-2xl globalParagraph leading-tight'>
                            We offer best services
                        </p>
                    </div>
                    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-navColor'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                        <br />
                        from 45 BC.
                    </p>
                    {servcieOfferData.map((val, ind) => (
                        <div key={ind} className='flex flex-col border p-4 sm:p-5 rounded-xl sm:rounded-2xl'>
                            <div className='flex items-center gap-4 sm:gap-5'>
                                <div className='p-4 sm:p-5 rounded-full' style={{ backgroundColor: val.bgc }}>
                                    <val.icon size={24} sm={30} color='white' />
                                </div>
                                <div>
                                    <p className='text-lg sm:text-xl md:text-2xl font-bold'>{val.title}</p>
                                    <p className='text-navColor text-base sm:text-lg md:text-xl'>{val.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center items-center'>
                    <img src={SERVICEOFFER} alt="Service Offer" className='w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl' />
                </div>
            </div>
        </div>
    );
};

export default OfferServices;
