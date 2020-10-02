import { Flex, useTheme } from "@chakra-ui/core";
import { keyframes } from "@emotion/core";
import React from "react";
import Chat from "./Chat";

const introAnimation = keyframes({
  from: {
    transform: "translateY(200px)",
    opacity: 0,
  },
  to: {
    transform: "translateY(0)",
    opacity: 1,
  },
});

const Schwurbler = (props) => {
  const theme = useTheme();

  return (
    /* Wrapper */
    <Flex
      w="100%"
      margin="auto"
      bg="gray.100"
      h="100vh"
      direction="column"
      overflow="hidden"
    >
      {/* Chat Container */}
      <Flex
        w={theme.breakpoints.sm}
        h="100%"
        m="auto"
        flexGrow="1"
        animation={`1s ${introAnimation}`}
      >
        <Chat />
      </Flex>
    </Flex>
  );
};

export default Schwurbler;
