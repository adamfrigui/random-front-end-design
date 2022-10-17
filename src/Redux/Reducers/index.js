import { combineReducers } from "redux";
import { productReducer ,SelectedProductReducer, ShopReducer} from "./ProductReducer";

const reducers = combineReducers({
    allProducts : productReducer,
    product : SelectedProductReducer,
    shop : ShopReducer,
});

export default reducers