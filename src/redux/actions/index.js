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
export const setBlogs = (payload) => {
    return {
        type: 'SET_BLOGS',
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