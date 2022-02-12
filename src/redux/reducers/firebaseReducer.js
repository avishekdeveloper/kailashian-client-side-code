const intialState = {
    firebase: {},
};

export const firebaseReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'FIREBASE':
            return { ...state, firebase: payload };
        default:
            return state;
    }
};

