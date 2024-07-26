import React from 'react';

const InputField = ({ placeholder, Icon, type }) => {
    return (
        <div className='relative flex items-center'>
            {Icon && <Icon className='absolute left-3 text-gray-400' size={20} />}
            <input
                type={type}
                placeholder={placeholder}
                className='pl-10 pr-6 py-2  rounded-lg focus:outline-none focus:border-blue-500 w-[20rem]'
            />
        </div>
    );
};

export default InputField;
