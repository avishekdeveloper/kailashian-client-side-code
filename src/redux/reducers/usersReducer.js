const intialState = {
    users: []
};

export const userReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'USER':
            return { ...state, firebase: payload };
        default:
            return state;
    }
};