import React from 'react'
import {Box , Heading, Image, SimpleGrid , Button, Link,Flex} from "@chakra-ui/react";
import {BsGithub,BsLinkedin} from "react-icons/bs"
// import CV from "../assets/Anju-Tewatia-Resume.pdf"
import Anju from "../assets/Anju.png"


const Home = () => {
  const URL="https://drive.google.com/file/d/1Us6dhEC97HcvpToI1Aat-CMnIo1sVjvQ/view?usp=share_link"
  return (
    <Box h={{base:"auto",md:"70vh"}} id="home">
      <SimpleGrid columns={{sm: 1, md: 2}} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[4, 8, 14, 20]} textAlign={{ md:"left"}} spacing={50} mt={"25px"}>
          <Heading sixe="xl" mt={3} ml={50}>Hello, World!</Heading>
          <Heading size="xl" mt={4} ml={50}>I am Anju Tewatia</Heading>
          <Heading size='md' mt={3} ml={50}>FULL STACK WEB DEVELOPER</Heading>
          <Button bg="white" mt={5} ml={14} ><a style={{border:"none"}} onClick={()=>window.open(URL,"_blank")} href= "fp06_350-Anju-Tewatia-Resume.pdf" download="fp06_350-Anju-Tewatia-Resume.pdf" className="btn" target="_blank">
        Download CV
      </a>  </Button>
         
        </Box>
        <Box align="center" p={10} borderRadius={50}>
           <Image  mt={"20px"} width={"80%"} borderRadius={50} src={Anju} alt="anju tewatia"/>
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default Home