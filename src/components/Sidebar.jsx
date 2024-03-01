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
  const URL =
    "https://drive.google.com/file/d/1Us6dhEC97HcvpToI1Aat-CMnIo1sVjvQ/view?usp=share_link";
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
              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="home"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        HOME
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="about"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        ABOUT
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="skill"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        SKILLS
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="tool"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        TOOLS
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="project"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        PROJECTS
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              <Box className={styles.list}>
                <ul>
                  <li>
                    <Link
                      onClick={onClose}
                      activeClass="active"
                      to="contact"
                      offset={-55}
                      spy={true}
                      smooth={true}
                    >
                      <Text fontWeight={"medium"} color="black">
                        CONTACT US
                      </Text>
                    </Link>
                  </li>
                </ul>
              </Box>

              {/* <Button mt={5}>
                <a
                  style={{ border: "none" }}
                  onClick={() => window.open(URL, "_blank")}
                  href="fp06_350-Anju-Tewatia-Resume.pdf"
                  download="fp06_350-Anju-Tewatia-Resume.pdf"
                  className="btn"
                  target="_blank"
                >
                  Download CV
                </a>{" "}
              </Button> */}

              <Text
                className="btns"
                padding={"none"}
                mr={10}
                mb={"3px"}
                cursor={"pointer"}
                backgroundColor="none"
                border="none"
              >
                <a
                  style={{ color: "black", border: "none" }}
                  onClick={() => window.open(URL, "_blank")}
                  href="fp06_350-Anju-Tewatia-Resume.pdf"
                  download="fp06_350-Anju-Tewatia-Resume.pdf"
                  // className="btn"
                  target="_blank"
                >
                  RESUME
                </a>{" "}
              </Text>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Flex columnGap={11} justifyContent="space-around"></Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
