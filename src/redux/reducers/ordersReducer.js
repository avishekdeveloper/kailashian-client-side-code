const initialState = {
    orders: [],
};

export const ordersReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_ORDERS':
            return { ...state, orders: payload }
        default:
            return state;
    }
}