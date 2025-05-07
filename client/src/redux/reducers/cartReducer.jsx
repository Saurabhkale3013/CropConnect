// import { ADD_TO_CART, DEC_QTY_IN_CART, INC_QTY_IN_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART } from "../constants";

// let initialState = [];

// export const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       return [...state, action.payload];
//     case  REMOVE_ALL_FROM_CART:
//       return [];
//     case REMOVE_FROM_CART:
//       const productToRemove = action.payload;
//       const updatedCart = state.filter((item) => item._id !== productToRemove);
//       return updatedCart;
//     case INC_QTY_IN_CART:
//       const productIdToIncQty = action.payload;
//       const updatedCartByIncQty = state.map((item) => {
//         // console.log(item);
//         if (item._id === productIdToIncQty && item.qty!==item.stocksLeft) {
//           return { ...item, qty: item.qty + 1, currentPrice: item.currentPrice + item.pricePerUnit};
//         }
//         return item;
//       });
//       return updatedCartByIncQty;
//     case DEC_QTY_IN_CART:
//       const productIdToDecQty = action.payload;
//       const updatedCartByDecQty = state.map((item) => {
//         // console.log(item);
//         if (item._id === productIdToDecQty && item.qty!==item.minQty) {
//           return { ...item, qty: item.qty - 1, currentPrice: item.currentPrice - item.pricePerUnit };
//         }
//         return item;
//       });
//       return updatedCartByDecQty;
//     default:
//       return state;
//   }
// };




import { ADD_TO_CART, DEC_QTY_IN_CART, INC_QTY_IN_CART, REMOVE_ALL_FROM_CART, REMOVE_FROM_CART } from "../constants";

// Initial cart state
let initialState = [];

/**
 * Cart reducer to manage the cart state.
 * 
 * @param {Array} state - Current state of the cart (default is an empty array).
 * @param {Object} action - Action dispatched by Redux.
 * @param {Object} action.payload - The payload for the action.
 * @param {string} action.type - Type of the action being dispatched.
 * @returns {Array} Updated state of the cart.
 */
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Expected payload: { _id: string, qty: number, currentPrice: number, pricePerUnit: number, stocksLeft: number }
      return [...state, action.payload];

    case REMOVE_ALL_FROM_CART:
      return [];

    case REMOVE_FROM_CART:
      const productToRemove = action.payload; // Expected payload: string (product _id)
      const updatedCart = state.filter((item) => item._id !== productToRemove);
      return updatedCart;

    case INC_QTY_IN_CART:
      const productIdToIncQty = action.payload; // Expected payload: string (product _id)
      const updatedCartByIncQty = state.map((item) => {
        if (item._id === productIdToIncQty && item.qty !== item.stocksLeft) {
          return { ...item, qty: item.qty + 1, currentPrice: item.currentPrice + item.pricePerUnit };
        }
        return item;
      });
      return updatedCartByIncQty;

    case DEC_QTY_IN_CART:
      const productIdToDecQty = action.payload; // Expected payload: string (product _id)
      const updatedCartByDecQty = state.map((item) => {
        if (item._id === productIdToDecQty && item.qty !== item.minQty) {
          return { ...item, qty: item.qty - 1, currentPrice: item.currentPrice - item.pricePerUnit };
        }
        return item;
      });
      return updatedCartByDecQty;

    default:
      return state;
  }
};
