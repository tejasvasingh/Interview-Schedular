export const addContact=(data)=>{
    return{
        type:"ADD_CANDIDTATE",
        payload:data,
    }
}
export const deleteContact=(email)=>{
     return{
         type:"DELETE_CONTACT",
         payload:email,
     }
}
export const editContact=(data)=>{
    return{
        type:"EDIT_CONTACT",
        payload:data,
    }
}
export const editStatus=(email)=>{
    return{
        type:"EDIT_STATUS",
        payload:email,
    }
}