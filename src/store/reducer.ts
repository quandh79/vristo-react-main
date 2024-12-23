interface State {
    token: string | null;
    isLoading: boolean;
}

interface Action {
    type: string;
    payload?: any;  
}

const initialState: State = {
    token: null,
    isLoading: false,
};

const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
        case "AUTH_LOGIN":
            return {
                ...state,
                token: action.payload,
                isLoading: true,
            };
        case "SHOW_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "HIDE_LOADING":
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default reducer;
