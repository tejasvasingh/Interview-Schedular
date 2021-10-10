import React from 'react';
import {Box, Heading } from '@chakra-ui/react';
import { HStack ,Text,IconButton,Spacer} from '@chakra-ui/react';
import {FaTrash,FaEdit,FaArrowDown,FaArrowUp,FaMailBulk,FaPhoneSquareAlt,FaCalendarAlt,FaClock,FaUserAlt} from "react-icons/fa";
import { MdDone,MdDoneAll } from "react-icons/md";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Portal,
    Button
  } from "@chakra-ui/react"
import {
    Tag,
    TagLabel,
} from "@chakra-ui/react"
class Detailcomp extends React.Component{
    constructor(){
        super();
        this.state={
            toggle:false,
        }
    }
    onFire(){
        this.setState({
            toggle:!this.state.toggle,
        })
    }
    onDel(email){
        this.props.delete(email);//calling dispather
        toast.success("Deleted Sucusfully",{position :toast.POSITION.BOTTOM_CENTER});
    }
    trigger(email){
        this.props.trig(email);
    }
    
    render(){
        const {toggle} = this.state;
        return(
            <Box>
                <HStack >
                    <Heading size="lg">{this.props.name}</Heading> 
                    <Spacer/>  
                    {
                        this.props.status ? <Tag size="md"  variant="outline" colorScheme="red" >
                        <TagLabel>Completed</TagLabel>
                    </Tag>:<Tag size="md"  variant="outline" colorScheme="green">
                        <TagLabel>Upcoming</TagLabel>
                    </Tag>
                    }
                    <IconButton isRound="true"  icon={this.props.status?<MdDoneAll/>:<MdDone/>} onClick={()=>{this.trigger(this.props.email)}}/>
                    <Link to={`/edit/${this.props.email}`} ><IconButton isRound="true"  icon={<FaEdit/>} /></Link>

                    <Popover>
                    <PopoverTrigger>
                        <IconButton isRound="true"  icon={<FaTrash/>}/>
                        <Button  id="clickme"> Ayush</Button>
                    </PopoverTrigger>
                    <Portal>
                        <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Are You Sure Want To Delete This Candidate!!</PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                            <Button colorScheme="red" onClick={()=>{this.onDel(this.props.email)}}>Delete</Button>
                        </PopoverBody>
                        {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                        </PopoverContent>
                    </Portal>
                    </Popover>
                    <IconButton id="
                    " isRound="true"  icon={toggle?<FaArrowUp/>:<FaArrowDown/>} 
                        onClick={()=>{this.onFire()}}
                      />
                </HStack>
                {
                    toggle ?  <Box>
                        <HStack my={2} border="1px" borderColor="gray.200">
                            <IconButton  icon={<FaMailBulk/>} />
                            <Text fontSize="xl">{this.props.email}</Text>
                        </HStack>

                        <HStack my={2} border="1px" borderColor="gray.200">
                            <IconButton  icon={<FaPhoneSquareAlt/>} />
                            <Text fontSize="xl">{this.props.number}</Text>
                        </HStack>
                        <HStack my={2} border="1px" borderColor="gray.200">
                            <IconButton  icon={<FaClock/>} />
                            <Text fontSize="xl">{`${this.props.time} O'clock`}</Text>
                        </HStack>
                        <HStack my={2} border="1px" borderColor="gray.200">
                            <IconButton  icon={<FaCalendarAlt/>} />
                            <Text fontSize="xl">{`${this.props.date}`}</Text>
                        </HStack>
                        <HStack my={2} border="1px" borderColor="gray.200">
                            <IconButton  icon={<FaUserAlt/>} />
                            <Text fontSize="xl">{this.props.intervew}</Text>
                        </HStack>
                    </Box> :null
                }
            </Box>
        )
    }
}

export default Detailcomp;