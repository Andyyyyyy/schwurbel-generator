import React from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/core";

const ChatInput = ({ onClick, isLoading }) => {
  return (
    <Box bg="white" w="100%" p={2} borderTop="solid 3px" borderColor="gray.400">
      <Flex border="solid 1px" borderColor="gray.300" borderRadius="full">
        <Flex align="center" justify="space-between" w="100%">
          <Text pl={5} pr={5}>
            Schwurbel mir was vor
          </Text>

          <IconButton
            icon="arrow-up"
            variantColor="blue"
            size="md"
            isRound
            fontSize="24px"
            onClick={onClick}
            isDisabled={isLoading}
            isLoading={isLoading}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default ChatInput;
