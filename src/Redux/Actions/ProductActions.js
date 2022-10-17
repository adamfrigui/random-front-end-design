import { ActionTypes } from "../Constants/ActionTypes"

export const SetProducts = (Products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: Products,
    }
}
export const SelectedProduct = (Product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: Product,
    }
}
export const removeSelectedProduct = (Product) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const addToCart = (Product) => {
    return {
        type: ActionTypes.ADD_TO_CART,
        payload:Product
    }
}
export const removeFromCart = (Product) => {
    return {
        type: ActionTypes.REMOVE_FROM_CART,
        payload: Product
    }
}

export const adjustQty = (itemID, value) => {
    return {
        type: ActionTypes.ADJUST_QTY,
        payload: { id: itemID, qty: value }
    }
}

export const loadCurrentItem = (itemID) => {
    return {
        type: ActionTypes.LOAD_CURRENT_ITEM,
        payload: { id: itemID }
    }
}