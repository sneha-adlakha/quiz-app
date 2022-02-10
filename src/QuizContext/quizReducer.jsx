export const quizReducer=(state,{type,payload})=>
{
switch(type)
{
    case "CHANGEQUES":
    {
        return {...state,questionNo:state.questionNo+1}
    }
    case "TIMEOUT":{
        return {...state,timeout:true}
    }
    default: 
    return state;
}
}