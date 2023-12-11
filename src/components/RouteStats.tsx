import React from 'react';

const RouteStats = () => {
    return (
        <div className='p-7 flex justify-center items-center flex-col px-7 sm:flex-row'>
            <div className='flex flex-col items-center px-9 py-4 sm:py-0'>
                <span className='text-4xl'>128</span>
                <span className='text-gray-500 text-sm'>Km driven</span>
            </div>
            <div className='flex flex-col items-center px-6 border-y-[1.5px] py-5 w-full sm:w-fit sm:border-x sm:border-y-0 sm:py-0'>
                <span className='text-4xl'>3h 20m</span>
                <span className='text-gray-500 text-sm'>Total driving time</span>
            </div>
            <div className='flex flex-col items-center px-9 py-4 sm:py-0'>
                <span className='text-4xl'>1h 5m</span>
                <span className='text-gray-500 text-sm'>Driving time</span>
            </div>
        </div>
    );
};

export default RouteStats;