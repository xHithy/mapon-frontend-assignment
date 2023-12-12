import { GET_ROUTES } from "../../models/ActionModels";
import { RouteModel } from "../../models/RouteModel";

interface RoutesState {
    routes: RouteModel[];
}

const initialState = {
    routes: []
};

const routesReducer = (state: RoutesState = initialState, action: any): RoutesState => {
    switch (action.type) {
        case GET_ROUTES:
            return {
                ...state,
                routes: action.payload
            };
        default:
            return state;
    }
};

export default routesReducer;