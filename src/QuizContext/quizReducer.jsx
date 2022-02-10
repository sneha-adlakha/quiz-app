export const quizReducer=(state,{type,payload})=>
{
switch(type)
{
    case "CHANGEQUES":
    {
        const searchPrice=state.MoneyPyramid.find((item)=>item.id===payload)
        if(payload>1)
        {
            return {...state,questionNo:state.questionNo+1,priceMoney:searchPrice.amount}
        }
        return {...state,questionNo:state.questionNo+1,priceMoney:0}
    }
    case "TIMEOUT":{
        return {...state,timeout:true}
    }
    case "SETUSER":{
        return {...state,userName:payload}
    }
    default: 
    return state;
}
}