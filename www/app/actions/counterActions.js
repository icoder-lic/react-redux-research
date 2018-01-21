export const add = (n) => ({"type":"ADD", n})
//异步请求
export const addServer = () => async (dispatch) =>{
    const {result} = await fetch("/number").then(data=>data.json());
    dispatch({type : "ADD", n : result})
}