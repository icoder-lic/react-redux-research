export default (state = {"a":100},action) => {
    if(action.type == "ADD"){
        return {
            ...state,
            a : state.a + action.n
        }
    }
    return state;
}