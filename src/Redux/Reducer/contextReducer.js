const initialState=[
    {name:"Ayush Singh",email:"tejasvasingh.83@gmail.com",date:"2021-07-14",number:9161463059,timing:"09:00",interviewer:"snehalata",status:false},
    {name:"Ritu Singh",email:"ritu@gmail.com",date:"2021-08-23",number:9161789789,timing:"10:00",interviewer:"karan sharma",status:false},
    {name:"Alok Singh",email:"alok123@gmail.com",date:"2021-07-14",number:9161234876,timing:"09:00",interviewer:"snehalata",status:true},
];
const contextReducer = (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case "ADD_CANDIDTATE" :
            console.log(action.payload)
            return [...state,action.payload];
        case "DELETE_CONTACT":
            const res=state.filter(
                (row) =>row.email !== action.payload
            );
            return res;
        case "EDIT_CONTACT":
            var idx=null;
            state.forEach(
                (row,i)=>{
                    if(row.email===action.payload.prev_email){
                        idx=i;
                    }
                }
            )
            const ans=[...state];
            ans[idx]=action.payload.edited_data;
            return ans;
        case "EDIT_STATUS":
            console.log("ayush"+action.payload)
            var idx1=null;
            state.forEach(
                (row,i)=>{
                    if(row.email===action.payload){
                        idx1=i;
                    }
                }
            )
            const ans2=[...state];
            ans2[idx1].status=!ans2[idx1].status;
            return ans2;
        default:
            return state;
    }
}
export default contextReducer;