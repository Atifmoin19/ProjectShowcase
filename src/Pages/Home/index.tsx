import React, { useRef } from "react";
import NavBar from "../../Components/Navbar";
import { Flex, Grid, Text } from "@chakra-ui/react";
import {
  frame,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cylender from "./Cylender";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";

const Home = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const { scrollYProgress: ContainerRefScrollY } = useScroll({
    target: containerRef,
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3 });

  const width = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 0.2],
    // Into these values:
    ["70%", "100%"]
  );

  const bottom = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0.2, 1],
    // Into these values:
    ["-20%", "140%"]
  );

  const mt = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0.7, 1],
    // Into these values:
    ["0%", "-1000%"]
  );
  const bottom2 = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0.4, 0.7],
    // Into these values:
    ["-30%", "140%"]
  );
  const rotate = useTransform(
    scrollYProgress2,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["0deg", "360deg"]
  );
  const rotate2 = useTransform(
    scrollYProgress3,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["360deg", "0deg"]
  );

  const ScrollYProgressContainer = useTransform(
    ContainerRefScrollY,
    // Map x from these values:
    [0.1, 0.3],
    // Into these values:
    ["0%", "120%"]
  );

  const ScrollYProgressContainerNegetive = useTransform(
    ContainerRefScrollY,
    // Map x from these values:
    [0.1, 0.3],
    // Into these values:
    ["0%", "-120%"]
  );

  return (
    <>
      <NavBar />
      <Flex
        w={"100%"}
        bg={"aliceblue"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
        padding={"6rem 0"}
      >
        <motion.div ref={ref} style={{ width }}>
          <Flex
            w={"800px"}
            mx={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            padding={"6rem"}
          >
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              illo dolor repellendus pariatur recusandae placeat nihil non, et
              quae excepturi hic, nisi veniam! Cupiditate provident commodi
              adipisci consectetur vitae repellendus aliquam eum, nisi
              doloremque est impedit aliquid soluta distinctio laudantium.
            </Text>
          </Flex>
          <Flex
            w={"100%"}
            minH={"340vh"}
            bg={"#fff"}
            shadow={"0 -10px 30px 1px rgba(0,0,0,0.2)"}
            roundedTop={"3xl"}
            direction={"column"}
            color={"#fff"}
          >
            {/* <Flex
              w={"100%"}
              height={"100vh"}
              position={"sticky"}
              top={"4rem"}
              justifyContent={"center"}
              alignItems={"start"}
              p={"1rem"}
              fontWeight={"bold"}
              fontSize={"4xl"}
              letterSpacing={"2px"}
              textTransform={"uppercase"}
            >
              <Text> Title 1</Text>
              <motion.div
                style={{ bottom: bottom, position: "absolute", left: 40 }}
              >
                <Flex w={"220px"} bg={"#fff"} h={"80px"} rounded={"md"}></Flex>
              </motion.div>
              <motion.div
                style={{ bottom: bottom2, position: "absolute", right: 40 }}
              >
                <Flex w={"220px"} bg={"#fff"} h={"80px"} rounded={"md"}></Flex>
              </motion.div>
            </Flex>
            <Flex
              w={"50%"}
              m={"auto"}
              height={"100vh"}
              gap={"1rem"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"sticky"}
              top={"2rem"}
              rounded={"md"}
              p={"1rem"}
            >
              <Flex
                w={"200px"}
                rounded={"md"}
                height={"70%"}
                bg={"#fff"}
              ></Flex>
              <Flex
                w={"200px"}
                rounded={"md"}
                height={"80%"}
                direction={"column"}
                overflow={"hidden"}
                gap={"1rem"}
                p={"1rem"}
                bg={"#fff"}
              >
                <motion.div style={{ marginTop: mt }}>
                  <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                </motion.div>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
                <Flex w="100%" minH={"200px"} bg={"yellow"}></Flex>
              </Flex>
              <Flex
                w={"200px"}
                rounded={"md"}
                height={"70%"}
                bg={"#fff"}
              ></Flex>
            </Flex> */}

            <Flex
              w={"100%"}
              ref={containerRef}
              // overflow={"hidden"}
              minH={"600vh"}
              justifyContent={"start"}
              alignItems={"start"}
              color={"#000"}
              roundedTop={"3xl"}
              direction={"column"}
              bg="#000000f0"
            >
              <motion.div
                style={{
                  width: "100%",
                  height: "50vh",
                  overflow: "hidden",
                  top: 0,
                  zIndex: 9999,
                  position: "sticky",
                  y: ScrollYProgressContainerNegetive,
                }}
              >
                <Flex
                  bg={"#fff"}
                  w={"100%"}
                  roundedTop={"3xl"}
                  height={"100%"}
                  shadow="0,0,0,rgba(0,0,0,0.3)"
                  justifyContent={"center"}
                  alignItems={"end"}
                  fontSize={"9xl"}
                >
                  <Text mb={"-6rem"}>CONTAINER</Text>
                </Flex>
              </motion.div>
              <motion.div
                style={{
                  zIndex: 9999,
                  width: "100%",
                  height: "50vh",
                  overflow: "hidden",
                  top: "50vh",
                  position: "sticky",
                  y: ScrollYProgressContainer,
                }}
              >
                <Flex
                  bg={"#fff"}
                  w={"100%"}
                  height={"100%"}
                  justifyContent={"center"}
                  alignItems={"start"}
                  fontSize={"9xl"}
                >
                  <Text mt={"-6rem"}>CONTAINER</Text>
                </Flex>
              </motion.div>
              <Flex
                w={"100%"}
                height={"100vh"}
                justifyContent={"space-between"}
                mt={"40vh"}
                alignItems={"center"}
              >
                <Flex
                  w={"40%"}
                  height={"100%"}
                  justifyContent={"center"}
                  color={"#fff"}
                  p={"4rem"}
                  alignItems={"start"}
                  direction={"column"}
                >
                  <Text fontSize={"4xl"}>Title 2</Text>
                  <Text>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                    libero quis nam nostrum, totam fuga impedit optio suscipit
                    illo, eos inventore unde ratione maiores itaque, similique
                    ea ipsum debitis recusandae ipsa iure distinctio corrupti
                    sunt? Veniam mollitia eaque consequatur eos aspernatur
                    ipsum, assumenda laboriosam minus vitae magnam tempora harum
                    beatae.{" "}
                  </Text>
                </Flex>
                <Flex w={"60%"} height={"100%"}>
                  <Canvas camera={{ fov: 45 }}>
                    <ambientLight />

                    {/* <OrbitControls /> */}
                    <EffectComposer>
                      <Bloom
                        mipmapBlur
                        intensity={10}
                        luminanceThreshold={0.18}
                        luminanceSmoothing={0}
                      />
                      <ToneMapping adaptive />
                    </EffectComposer>
                    <Cylender />
                  </Canvas>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </motion.div>

        {/* <Grid
          w={"100%"}
          ref={ref2}
          gridTemplateColumns={"1fr 1fr"}
          //   position={"relative"}
          h={"800vh"}
        >
          <Flex direction={"column"} height={"100%"}>
            <Flex w={"100%"} height={"25%"}>
              <Text
                position={"sticky"}
                bg={"#fff"}
                top={"4rem"}
                p={"4rem"}
                h={"100vh"}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam nobis consequuntur perspiciatis iusto veniam facere
                maxime, ipsam voluptatum cum accusamus possimus eligendi
                molestias aut! Rerum, nihil. Eveniet officiis possimus ipsa
                nulla odio aliquam culpa, exercitationem maxime perspiciatis
                praesentium? Voluptates incidunt dicta at ipsam vitae placeat
                omnis praesentium quae corporis natus!
              </Text>
            </Flex>
            <Flex w={"100%"} height={"25%"}>
              <Text
                position={"sticky"}
                bg={"#fff"}
                top={"4rem"}
                p={"4rem"}
                h={"100vh"}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam nobis consequuntur perspiciatis iusto veniam facere
                maxime, ipsam voluptatum cum accusamus possimus eligendi
                molestias aut! Rerum, nihil. Eveniet officiis possimus ipsa
                nulla odio aliquam culpa, exercitationem maxime perspiciatis
                praesentium? Voluptates incidunt dicta at ipsam vitae placeat
                omnis praesentium quae corporis natus!
              </Text>
            </Flex>
            <Flex w={"100%"} height={"25%"}>
              <Text
                position={"sticky"}
                bg={"#fff"}
                top={"4rem"}
                p={"4rem"}
                h={"100vh"}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam nobis consequuntur perspiciatis iusto veniam facere
                maxime, ipsam voluptatum cum accusamus possimus eligendi
                molestias aut! Rerum, nihil. Eveniet officiis possimus ipsa
                nulla odio aliquam culpa, exercitationem maxime perspiciatis
                praesentium? Voluptates incidunt dicta at ipsam vitae placeat
                omnis praesentium quae corporis natus!
              </Text>
            </Flex>
            <Flex w={"100%"} height={"25%"}>
              <Text
                position={"sticky"}
                bg={"#fff"}
                top={"4rem"}
                p={"4rem"}
                h={"100vh"}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aperiam nobis consequuntur perspiciatis iusto veniam facere
                maxime, ipsam voluptatum cum accusamus possimus eligendi
                molestias aut! Rerum, nihil. Eveniet officiis possimus ipsa
                nulla odio aliquam culpa, exercitationem maxime perspiciatis
                praesentium? Voluptates incidunt dicta at ipsam vitae placeat
                omnis praesentium quae corporis natus!
              </Text>
            </Flex>
          </Flex>

          <Flex
            w={"100%"}
            h={"100vh"}
            position={"sticky"}
            justifyContent={"center"}
            alignItems={"center"}
            top={"4rem"}
            p={"4rem"}
          >
            <motion.div style={{ rotate: rotate }}>
              <Flex
                w={"400px"}
                height={"400px"}
                bg={"yellow"}
                shadow={"inset 0 0 10px rgba(0,0,0,0.4)"}
              ></Flex>
            </motion.div>
          </Flex>
        </Grid> */}
        {/* <Grid
          w={"100%"}
          ref={ref3}
          gridTemplateColumns={"1fr 1fr"}
          //   position={"relative"}
          h={"300vh"}
        >
          <Flex
            w={"100%"}
            h={"100vh"}
            position={"sticky"}
            justifyContent={"center"}
            alignItems={"center"}
            top={"4rem"}
            p={"4rem"}
          >
            <motion.div style={{ rotate: rotate2 }}>
              <Flex
                w={"400px"}
                height={"400px"}
                bg={"yellow"}
                shadow={"inset 0 0 10px rgba(0,0,0,0.4)"}
              ></Flex>
            </motion.div>
          </Flex>
          <Flex
            w={"100%"}
            h={"100vh"}
            position={"sticky"}
            top={"4rem"}
            p={"4rem"}
          >
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              nobis consequuntur perspiciatis iusto veniam facere maxime, ipsam
              voluptatum cum accusamus possimus eligendi molestias aut! Rerum,
              nihil. Eveniet officiis possimus ipsa nulla odio aliquam culpa,
              exercitationem maxime perspiciatis praesentium? Voluptates
              incidunt dicta at ipsam vitae placeat omnis praesentium quae
              corporis natus!
            </Text>
          </Flex>
        </Grid> */}
      </Flex>

      {/* <Flex
        w={"100%"}
        height={"100vh"}
        bg={"#fff"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex
          w={"400px"}
          height={"200px"}
          justifyContent={"center"}
          alignItems={"center"}
          bg={"gray.100"}
          rounded={"md"}
          overflow={"hidden"}
          padding={".3rem"}
          position={"relative"}
        >
          <Flex
            className="conic"
            zIndex={1}
            position={"absolute"}
            top={"-20%"}
            left={"50%"}
          ></Flex>
          <Flex
            zIndex={2}
            w={"100%"}
            height={"100%"}
            rounded={"md"}
            bg={"green"}
          ></Flex>
        </Flex>
      </Flex> */}
    </>
  );
};

export default Home;
