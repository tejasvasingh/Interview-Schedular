import React from "react";
import {Box,Button,Flex, FormControl, FormLabel, Heading, Input} from '@chakra-ui/react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import { compose } from "redux";
import {toast} from 'react-toastify';
import {editContact} from '../Redux/Actions/action';

class EditContact extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            number:null,
            interviewer:"",
            timing:"",
            date:"",
        }
    }
    display(e){
        if(this.state.name==="" || this.state.email==="" || this.state.phone==="" ||this.state.intrvr_name==="" || this.state.time==="" ||this.state.date===""){
            toast.error("Please Fill All Details");
            return;
        }
        const em=this.state.email;
        if(!em.includes('@')){
            toast.error("Email must contain '@' in it");
            return;
        }
        else if(!em.includes('@gmail.com') || em.includes(" ")){
            toast.error("Invalid  Email");
            return;
        }
        const {data}=this.props;
        const temp=data.filter(
            (row)=>row.email === em
        );
        if(temp.length>0){
            toast.error("Email Alredy exist");
            return;
        }
        for(var i=0;i<data.length;i++){
            if(data[i].date===this.state.date && data[i].timing===this.state.timing && data[i].interviewer===this.state.interviewer){
                toast.error("This Slot Is Booked !!");
                return;
            }
        }
        if(this.state.number.length!==10){
            toast.error("Phone Number Must Contains 10 Digits");
            return;
        }
        var t=this.state.timing;
        var tint=parseInt(t.substr(0,2));
        if(tint< 8 || tint >21){
            toast.error('Timing Should Be In Between : 08:00 - 12:00 am and 12:00 - 9:00 pm ');
            return;
        }

        const res={prev_email:this.props.match.params.email,edited_data:{...this.state,status:e}};
        this.props.change(res);
        console.log(this.state);
        toast.success("Successfully Edited !!",{position :toast.POSITION.BOTTOM_CENTER})
        this.props.history.push("/");
    }
    render(){
        let x=this.props.match.params.email;
        const {data}=this.props;
        const temp=data.filter(
            (row)=>row.email === x
        );
        //console.log(temp);
        var status=temp[0].status;
        var name=temp[0].name;
        var email=temp[0].email;
        var number=temp[0].number;
        var interviewer=temp[0].interviewer;
        var timing=temp[0].timing;
        var date=temp[0].date;
        return(
            <Flex minHeight='90vh' width='full'  justifyContent='center' mt='10'>
                <Box borderWidth={1} px={4} width='full' maxWidth='500px' borderRadius={4} textAlign="center" boxShadow='lg'>
                    <Box textAlign="center">
                        <Heading fontWeight='extrabold' size='2xl' bgGradient="linear(to-r,red.500,red.300,blue.500)" bgClip='text'>Edit Candidate</Heading>
                    </Box>
                    <Box my={8}>
                        <form>
                            <FormControl my={4} isRequired>
                                <FormLabel>Name</FormLabel>

                                <Input type='text' placeholder={name} 
                                    value={this.state.name} 
                                    onChange={(e)=>{this.setState({name:e.target.value})}}
                                />
                                <FormLabel>Email Adddress</FormLabel>
                                <Input type="email" placeholder={email} 
                                    value={this.state.email} 
                                    onChange={(e)=>{this.setState({email:e.target.value})}}
                                 /> 
                                <FormLabel>Phone Number</FormLabel>
                                <Input type='text' placeholder={number} 
                                     value={this.state.number} 
                                    onChange={(e)=>{this.setState({number:e.target.value})}}
                                />
                                <FormLabel>Interviewer Name</FormLabel>
                                <Input type='text' placeholder={interviewer} 
                                     value={this.state.interviewer} 
                                    onChange={(e)=>{this.setState({interviewer:e.target.value})}}
                                />
                                <FormLabel>Time Of Interview</FormLabel>
                                <Input type="time" placeholder={timing} 
                                     value={this.state.timing} 
                                    onChange={(e)=>{this.setState({timing:e.target.value})}}
                                />
                                <FormLabel>Date Of Interview</FormLabel>
                                <Input type='date' placeholder={date} 
                                     value={this.state.date} 
                                    onChange={(e)=>{this.setState({date:e.target.value})}}
                                />
                                
                            </FormControl>
                            {/* <Stack insetInline justifyContent='space-between' mt={4}>
                                <HStack>
                                    <Checkbox>Remember Me</Checkbox>
                                </HStack>
                            </Stack> */}
                            <Button width='full' mt={4} colorScheme="teal" variant="solid" onClick={()=>{this.display(status)}}>
                                Edit component
                            </Button>
                        </form>
                    </Box>
                    </Box>
                </Flex>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        data:state,
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        change:(data)=>{dispatch(editContact(data))}
    }
}
export default compose(withRouter,connect(mapStateToProps,mapDispatchToProps))(EditContact);