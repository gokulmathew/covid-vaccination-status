import { combineReducers } from "redux";
import visulizationReducer from "../pages/Visualization/visulizationSlice";

// Info: Combining all reducers
const rootReducer = combineReducers({
  visualization: visulizationReducer,
});

export default rootReducer;
