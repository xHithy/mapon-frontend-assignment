import React from 'react';
import Logo from './assets/logo.png';
import TrackingForm from "./components/TrackingForm";
import RouteMap from "./components/RouteMap";
import RouteStats from "./components/RouteStats";
import Button from "./components/Button";

function App() {
    return (
            <div className='w-full flex flex-col items-center min-h-screen bg-[#FAFAFA] pt-7 md:px-5 md:py-6 '>
                <img src={ Logo }  alt='company logo' className='h-16 mb-6'/>
                <div className='w-full rounded-sm overflow-hidden bg-white sm:shadow-[0_3px_10px_rgb(0,0,0,0.2)] sm:max-w-2xl'>
                    <h1 className='text-2xl font-medium pt-9 pb-6 px-4 sm:px-7'>Route report</h1>
                    <TrackingForm />
                    <RouteMap />
                    <RouteStats />
                    <Button />
                </div>
            </div>
    );
}

export default App;
