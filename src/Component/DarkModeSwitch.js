import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {Link} from 'react-router-dom';

import {IconButton,useColorMode } from "@chakra-ui/react";
import {FaSun,FaMoon} from 'react-icons/fa';


const DarkModeSwitch = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const {colorMode , toggleColorMode}=useColorMode();
  let iconStyles = { color: "black" };
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Interview Schedular
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Text>Docs</Text>
        <Text>Examples</Text>
        <Text>Blog</Text>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
      <Link to="/add">
            <Button
                variant="outline"
                _hover={{ bg: "teal.700", borderColor: "teal.700" }}
                >
                Add Contact
            </Button>
      </Link>
      <IconButton mx="8" icon={colorMode==='light'?<FaSun style={iconStyles}/>:<FaMoon/> } isRound='true' size='lg' alignSelf='flex-end' onClick={toggleColorMode}/>
      </Box>
    </Flex>
  );
};

export default DarkModeSwitch;
