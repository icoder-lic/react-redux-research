const dataObj = {
    A : 0,
    B : 0,
    C : 0,
    D : 0,
    E : 0
}
export default (state = dataObj,action) => {
    if(action.type == "LOAD"){
        return {
            ...state,
            A : action.A,
            B : action.B,
            C : action.C,
            D : action.D,
            E : action.E
        }
    }
    return state;
}