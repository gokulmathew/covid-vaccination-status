import { combineReducers } from "redux";
import visulizationReducer from "../pages/Visualization/visualizationSlice";

// Info: Combining all reducers
const rootReducer = combineReducers({
  visualization: visulizationReducer,
});

export default rootReducer;
