import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items:[],
    totalAmount:0
};


const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        //if the item parts of the cart?
        const existingCartItemIndex = state.items.findIndex(itm => itm.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];
      
        let updatedItems;

        //if item is already part of item array
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            //upadte immutably
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            //item add as first time        
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.items.findIndex(itm => itm.id === action.id);

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        //last item in the cart wanted to be removed
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            //item amount > 1, keep item in the array cart, decrease amount
            const updateItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updateItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };

    }
    return defaultCartState;
};


const CartProvider = (props) => {

    const[cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD_ITEM",
            item: item
        });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            id: id
        });
    };

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;