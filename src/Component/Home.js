
import React from "react";
import {Heading } from '@chakra-ui/react';
import {VStack}from '@chakra-ui/react';
import { StackDivider,Badge} from '@chakra-ui/react';
import Detail from './Detail';
import {connect} from 'react-redux';
import { Tabs,TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
class Home extends React.Component{
    render(){
        const {data} = this.props;
        //console.log(data);
        const undone=data.filter(
            (row) =>row.status === false
        );
        const done=data.filter(
            (row) =>row.status === true
        );
        return(
            <VStack p={8}>
                <Heading mg='8' my='5' fontWeight='extrabold' size='2xl' bgGradient="linear(to-r,red.500,red.300,blue.500)" bgClip='text'>
                    Candidate List
                </Heading>
                <VStack divider={<StackDivider/>}    width="100%" maxW={{base:'90vw' ,sm:'80vw' ,lg:'50vw' ,xl:'50vw'}} alignItems="st">
                    <Tabs isFitted variant="enclosed">
                        <TabList mb="1em">
                            <Tab>Upcoming</Tab>
                            <Tab>Completed</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <VStack divider={<StackDivider/>} borderColor='grey.100' borderWidth='2px'  borderRadius='lg' width="100%" maxW={{base:'90vw' ,sm:'80vw' ,lg:'50vw' ,xl:'50vw'}} alignItems="st">
                                {
                                    undone.length===0 ? <Badge variant="solid" colorScheme="purple" p='4' m='4' borderRadius='lg'>
                                                            No Candidate !!  
                                                        </Badge> : 
                                    undone.map((task,id)=>(
                                    <Detail status={task.status} key={id} name={task.name} email={task.email} number={task.number} date={task.date} time={task.timing} intervew={task.interviewer} /> 
                                    ))
                                }
                                </VStack>
                            </TabPanel>
                            <TabPanel>
                                <VStack divider={<StackDivider/>} borderColor='grey.100' borderWidth='2px'  borderRadius='lg' width="100%" maxW={{base:'90vw' ,sm:'80vw' ,lg:'50vw' ,xl:'50vw'}} alignItems="st">
                                {
                                    done.length===0 ? <Badge variant="solid" colorScheme="purple" p='4' m='4' borderRadius='lg'>
                                                            Empty !!  
                                                        </Badge> : 
                                    done.map((task,id)=>(
                                    <Detail status={task.status} key={id} name={task.name} email={task.email} number={task.number} date={task.date} time={task.timing} intervew={task.interviewer} /> 
                                    ))
                                }
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </VStack>
            </VStack> 
        )


        //console.log(data);
        // if(data.length===0){
        //     return(
        //         <VStack p={8}>
        //             <Heading mg='8' my='5' fontWeight='extrabold' size='2xl' bgGradient="linear(to-r,red.500,red.300,blue.500)" bgClip='text'>
        //                 Candidate List
        //             </Heading>
        //             <Badge variant="solid" colorScheme="purple" p='4' m='4' borderRadius='lg'>
        //                 No Candidate !!  
        //             </Badge>
        //         </VStack>
        //     );
        // }
        // return(
        //     <VStack p={8}>
        //         <Heading mg='8' my='5' fontWeight='extrabold' size='2xl' bgGradient="linear(to-r,red.500,red.300,blue.500)" bgClip='text'>
        //             Candidate List
        //         </Heading>
        //         <VStack divider={<StackDivider/>} borderColor='grey.100' borderWidth='2px'  borderRadius='lg' width="100%" maxW={{base:'90vw' ,sm:'80vw' ,lg:'50vw' ,xl:'40vw'}} alignItems="st">
                    // {
                    //     data.map((task,id)=>(
                    //        <Detail id={task.id} key={id} name={task.name} email={task.email} number={task.number} date={task.date} time={task.timing} intervew={task.interviewer} /> 
                    //     ))
                    // }
        //         </VStack>
        //     </VStack> 
        // )
    }
}

//to read from redux
const mapStateToProps =(state)=>{
    return{
        data:state,
    }
}
export default connect(mapStateToProps)(Home);