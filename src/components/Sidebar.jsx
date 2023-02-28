import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Box,
    Flex,
    Text,
    IconButton,
  } from "@chakra-ui/react";
  import React from "react";
  import { HamburgerIcon, EmailIcon } from "@chakra-ui/icons";
  import { Link } from "react-scroll";
  // import {  FaGithub, FaLinkedin } from "react-icons/fa";
  import styles from "./Side.module.css";
  
  export default function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button size={"sm"} m="auto" right={3} onClick={onOpen}>
          <HamburgerIcon boxSize={4} />
        </Button>
        <Drawer
          width="100%"
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader backgroundColor="black" textDecoration="underline">
              <Flex gap={2}>
                <span>
                  <Text color={"teal"}>Anju</Text>
                </span>
  
                <Flex>
                  <span>
                    <Text color={"yellow"}>Tewatia</Text>
                  </span>
                </Flex>
              </Flex>
            </DrawerHeader>
  
            <DrawerBody bg="blackAlpha.200">
              <Box>
                <Box>
                  <Text
                    className={styles.text}
                    cursor="pointer"
                    fontSize={"large"}
                    fontWeight="semibold"
                    mt={4}
                    textColor={"teal"}
                  >
                    <Link onClick={onClose} to="home" spy={true} smooth={true}>
                      HOME
                    </Link>
                  </Text>
                </Box>
                <Box>
                  <Text
                    className={styles.text}
                    cursor="pointer"
                    fontSize={"large"}
                    fontWeight="semibold"
                    mt={4}
                    textColor={"teal"}
                  >
                    <Link
                      onClick={onClose}
                      to="about"
                      spy={true}
                      smooth={true}
                    >
                      About
                    </Link>
                  </Text>
                </Box>
                <Box>
                  <Text
                    className={styles.text}
                    cursor="pointer"
                    fontSize={"large"}
                    fontWeight="semibold"
                    mt={4}
                    textColor={"teal"}
                  >
                    <Link onClick={onClose} to="skill" spy={true} smooth={true}>
                      SKILLS
                    </Link>
                  </Text>
                </Box>
                <Box>
                  <Text
                    className={styles.text}
                    cursor="pointer"
                    fontSize={"large"}
                    fontWeight="semibold"
                    mt={4}
                    textColor={"teal"}
                  >
                    <Link
                      onClick={onClose}
                      to="project"
                      spy={true}
                      smooth={true}
                    >
                      PROJECTS
                    </Link>
                  </Text>
                </Box>
                <Box>
                  <Text
                    className={styles.text}
                    cursor="pointer"
                    fontSize={"large"}
                    fontWeight="semibold"
                    mt={4}
                    textColor={"teal"}
                  >
                    <Link onClick={onClose} to="contact" spy={true} smooth={true}>
                      CONTACT ME
                    </Link>
                  </Text>
                </Box>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Flex columnGap={11} justifyContent="space-around">
              
               
  

              </Flex>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  }