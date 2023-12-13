/*
    Difference between this function and "calculateTotalDrivingTime" is that
    this function calculates only the driving time between one route, however
    the other function calculates multiple routes driving time together
 */

export const calculateDrivingTime = (start_time: string, end_time: string): string => {
    const start = new Date(start_time);
    const end = new Date(end_time);

    const timeDifference = end.getTime() - start.getTime();

    // Convert the time difference to hours, minutes, and seconds
    const totalMilliseconds = Math.abs(timeDifference);
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours}h ${minutes}m`;
};