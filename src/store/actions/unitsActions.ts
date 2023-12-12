import { fetchUnits } from '../../api/unitsApi';
import { Dispatch } from "react";
import { GET_UNITS, GET_UNITS_ERROR, UnitsActionTypes } from "../../models/ActionModels";
import { UnitModel } from "../../models/UnitModel";

export const getUnits = () => {
    return async (dispatch: Dispatch<UnitsActionTypes>) => {
        try {
            const response = await fetchUnits();

            if (!response || response.data.error) {
                dispatch({ type: GET_UNITS_ERROR, payload: 'Error fetching units' });
                return;
            }

            const units = response.data.data.units.map((unit: UnitModel) => ({
                unit_id: unit.unit_id,
                number: unit.number,
            }));

            dispatch({ type: GET_UNITS, payload: units });
        } catch (error) {
            dispatch({ type: GET_UNITS_ERROR, payload: 'Error fetching units' });
        }
    };
};