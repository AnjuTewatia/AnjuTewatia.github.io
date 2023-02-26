import React from 'react';
import { Box,
   Heading ,
   SimpleGrid ,
   Text ,
   Image
  } from '@chakra-ui/react';


const AboutMe = () => {

  return (
    
    <Box id="about" mt={120}>
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              About Me
            </Text>
       </Heading>
      <Box h={{base:"auto",md:"60vh"}}>
      <SimpleGrid columns={{sm: 1, md: 2}} justifyContent="space-around" mt={[0, 4, 6, 8]}>
        <Box p={[8, 12, 14, 20]} textAlign="justify">
          <Text fontSize='25px'>Hello, World! I am Anju Tewatia A Full stack Web developer, with 1200+ hours of coding experience, prectice 300+ hours of Data structure and algorithms.</Text>
          <Text fontSize='25px'>A self-motivated, hard-working, focused, and quick-learning full-stack web developer capable of writing production-ready code using MERN, JavaScript, HTML and CSS technologies, high adaptability to learn new technologies.</Text>
        </Box>
        <Box align="center" p={10}>
           <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBF8mV1DGdNfHHun8UBTTc8EqFHPtPIS03w&usqp=CAU" boxSize={{base:"250px" , md:"350px"}}/>
        </Box>
      </SimpleGrid>
      </Box>
    </Box>
  )
}

export default AboutMe