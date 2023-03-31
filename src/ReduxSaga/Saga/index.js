import { takeEvery,all, take } from "redux-saga/effects";
import * as ActionProduct from '../Constant/ProductConstant'
import { DeleteProduct, EditProduct, FindProduct, createProduct, handleProduct } from "./ProductSaga";
import * as ActionUser from '../Constant/UserConstant'
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";

function* watchAll(){
    yield all([
        takeEvery(ActionProduct.GET_PRODUCT_REQUEST,handleProduct),
        takeEvery(ActionProduct.ADD_PRODUCT_REQUEST,createProduct),
        takeEvery(ActionProduct.FIND_PRODUCT_REQUEST,FindProduct),
        takeEvery(ActionProduct.EDIT_PRODUCT_REQUEST,EditProduct),
        takeEvery(ActionProduct.DEL_PRODUCT_REQUEST,DeleteProduct),
        takeEvery(ActionUser.SIGNIN_REQUEST,handleSignin),
        takeEvery(ActionUser.SIGNUP_REQUEST,handleSignup),
        takeEvery(ActionUser.SIGNOUT_REQUEST,handleSignout)
    ])
}

export default watchAll