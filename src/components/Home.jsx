import React from 'react'
import {Box , Heading, Image, SimpleGrid , Button, Link,Flex} from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"
// import CV from "../assets/Anju-Tewatia-Resume.pdf"
import Profile from "../assets/Profile.png"


const Home = () => {
  const URL="https://drive.google.com/file/d/1X_l9mqOUxG-x716O5b0CF8bl-wB00ptK/view"
  return (
    <Box h={{base:"auto",md:"70vh"}} id="home">
      <SimpleGrid columns={{sm: 1, md: 2}} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[4, 8, 14, 20]} textAlign={{ md:"left"}} spacing={50}>
          <Heading sixe="xl" mt={3} ml={50}>Hello, World!</Heading>
          <Heading size="xl" mt={4} ml={50}>I am Anju Tewatia</Heading>
          <Heading size='md' mt={3} ml={50}>FULL STACK WEB DEVELOPER</Heading>
          <Button bg="white" mt={5} ml={9} ><a style={{border:"none"}} onClick={()=>window.open(URL,"_blank")} href= "Anju-Tewatia-Resume.pdf" download="Anju-Tewatia-Resume.pdf" className="btn" target="_blank">
        Download CV
      </a>  </Button>
          <Box>
          <Flex mt={3} gap={5} ml={50}>
          <Link href='https://www.linkedin.com/in/anju-tewatia-0759b6246' isExternal>
          <BsLinkedin fontSize="2em" />
          </Link>
          <Link href='https://github.com/AnjuTewatia' isExternal>
          <BsGithub fontSize="2em"/>
          </Link> 
          </Flex> 
          </Box>
        </Box>
        <Box align="center" p={10} borderRadius={50}>
           <Image  borderRadius={10} src={Profile} alt="anju tewatia"/>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Home