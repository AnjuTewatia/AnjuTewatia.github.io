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
  const URL =
    "https://drive.google.com/file/d/1Us6dhEC97HcvpToI1Aat-CMnIo1sVjvQ/view?usp=share_link";

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
                    <Text fontWeight={"medium"} color="white" >
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
                    <Text fontWeight={"medium"} color="white" >
                      {" "}
                      SKILLS{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="tool" spy={true} offset={-50} smooth={true}>
                    <Text fontWeight={"medium"} color="white" >
                      {" "}
                      TOOLS{" "}
                    </Text>
                  </Link>
                </li>
                <li>
                  <Link to="project" offset={-100} spy={true} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      PROJECTS{" "}
                    </Text>
                  </Link>
                </li>

                <li>
                  <Link to="contact" offset={-100} spy={true} smooth={true}>
                    <Text fontWeight={"medium"} color="white">
                      CONTACT US{" "}
                    </Text>
                  </Link>
                </li>

               
 


                
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
                  style={{ color: "black", border: "none" ,textDecoration:"none"}}
                  onClick={() => window.open(URL, "_blank")}
                  href="fp06_350-Anju-Tewatia-Resume.pdf"
                  download="fp06_350-Anju-Tewatia-Resume.pdf"
                  // className="btn"
                  target="_blank"
                  id="gandabtn"
                >
                  RESUME
                </a>{" "}
              </Text>





              </ul>
            </Box>
          </Hide>
          {/* <Box> */}

          {/* </Box> */}

          <Show below="md">
            <Sidebar />
          </Show>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
