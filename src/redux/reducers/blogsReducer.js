const intialState = {
    blogs: [],
};

export const blogsReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case 'SET_BLOGS':
            return { ...state, blogs: payload };
        default:
            return state;
    }
};

