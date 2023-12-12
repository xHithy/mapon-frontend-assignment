import { combineReducers } from 'redux';
import unitsReducer from './unitsReducer';
import routesReducer from './routesReducer';

export const rootReducer = combineReducers({
    units: unitsReducer,
    routes: routesReducer
});

export type RootState = ReturnType<typeof rootReducer>;