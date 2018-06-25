import {combineReducers, Reducer} from "redux";
import table from "./Table/TableReducer";
import {ApplicationState} from "../Models/Models";

export const rootReducer: Reducer<ApplicationState> = combineReducers<ApplicationState>({
    table
});

export default rootReducer; 