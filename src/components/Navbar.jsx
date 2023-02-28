import React from "react";
import styles from "./Nav.module.css";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  Hide,
  Show,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const URL="https://drive.google.com/file/d/1Us6dhEC97HcvpToI1Aat-CMnIo1sVjvQ/view?usp=share_link"


  return (
    <>
      <Box className={styles.main}>
        <Box className={styles.left}>
          <Box className={styles.name}>
            <Flex>
              <span>
                <Link to="Navbar" spy={true} smooth={true}>
                  <Text cursor="pointer">Anju</Text>
                </Link>
              </span>
              <span>
                <Link to="Navbar" spy={true} smooth={true}>
                  <Text cursor="pointer" color={"#Red "}>
                    Tewatia
                  </Text>
                </Link>
              </span>
            </Flex>
          </Box>
        </Box>
        <Box className={styles.right}>
          <Hide below="md">
            <Box className={styles.list}>
              <ul>
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    offset={-55}
                    spy={true}
                    smooth={true}
                  >
                    <Text fontWeight={"medium"} color="white">
                      HOME
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} offset={-50}>
                    <Text fontWeight={"medium"} color="white">
                      ABOUT{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="skill" spy={true} offset={-50} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      {" "}
                      SKILLS{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="tool" spy={true} offset={-50} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      {" "}
                TOOLS{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="project" offset={-175} spy={true} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      PROJECTS{" "}
                    </Text>
                  </Link>
                </li>
              </ul>
            </Box>
          </Hide>

          <Hide below="sm">
            <Link to="contact" spy={true} smooth={true}>
              <Button
                colorScheme={"#67dcfa"}
                color="white"
                size={"sm"}
                mt={1.5}
                fontWeight={"medium"}
                outline="none"
                _focus={{ outline: "none" }}
              >
                <Text color="white">CONTACT ME </Text>{" "}
              </Button>
            </Link>
          </Hide>
          <Hide below="sm">
          <Button bg="white" mt={5} ml={14} ><a style={{border:"none"}} onClick={()=>window.open(URL,"_blank")} href= "fp06_350-Anju-Tewatia-Resume.pdf" download="fp06_350-Anju-Tewatia-Resume.pdf" className="btn" target="_blank">
       Resume
      </a>  </Button>
          </Hide>

          <Show below="md">
            <Sidebar />
          </Show>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
