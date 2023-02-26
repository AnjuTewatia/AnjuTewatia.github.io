import React from 'react';
import {Flex,Box,Text,HStack,Button,Show, Menu,
  MenuButton,
  MenuList,
  MenuItem,Portal,Link} from "@chakra-ui/react";
import './Navbar.css';
import {HamburgerIcon} from "@chakra-ui/icons";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Link as Rlink}  from "react-scroll";
// import {CV} from "../assets/Anju-Tewatia-Resume.pdf"


const link = [
  { id : "home",
    title: "Home"
  },
  { id : "about",
    title: "About Me"
  },
  { id : "skill",
    title: "Skills"
  },
  { id : "project",
    title: "Project"
  },
  { id : "contact",
    title: "Contact"
  
  }
];

const navbar = () => {
  const URL="https://drive.google.com/file/d/1X_l9mqOUxG-x716O5b0CF8bl-wB00ptK/view"

  return (
    <div className="navbar">
      <Box width="100%" color="white">
      <Flex justifyContent="space-evenly" >
    <Box  textAlign="center" >
      <Text  fontSize="3xl" >
       Anju 
      </Text>
    </Box> 
    <Show above='md'>
    <HStack className='link-stack' fontSize="3xl">
    {link.map((e) => (
        <Rlink key={e.id} activeClass="active" to={e.id} spy={true} smooth={true} duration={100}>{e.title}</Rlink>
      ))}
    </HStack>
    </Show>
    <Show below='md'>
    <Menu>
  <MenuButton><HamburgerIcon boxSize="3em"/></MenuButton>
  <Portal>
    <MenuList fontSize="1xl">
    {link.map((e) => (
      <MenuItem key={e.id}>
      <Rlink activeClass="active" to={e.id} spy={true} smooth={true} duration={1500}>{e.title}</Rlink>
      </MenuItem>
      ))}
    </MenuList>

   
  </Portal>
</Menu>

    </Show>
   
    
 
    
    
   
  </Flex>

      </Box>
      
    </div>
  
  )
}

export default navbar