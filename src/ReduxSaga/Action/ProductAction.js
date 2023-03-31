import * as ActionType from '../Constant/ProductConstant'

export const GetProductRequest = () => ({
    type: ActionType.GET_PRODUCT_REQUEST
})

export const GetProductSuccess = (payload) =>({
    type: ActionType.GET_PRODUCT_SUCCESS,
    payload
})

export const GetProductFailed = (payload) =>({
    type: ActionType.GET_PRODUCT_FAILED,
    payload
})

export const AddProductRequest = (payload) => ({
    type: ActionType.ADD_PRODUCT_REQUEST,
    payload
})

export const AddProductSuccess = (payload) => ({
    type: ActionType.ADD_PRODUCT_SUCCESS,
    payload
})

export const AddProductFailed = (payload) => ({
    type: ActionType.ADD_PRODUCT_FAILED,
    payload
})

export const EditProductRequest = (payload) =>({
    type: ActionType.EDIT_PRODUCT_REQUEST,
    payload
})

export const EditProductSuccess = (payload) =>({
    type: ActionType.EDIT_PRODUCT_SUCCESS,
    payload
})

export const EditProductFailed = (payload) =>({
    type: ActionType.EDIT_PRODUCT_FAILED,
    payload
})

export const DelProductRequest = (payload) =>({
    type:ActionType.DEL_PRODUCT_REQUEST,
    payload
})

export const DelProductSuccess = (payload) =>({
    type:ActionType.DEL_PRODUCT_SUCCESS,
    payload
})

export const DelProductFailed = (payload) =>({
    type:ActionType.DEL_PRODUCT_FAILED,
    payload
})

export const FindProductRequest = (payload) =>({
    type:ActionType.FIND_PRODUCT_REQUEST,
    payload
})

export const FindProductSuccess = (payload) =>({
    type:ActionType.FIND_PRODUCT_SUCCESS,
    payload
})

export const FindProductFailed = (payload) =>({
    type:ActionType.FIND_PRODUCT_FAILED,
    payload
})