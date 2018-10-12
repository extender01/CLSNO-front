

const testReducerDefaultState = [];

const testReducer = (state = testReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_TEST":
            return [...state, action.test];
        default:
            return state;
    }
};

export default testReducer;