import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions';

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, mainColor: color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = amount + cartItem.amount;
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max;
          }
          return { ...cartItem, amount: newAmount };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload;
    const tempItemIndex = state.cart.findIndex((i) => i.id === id);
    const max = state.cart[tempItemIndex].max;
    let newAmount = state.cart[tempItemIndex].amount;
    if (value === 'inc') {
      newAmount = newAmount + 1;
    }
    if (value === 'dec') {
      newAmount = newAmount - 1;
    }
    if (newAmount < 1) {
      newAmount = 1;
    }
    if (newAmount > max) {
      newAmount = max;
    }
    state.cart[tempItemIndex].amount = newAmount;
    return { ...state, cart: [...state.cart] };
  }

  if (action.type === REMOVE_CART_ITEM) {
    const tempCart = state.cart.filter((i) => i.id !== action.payload);
    return { ...state, cart: tempCart };
  }

  // if (action.type === REMOVE_CART_ITEM) {
  //   const { id } = action.payload;
  //   const tempItemIndex = state.cart.findIndex((i) => i.id === id);
  //   const tempItem = state.cart.at(tempItemIndex);
  //   let amount = tempItem.amount;
  //   amount = state.total_items - amount;
  //   state.cart.splice(tempItemIndex, 1);
  //   return { ...state, total_items: amount, cart: [...state.cart] };
  // }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_amount, total_items } = state.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_amount += amount * price;
        return total;
      },
      {
        total_items: 0,
        total_amount: 0,
      }
    );
    return { ...state, total_amount, total_items };
  }

  // if (action.type === COUNT_CART_TOTALS) {
  //   const { cart } = state;
  //   let price = 0;
  //   let quantity = 0;
  //   cart.forEach((i) => {
  //     quantity += i.amount;
  //     price += i.amount * i.price;
  //   });
  //   return { ...state, total_items: quantity, total_amount: price };
  // }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
