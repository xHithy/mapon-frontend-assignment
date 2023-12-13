import React from 'react';

interface ButtonProps {
    handleFormSubmit:  React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    handleFormSubmit
}: ButtonProps) => {
    return (
        <div className='bg-[#F4F4F4] w-full px-7 py-4 flex justify-end'>
            <button onClick={handleFormSubmit} className='uppercase bg-[#98C907] px-4 py-2 rounded-sm text-sm font-semibold text-white hover:bg-[#80BC00] transition-colors duration-200'>Generate</button>
        </div>
    );
};

export default Button;