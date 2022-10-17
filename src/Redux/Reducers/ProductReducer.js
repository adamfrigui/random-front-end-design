 
import { ActionTypes } from "../Constants/ActionTypes";




const initialState = {
    products: [],
    cart: [],
    currentItem: null,
};

//{type , payload} destructering for action
export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const SelectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};

export const ShopReducer = (state = initialState.cart, { type, payload }) => {
    const product = payload;
    switch (type) {
        case ActionTypes.ADD_TO_CART:
        const exist =state.find((x)=>x.id===product.id);
        if (exist) {
            return state.map((x)=>x.id===product.id ?{...x,qty:x.qty +1} :x)
        }else{
            const product = payload;
            return[...state,{...product,qty:1}]
        }
        case ActionTypes.REMOVE_FROM_CART:
            const exist1 =state.find((x)=>x.id === product.id);
            if(exist1.qty === 1){
                return state.filter((x)=>x.id !== exist1.id);
            }else{

                return  state.map((x)=>x.id===product.id ?{...x,qty:x.qty-1}:x)
            } 
            
        default:
            return state;
    }
};
