const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'add':
            return state + 1;
        case 'remove':
            return state - 1;
        case 'addten':
            return state + 10;
        case 'removeten':
            return state - 10;
        case 'reset':
            return 0;
        default:
            return state;
    }
}

export default counterReducer;