const intialState = {
    whats: [],
};

export const whatsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_WHATS':
            return { ...state, whats: payload };
        default:
            return state;
    }
};

