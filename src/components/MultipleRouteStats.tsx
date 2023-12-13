import React from 'react';
import { SingleRouteModel } from "../models/RouteModel";
import { calculateTotalDrivingTime } from "../functions/calculateTotalDrivingTime";
import { calculateTotalDistance } from "../functions/calculateTotalDistance";

interface RouteStatsProps {
    routes: SingleRouteModel[];
}

const MultipleRouteStats = ({
    routes
}: RouteStatsProps) => {
    const totalRouteDistance = calculateTotalDistance(routes);
    const totalRouteDrivingTime = calculateTotalDrivingTime(routes);
    return (
        <div className='p-7 flex justify-center items-center flex-col px-7 sm:flex-row'>
            <div className='flex flex-col items-center px-6 py-4 sm:py-0'>
                <span className='text-4xl'>
                    { totalRouteDistance.toFixed(0) }
                </span>
                <span className='text-gray-500 text-sm'>Total Km driven</span>
            </div>
            <div className='flex flex-col items-center px-6 border-t-[1.5px] py-4 w-full sm:w-fit sm:border-l sm:border-y-0 sm:py-0'>
                <span className='text-4xl'>
                    { totalRouteDrivingTime }
                </span>
                <span className='text-gray-500 text-sm'>Total Driving time</span>
            </div>
        </div>
    );
};

export default MultipleRouteStats;