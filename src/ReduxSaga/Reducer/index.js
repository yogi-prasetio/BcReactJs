import { combineReducers } from "redux";
import ProductReduce from "./ProductReducer";
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
    productState: ProductReduce,
    userState: UserReducer
})

export default rootReducer