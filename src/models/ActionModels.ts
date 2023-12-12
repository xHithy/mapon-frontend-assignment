import { UnitModel } from "./UnitModel";
import { RouteModel } from "./RouteModel";

export const GET_UNITS = 'GET_UNITS';
export const GET_UNITS_ERROR = 'GET_UNITS_ERROR';

export const GET_ROUTES = 'GET_ROUTES';
export const GET_ROUTES_ERROR = 'GET_ROUTES_ERROR';

export interface GetUnitsAction {
    type: typeof GET_UNITS;
    payload: UnitModel[];
}

export interface GetUnitsErrorAction {
    type: typeof GET_UNITS_ERROR;
    payload: string;
}

export interface GetRoutesAction {
    type: typeof GET_ROUTES;
    payload: RouteModel;
}

export interface GetRoutesErrorAction {
    type: typeof GET_ROUTES_ERROR;
    payload: string;
}

export type UnitsActionTypes = GetUnitsAction | GetUnitsErrorAction | GetRoutesAction | GetRoutesErrorAction
