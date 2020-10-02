import { Box, PseudoBox, Text } from "@chakra-ui/core";
import { keyframes } from "@emotion/core";
import React, { forwardRef } from "react";

const popInKeyframes = keyframes({
  from: {
    opacity: 0,
    transform: "scale(0)"
  },
  to: {
    opacity: 1,
    transform: "scale(1)"
  },
});

const ChatBubble = forwardRef(({ text }, ref) => {
  return (
    <PseudoBox
      ref={ref}
      bg="blue.500"
      borderRadius="lg"
      mt={2}
      p={4}
      pt={2}
      color="white"
      position="relative"
      w="350px"
      transformOrigin="bottom left"
      animation={`450ms cubic-bezier(1, 0, 0, 1.22) ${popInKeyframes}`}
      _before={{
        content: '""',
        position: "absolute",
        bottom: 0,
        left: "-10px",
        height: "20px",
        width: "50px",
        bg: "blue.500",
        borderBottomRightRadius: "15px",
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: "absolute",
        zIndex: 1,
        bottom: 0,
        left: "-10px",
        width: "10px",
        height: "20px",
        bg: "gray.100",
        borderBottomRightRadius: "10px",
      }}
    >
      <Box overflow="hidden">
        <Text fontWeight="bold">SCHWURBLER</Text>
        <Text>{text}</Text>
      </Box>
    </PseudoBox>
  );
});
export default ChatBubble;
