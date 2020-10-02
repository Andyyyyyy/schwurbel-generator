import { Flex, Icon, IconButton, Text, useDisclosure } from "@chakra-ui/core";
import React from "react";
import InfoModal from "./InfoModal";

const ChatHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      bg="white"
      borderBottom="solid 3px"
      borderColor="gray.400"
      p={2}
      pl={3}
      align="center"
    >
      <Flex
        bg="blue.400"
        w="45px"
        h="45px"
        borderRadius="full"
        mr={3}
        p={1}
        align="center"
        justify="center"
      >
        <Icon name="chat" fontSize="2xl" color="white" />
      </Flex>
      <Text fontSize="xl" color="blue.700" flexGrow="1">
        Der Schwurbel-Generator
      </Text>
      <IconButton
        isRound
        icon="info-outline"
        size="sm"
        fontSize="1.4em"
        variant="ghost"
        color="blue.700"
        onClick={onOpen}
      />
      <InfoModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default ChatHeader;
