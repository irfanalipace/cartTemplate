import React from 'react';
import InputField from '../../component/InputField';
import { MdMarkEmailUnread } from "react-icons/md";
import Button from '../../component/Button';
import { FORMLEFT } from '../../assets';

const ContactForm = () => {
    return (
        <div className='relative px-4 sm:px-8 md:px-16 lg:px-24 py-8'>
            <div className='absolute top-5 left-4 sm:left-8 md:left-12 lg:left-20'>
                <img src={FORMLEFT} alt="Form Decoration" className='h-16 sm:h-20 md:h-24 lg:h-28' />
            </div>
            <div className='bg-formColor flex flex-col items-center rounded-3xl gap-5 py-10 px-6 sm:py-12 sm:px-8 md:py-16 md:px-12 lg:py-20 lg:px-16'>
                <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center globalSubHeading'>
                    Subscribe to our newsletter
                </p>
                <p className='text-base sm:text-lg md:text-xl lg:text-2xl w-full sm:w-full md:w-3/4 lg:w-2/3 text-center font-medium globalParagraph leading-tight sm:leading-relaxed md:leading-loose lg:leading-loose'>
                    Prepare yourself & let’s explore the beauty of the world
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12'>
                    <div className='w-full sm:w-3/4 md:w-1/2'>
                        <InputField placeholder='Enter Your Email' Icon={MdMarkEmailUnread} />
                    </div>
                    <Button className="bg-tapc rounded-full px-6 py-2 sm:px-8 sm:py-3 md:px-10 md:py-4 lg:px-12 lg:py-4 text-white text-sm sm:text-base md:text-lg lg:text-xl">
                        Subscribe
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
