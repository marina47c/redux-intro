const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: ""
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "account/deposit":
            return { ...state, balance: state.balance + action.payload }
        case "accout/withdraw":
            return { ...state, balance: state.balance - action.payload }
        default:
            return state;
    }
}