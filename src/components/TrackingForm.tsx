import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVehicleDataAsync } from '../store/slices/vehicleDataSlice';
import { VehicleDataModel } from "../models/VehicleDataModel";

const TrackingForm = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    const dispatch = useDispatch();
    // @ts-ignore
    const { status, vehicle, error } = useSelector((state) => state.fetchVehicles);
    const [ toDate, setToDate ] = useState <string> (currentDate);
    const [ fromDate, setFromDate ] = useState <string> ('');

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchVehicleDataAsync());
    }, [dispatch]);

    return (
        <div className='w-full flex flex-col'>
            <div className='flex flex-col px-4 sm:justify-between sm:items-center sm:flex-row sm:px-7'>
                <label
                    className='w-1/2'
                    htmlFor='vehicle'
                >
                    Vehicle number<sup className='text-red-500'>*</sup>
                </label>
                {status === 'loading' &&
                    <div className='outline-gray-200 outline w-full p-4 rounded-md cursor-pointer h-5 bg-gray-100 animate-pulse'></div>
                }
                {status === 'succeeded' &&
					<select
						name='vehicle'
						className='outline-gray-200 outline w-full p-2 rounded-sm cursor-pointer'
					>
						<option hidden>Select vehicle</option>
                        {vehicle?.data.units.map((vehicle: VehicleDataModel) => (
                            <option key={vehicle.unit_id}>{vehicle.number}</option>
                        ))}
					</select>
                }
            </div>
            <div className='flex justify-between px-4 pt-4 pb-12 sm:px-7'>
                <span className='w-1/2 hidden sm:block'>Period</span>
                <div className='w-full flex gap-4'>
                    <div className='w-1/2 flex flex-col space-y-0.5'>
                        <label>From</label>
                        <input
                            className='outline-gray-200 outline p-1.5 rounded-sm cursor-pointer'
                            type='date'
                            max={currentDate}
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </div>
                    <div className='w-1/2 flex flex-col space-y-0.5'>
                        <label>To</label>
                        <input
                            className='outline-gray-200 outline p-1.5 rounded-sm cursor-pointer'
                            type='date'
                            max={currentDate}
                            value={toDate}
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackingForm;