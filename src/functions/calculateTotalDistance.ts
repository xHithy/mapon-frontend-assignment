import { SingleRouteModel } from "../models/RouteModel";

export const calculateTotalDistance = (routes: SingleRouteModel[]) => {
    let totalDistance = 0;

    routes.forEach((route: SingleRouteModel) => {
        totalDistance += route.distance;
    });

    // Convert total distance to kilometers
    return totalDistance / 1000;
}