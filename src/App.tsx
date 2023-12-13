import React, { useEffect, useState } from 'react';
import Logo from './assets/logo.png';
import TrackingForm from "./components/TrackingForm";
import RouteMap from "./components/RouteMap";
import Button from "./components/Button";
import { getRoutes } from "./store/actions/routesActions";
import { useDispatch, useSelector } from "react-redux";
import { getUnits } from "./store/actions/unitsActions";
import { FormErrorModel } from "./models/FormErrorModel";
import { isDateDifferenceValid } from "./functions/validateDateDifference";
import { RootState } from "./store/reducers";

function App() {
    const dispatch = useDispatch();

    const units = useSelector((state: RootState) => state.units.units);
    const routes = useSelector((state: RootState) => state.routes.routes);

    const currentDate = new Date().toISOString().split('T')[0];
    const [ unit, setUnit ] = useState<number>(0);
    const [ toDate, setToDate ] = useState<string>(currentDate);
    const [ fromDate, setFromDate ] = useState<string>(currentDate);
    const [ formSubmitted, setFormSubmitted ] = useState<boolean>(false);
    const [ formErrors, setFormErrors ] = useState<FormErrorModel>({
        dateDifference: null,
        dateError: null,
        unselectedUnit: null,
    });

    useEffect(() => {
        // @ts-ignore
        dispatch(getUnits());
    }, [dispatch]);

    const handleFormSubmit = () => {
        const setErrorAndReturn = (field: keyof FormErrorModel, message: string): boolean => {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [field]: message,
            }));
            return true;
        };

        // Check if a unit is selected
        if (unit === 0 && setErrorAndReturn('unselectedUnit', 'A selected vehicle number is required')) {
            return;
        }

        // Check if from date is greater than to date
        if (new Date(fromDate) > new Date(toDate) && setErrorAndReturn('dateError', 'From date cannot be greater than To date')) {
            return;
        }

        // Check if date difference is larger than 31 days
        if (!isDateDifferenceValid(fromDate, toDate) && setErrorAndReturn('dateDifference', 'Date difference should not be greater than 31 days')) {
            return;
        }

        // Reset errors
        setFormErrors({
            dateDifference: null,
            dateError: null,
            unselectedUnit: null,
        });

        // @ts-ignore
        dispatch(getRoutes(fromDate, toDate, unit));
        setFormSubmitted(true);
    }

    return (
        <div className='w-full flex flex-col items-center min-h-screen bg-[#FAFAFA] pt-7 md:px-5 md:py-6 '>
            <img
                src={Logo}
                alt='company logo'
                className='h-16 mb-6'
            />
            <div className='w-full rounded-sm overflow-hidden bg-white sm:shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:max-w-2xl'>
                <h1 className='text-2xl font-medium pt-9 pb-6 px-4 sm:px-7 tracking-wide'>Route report</h1>
                <TrackingForm
                    unit={unit}
                    setUnit={setUnit}
                    units={units}
                    currentDate={currentDate}
                    toDate={toDate}
                    setToDate={setToDate}
                    fromDate={fromDate}
                    setFromDate={setFromDate}
                    formErrors={formErrors}
                    setFormErrors={setFormErrors}
                />

                { formSubmitted && !formErrors.dateDifference && !formErrors.dateError && !formErrors.unselectedUnit && routes[0] ? (
                    routes[0].routes.length > 0 ? (
                        <RouteMap
                            routes={routes[0].routes}
                        />
                    ) : (
                        <div className='w-full flex pb-7 justify-center text-gray-400 text-sm'>
                            No routes found during this time period...
                        </div>
                    )
                ) : null}
                <Button
                    handleFormSubmit={handleFormSubmit}
                />
            </div>
        </div>
    );
}

export default App;
