import React from 'react';
import { formatDate } from "../functions/formatDate";
import { SingleRouteModel } from "../models/RouteModel";

interface RouteSelectProps {
    routes: SingleRouteModel[];
    selectedRoute: number,
    setSelectedRoute: React.Dispatch<React.SetStateAction<number>>
}

const RouteSelect = ({
    routes,
    selectedRoute,
    setSelectedRoute
}: RouteSelectProps) => {
    return (
        <div className='flex flex-col px-4 sm:justify-between sm:items-center sm:flex-row sm:px-7 mb-5'>
            <label
                className='w-1/2'
                htmlFor='route'
            >
                Routes <span className='text-sm text-gray-400'>({routes.length} found)</span>
            </label>
            <select
                name='route'
                className='outline-gray-200 outline w-full p-2 rounded-sm cursor-pointer'
                value={selectedRoute}
                onChange={(e) => setSelectedRoute(parseInt(e.target.value))}
            >
                <option value='0'>All routes</option>
                {routes.map((route) => (
                    <option key={route.route_id} value={route.route_id}>
                        from {formatDate(route.start.time)} to {formatDate(route.end.time)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default RouteSelect;