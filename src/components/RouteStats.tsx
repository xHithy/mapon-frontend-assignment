import React from 'react';
import { calculateTotalDrivingTime } from "../functions/calculateTotalDrivingTime";
import { SingleRouteModel } from "../models/RouteModel";

interface RouteStatsProps {
    selectedRouteData: SingleRouteModel;
}

const RouteStats = ({
    selectedRouteData
}: RouteStatsProps) => {
    return (
        <div className='p-7 flex justify-center items-center flex-col px-7 sm:flex-row'>
            <div className='flex flex-col items-center px-9 py-4 sm:py-0'>
                <span className='text-4xl'>
                    { (selectedRouteData.distance / 1000).toFixed(1) }
                </span>
                <span className='text-gray-500 text-sm'>Km driven</span>
            </div>
            <div className='flex flex-col items-center px-6 border-t-[1.5px] py-5 w-full sm:w-fit sm:border-l sm:border-y-0 sm:py-0'>
                <span className='text-4xl'>
                    { calculateTotalDrivingTime(selectedRouteData.start_time, selectedRouteData.end_time) }
                </span>
                <span className='text-gray-500 text-sm'>Driving time</span>
            </div>
        </div>
    );
};

export default RouteStats;