import { Box, Flex, PseudoBox } from "@chakra-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { apiUrl } from "./api";
import ChatBubble from "./ChatBubble";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";

const Chat = (props) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const bubbleRef = useRef();

  const pushMessage = (data) => {
    const messagesCopy = messages.slice();
    messagesCopy.push(<ChatBubble text={data} key={data} ref={bubbleRef} />);
    setMessages(messagesCopy);
  };

  useEffect(() => {
    bubbleRef.current &&
      bubbleRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const requestData = async () => {
    if (data == null || index >= data.length - 1) {
      setIsLoading(true);
      setData(null);
      const res = await fetch(apiUrl);
      const json = await res.json();
      setData(json.data);
      setIsLoading(false);
      pushMessage(json.data[0]);
      setIndex(1);
      return;
    }
    pushMessage(data[index]);
    setIndex(index + 1);
  };

  return (
    <Flex
      m="auto"
      maxHeight="90vh"
      h="700px"
      w="100%"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="#0000001a 0px 10px 20px 3px"
      border="solid 3px"
      borderColor="gray.400"
      direction="column"
      bg="gray.50"
    >
      <ChatHeader />
      <PseudoBox
        display="flex"
        flexGrow={1}
        p={3}
        flexDirection="column"
        justifyContent="start"
        overflow="hidden"
        _hover={{
          overflow: "auto",
        }}
      >
        {messages}
      </PseudoBox>
      <Box>
        <ChatInput onClick={requestData} isLoading={isLoading} />
      </Box>
    </Flex>
  );
};

export default Chat;
