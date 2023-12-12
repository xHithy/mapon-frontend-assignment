import { GET_UNITS } from "../../models/ActionModels";
import { UnitModel } from "../../models/UnitModel";

interface UnitsState {
    units: UnitModel[];
}

const initialState: UnitsState = {
    units: [],
};

const unitsReducer = (state: UnitsState = initialState, action: any): UnitsState => {
    switch (action.type) {
        case GET_UNITS:
            return {
                ...state,
                units: action.payload
            };
        default:
            return state;
    }
};

export default unitsReducer;