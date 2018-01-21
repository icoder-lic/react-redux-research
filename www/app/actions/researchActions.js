//异步请求
export const loadServerData = () => async (dispatch) =>{
    var {A, B, C, D, E} = await fetch("/jieguo").then(data=>data.json());
    dispatch({"type":"LOAD",A,B,C,D,E})
}
//异步请求 投票
export const tp = (n) => async (dispatch) =>{
    var {A, B, C, D, E} = await fetch("/change/"+n).then(data=>data.json());
    dispatch({"type":"LOAD",A,B,C,D,E});
}