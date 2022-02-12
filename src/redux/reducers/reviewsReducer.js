const intialState = {
    reviews: [],
};

export const reviewsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_REVIEWS':
            return { ...state, reviews: payload };
        default:
            return state;
    }
};