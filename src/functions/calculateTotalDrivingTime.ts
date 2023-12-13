import { SingleRouteModel } from "../models/RouteModel";

export const calculateTotalDrivingTime = (routes: SingleRouteModel[]) => {
    let totalDrivingTimeInMinutes = 0;

    routes.forEach((route) => {
        const startTime = new Date(route.start_time);
        const endTime = new Date(route.end_time);

        const timeDifferenceInMinutes = (endTime.getTime() - startTime.getTime()) / (1000 * 60);

        totalDrivingTimeInMinutes += timeDifferenceInMinutes;
    });

    const days = Math.floor(totalDrivingTimeInMinutes / (24 * 60));
    const remainingMinutes = totalDrivingTimeInMinutes % (24 * 60);
    const hours = Math.floor(remainingMinutes / 60);
    const minutes = Math.round(remainingMinutes % 60);

    let formattedString = '';

    if (days > 0) {
        formattedString += `${days}d `;
    }

    formattedString += `${hours}h ${minutes}m`;

    return formattedString.trim();
}