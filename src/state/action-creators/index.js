export const depositMoney = (amount) => {
    console.log(amount, "add");
    return (dispatch) => {
        dispatch({
            type: "deposit",
            payload: amount
        });
    }
}

export const withdrawMoney = (amount) => {
    console.log(amount, "less");
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: amount
        });
    }
}