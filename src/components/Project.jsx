import React from 'react'
import "./project.css"
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  ListItem,
  List,
  ListIcon,
  Link  
} from '@chakra-ui/react';
import {SettingsIcon,ExternalLinkIcon} from "@chakra-ui/icons";
import IMG1 from "../assets/IMG1.jpg";
import IMG2 from "../assets/IMG2.jpg";
import IMG4 from "../assets/IMG4.png";


const project_data = [
  {  id:1,
    project_name : "Youtube-Clone",
    detail : "Youtube Clone where user can search any song and any movies.",
    creater : "This was a solo project Developed with 5 Days",
    image : IMG1,
    github : "https://github.com/AnjuTewatia/Youbtube_clone",
    deploy : "https://prismatic-stardust-06f7c7.netlify.app/",
    TechStack : "HTML | CSS | JAVASCRIPT "
 },
 {  id:2,
  project_name : "Big Basket",
  detail : 'Big Basket Online Shopping Faster on Info.Com. Make Inquiries.',
  creater : "A group project Developed within 5 days.",
  image : IMG2,
  github : "https://github.com/AnjuTewatia/abrupt-cough-2319",
  deploy : "https://fascinating-syrniki-299085.netlify.app/",
  TechStack : "HTML |CSS | JAVASCRIPT"
},
{  id:3,
  project_name : "Kindmeal.md",
  detail : "KindMeal's mission how you can easily play a role in saving precious lives, and money.",
  creater : "A group project Developed within 5 days. ",
  image : IMG4,
  github : "https://github.com/SCjadhav21/Project_Food_Hub/tree/main/my-app",
  deploy : "https://iridescent-biscochitos-61ac19.netlify.app/",
  TechStack : "Redux | React | Chakra UI"
}
];

const Project = () => {
  return (
    <Box mt={240} id="project">
      <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              >
              Projects
            </Text>
       </Heading>
      <Flex direction={'column'} gap={'30px'} mt='40px'>
      {
        project_data.map((project)=><Container key={project.id} maxW={'5xl'} border={'1px solid'} borderRadius="20px" borderColor={"gray.500"}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 18 }}
          direction={{ base: 'column', md: 'row' }}>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'auto'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                objectFit='cover'
                src={project.image}
              />
            </Box>
          </Flex>  
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: '2xl', sm: '3xl', lg: '5xl' }}>
              <Text
                as={'span'}
                textDecoration={'underline'}
                >
                {project.project_name}
              </Text>
            </Heading>
            <List spacing={3} color='gray.400'>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  {
                    project.detail
                  }
                </ListItem>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  {project.creater}
                </ListItem>
                <ListItem>
                  <ListIcon as={SettingsIcon} color='blue.400' fontSize={'xl'} />
                  TechStack:- {project.TechStack}
                </ListItem>
            </List>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'row', sm: 'row' }}>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.600'}
                _hover={{ bg: 'blue.500' }}>
                <Link href={project.deploy} isExternal>Deploy <ExternalLinkIcon/></Link>
              </Button>
              <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'blue'}
                bg={'blue.600'}
                _hover={{ bg: 'blue.500' }}>
                <Link href={project.github} isExternal>Github <ExternalLinkIcon/></Link>
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>)
      }
      </Flex>
    </Box>
  )
}

export default Project
