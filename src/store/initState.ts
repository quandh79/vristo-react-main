interface State {
    isLoading: boolean;
    token: string | null;
}

const INIT_STATE: State = {
    isLoading: false,
    token: null,
};

export default INIT_STATE;
