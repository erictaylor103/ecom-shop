export const addDecimals = (num) =>{
    return Number(num.toFixed(2));
}

export const updateCart = (state) => {
    //Calculate items price
    state.itemsPrice = addDecimals(state.cartItems.reduce((accumulator, item) => accumulator + item.price * item.qty, 0));

    //Calculate shipping price (if order is over $100 then free, else $10 shipping)
    state.shippingPrice = addDecimals(state.itemsPrice >= 100 ? 0 : 10);

    //Calculate tax price (15% tax)
    state.taxPrice = addDecimals(state.itemsPrice * 0.15);

    //Calculate total price
    state.totalPrice = state.itemsPrice + state.shippingPrice + state.taxPrice;

    //save to local storage
    localStorage.setItem('cart', JSON.stringify(state));
}