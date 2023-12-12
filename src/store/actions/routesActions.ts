import { fetchRoutes } from '../../api/routesApi';
import { GET_ROUTES, GET_ROUTES_ERROR, UnitsActionTypes } from "../../models/ActionModels";
import { RouteModel } from "../../models/RouteModel";
import { Dispatch } from "react";

export const getRoutes = (
    fromPeriod: string,
    toPeriod: string,
    unitNumber: number
) => {
    return async (dispatch: Dispatch<UnitsActionTypes>) => {
        try {
            const response = await fetchRoutes(fromPeriod, toPeriod, unitNumber);

            if (!response) {
                dispatch({ type: GET_ROUTES_ERROR, payload: 'Error fetching units' });
                return;
            }

            const routes = response.data.data.units.map((unit: RouteModel) => ({
                unit_id: unit.unit_id,
                routes: unit.routes
                    .filter((route: any) => route.type === 'route')
                    .map((filteredRoute: any) => ({
                        route_id: filteredRoute.route_id,
                        start: filteredRoute.start,
                        start_time: filteredRoute.start.time,
                        end: filteredRoute.end,
                        end_time: filteredRoute.end.time,
                        distance: filteredRoute.distance,
                        decoded_route: {
                            points: filteredRoute.decoded_route ? filteredRoute.decoded_route.points : []
                        }
                    }))
            }));

            dispatch({ type: GET_ROUTES, payload: routes });
        } catch (error) {
            dispatch({ type: GET_ROUTES_ERROR, payload: 'Error fetching units' });
        }
    };
};