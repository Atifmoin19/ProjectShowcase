import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const titleName = "ShowCase.io";
  const navLinks = [
    { title: "Projects", link: "#" },
    { title: "About", link: "#" },
    { title: "Contact", link: "#" },
  ];
  return (
    <Flex
      w={"100%"}
      backdropFilter={"blur(10px)"}
      bg={"#ffffff"}
      zIndex={99999999}
      position={"fixed"}
      top={0}
      left={0}
      alignItems={"center"}
      shadow={"md"}
      p={"1rem 2rem"}
      justifyContent={"space-between"}
    >
      <Flex gap={"1px"}>
        {titleName.split("").map((item, idx) => {
          return (
            <>
              <Flex
                key={idx}
                as={motion.div}
                initial={{
                  y: "-100%",
                  opacity: 0,
                }}
                whileInView={{
                  y: "0%",
                  opacity: 1,
                  transition: { delay: idx * 0.1 },
                }}
              >
                <Text
                  textTransform={"uppercase"}
                  fontWeight={"bold"}
                  textShadow={"sm"}
                >
                  {item}
                </Text>
              </Flex>
            </>
          );
        })}
      </Flex>
      <Flex gap={"1rem"}>
        {navLinks.map((link, idx) => {
          return (
            <Text
              key={idx}
              id={link.title}
              textTransform={"uppercase"}
              cursor={"pointer"}
              fontSize={"sm"}
              className="hoverNav"
              letterSpacing={"2px"}
              borderBottom={"1px solid transparent"}
              transition={".4s"}
            >
              {link.title}
            </Text>
          );
        })}
      </Flex>
      <Flex
        w={"60px"}
        bg={"gray.500"}
        p={"1rem"}
        rounded={"full"}
        shadow={"md"}
      ></Flex>
    </Flex>
  );
};

export default NavBar;
