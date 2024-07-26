import React from 'react';
import { AIRBNB, BOOKING, EXPO, OBJECTS, RBITZ, TRIPA } from '../../assets';

const Logo = () => {
    const logoData = [
        { logo: TRIPA },
        { logo: EXPO },
        { logo: BOOKING },
        { logo: AIRBNB },
        { logo: RBITZ },
    ];

    return (


        <div className="flex justify-around items-center space-x-2 px-10 py-10 relative flex-wrap gap-9">
            <div className='absolute left-8 bottom-12 z-20'>
                <img src={OBJECTS} alt="" className='h-28' />
            </div>
            {logoData.map((val, ind) => (
                <div key={ind} className="flex-shrink-0">
                    <img src={val.logo} alt="" className="h-6" />
                </div>
            ))}

        </div>


    );
}

export default Logo;
