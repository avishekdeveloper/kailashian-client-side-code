import { combineReducers } from "redux";
import { firebaseReducer } from "./firebaseReducer";
import { blogsReducer } from "./blogsReducer";
import { reviewsReducer } from "./reviewsReducer";
import { ordersReducer } from "./ordersReducer";
const reducers = combineReducers({
    firebaseReducer: firebaseReducer,
    blogsReducer: blogsReducer,
    reviewsReducer: reviewsReducer,
    ordersReducer: ordersReducer
    // product: selectedProductsReducer,
});
export default reducers;
