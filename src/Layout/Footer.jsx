import React from 'react';
import { FOOTERLOGO } from '../assets';
import { FaFacebookF, FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    const icons = [
        { Icon: FaFacebookF },
        { Icon: FaSquareXTwitter },
        { Icon: FaInstagramSquare },
    ];

    const sections = [
        { title: "Company", items: ["About", "Career", "Mobile"] },
        { title: "Contact", items: ["Why Travlog?", "Partner with us", "FAQ’s", "Blog"] },
        { title: "Meet Us", items: ["+00 92 1234 56789", "info@travlog.com", "205. R Street, New York BD23200"] },
    ];

    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <div className='flex flex-col items-start space-y-6'>
                    <img src={FOOTERLOGO} alt="Footer Logo" className='h-8 md:h-12' />
                    <p className='text-sm md:text-base text-navColor'>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                        in a piece of classical Latin literature from 45 BC.
                    </p>
                    <div className='flex items-center space-x-4'>
                        {icons.map((val, ind) => (
                            <div key={ind} className='rounded-full p-2 bg-tapc'>
                                <val.Icon color='white' size={18} />
                            </div>
                        ))}
                    </div>
                </div>
                {sections.map((section, index) => (
                    <div key={index} className='flex flex-col space-y-4'>
                        <p className='text-base md:text-lg font-bold'>{section.title}</p>
                        {section.items.map((item, idx) => (
                            <p key={idx} className='text-sm md:text-base text-navColor'>{item}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
