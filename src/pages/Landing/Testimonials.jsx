import React from 'react';
import { TESTICENTER, TESTIMONIALBG } from '../../assets';
import RatingStars from '../../component/RatingStars';
import Button from '../../component/Button';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Testimonials = () => {
    return (
        <div className='relative'>
            <div
                className='relative bg-cover bg-center flex flex-col items-center justify-center h-screen md:h-[90vh]'
                style={{ backgroundImage: `url(${TESTIMONIALBG})` }}
            >
                <div className='absolute top-1/2 left-1/4 transform -translate-y-1/2 z-10'>
                    <Button type='button' className='bg-white border p-3 md:p-4 flex items-center rounded-full'>
                        <GoArrowLeft />
                    </Button>
                </div>
                <div className='absolute top-1/2 right-1/4 transform -translate-y-1/2 z-10'>
                    <Button type='button' className='flex items-center bg-tapc rounded-full p-3 md:p-4'>
                        <GoArrowRight color='white' />
                    </Button>
                </div>
                <div className='flex flex-col items-center justify-center gap-8 md:gap-10 relative z-20'>
                    <div>
                        <p className='text-lg md:text-xl lg:text-2xl font-semibold text-center globalSubHeading'>
                            Testimonials
                        </p>
                        <p className='text-sm md:text-base lg:text-lg text-center globalParagraph'>
                            Trust our clients
                        </p>
                    </div>

                    <div>
                        <img src={TESTICENTER} alt="Testimonial Center" className='h-24 w-24 md:h-28 md:w-28' />
                    </div>
                </div>

                <div className='flex flex-col items-center gap-4 md:gap-6 p-4 md:p-8 relative z-20'>
                    <p className='text-xl md:text-2xl lg:text-3xl font-bold text-ratingColor text-center'>
                        Mark Smith / <span className='text-cardHeadColor'>Travel Enthusiast</span>
                    </p>
                    <RatingStars rating={4.5} />
                    <p className='text-base md:text-lg lg:text-xl text-navColor text-center w-full md:w-4/5 lg:w-3/4'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
