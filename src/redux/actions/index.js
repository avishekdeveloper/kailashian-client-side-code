export const firebase = (payload) => {
    return {
        type: 'FIREBASE',
        payload: payload,
    };
};
export const user = (payload) => {
    return {
        type: 'USER',
        payload: payload,
    };
};
export const setWhats = (payload) => {
    return {
        type: 'SET_WHATS',
        payload: payload,
    };
};

export const setReviews = (payload) => {
    return {
        type: 'SET_REVIEWS',
        payload: payload,
    };
};

export const setOrders = (payload) => {
    return {
        type: 'SET_ORDERS',
        payload: payload,
    };
};