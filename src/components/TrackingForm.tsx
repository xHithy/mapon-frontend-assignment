import React from 'react';
import { FormErrorModel } from "../models/FormErrorModel";
import { UnitModel } from "../models/UnitModel";

interface TrackingFormProps {
    unit: number
    setUnit: React.Dispatch<React.SetStateAction<number>>
    units: UnitModel[]
    currentDate: string
    toDate: string
    setToDate:  React.Dispatch<React.SetStateAction<string>>
    fromDate: string
    setFromDate:  React.Dispatch<React.SetStateAction<string>>
    formErrors: FormErrorModel
    setFormErrors: React.Dispatch<React.SetStateAction<FormErrorModel>>
}

const TrackingForm = ({
    unit,
    setUnit,
    units,
    currentDate,
    toDate,
    setToDate,
    fromDate,
    setFromDate,
    formErrors,
}: TrackingFormProps) => {
    return (
        <div className='w-full flex flex-col'>
            <div className='flex flex-col px-4 sm:justify-between sm:flex-row sm:px-7'>
                <label
                    className='w-1/2'
                    htmlFor='vehicle'
                >
                    Vehicle number<sup className='text-red-500'>*</sup>
                </label>
                <div className='flex flex-col w-full'>
                    <select
                        name='vehicle'
                        className='outline-gray-200 outline w-full p-2 rounded-sm cursor-pointer'
                        value={unit}
                        onChange={(e) => setUnit(parseInt(e.target.value))}
                    >
                        <option hidden value='0'>Select vehicle</option>
                        { units.map((unit: any) => (
                            <option key={unit.unit_id } value={ unit.unit_id}>
                                { unit.number }
                            </option>
                        ))}
                    </select>
                    { formErrors.unselectedUnit &&
                        <span className='text-red-500 text-xs'>{ formErrors.unselectedUnit }</span>
                    }
                </div>
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
                        { formErrors.dateDifference &&
							<span className='text-red-500 text-xs'>{ formErrors.dateDifference }</span>
                        }
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
                        { formErrors.dateError &&
							<span className='text-red-500 text-xs'>{ formErrors.dateError }</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrackingForm;