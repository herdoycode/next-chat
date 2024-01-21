"use client";
import { Box, Button, Flex, TextField } from "@radix-ui/themes";
import { AiOutlineSend } from "react-icons/ai";

const MessageBottom = () => {
  return (
    <Flex
      justify="between"
      align="center"
      width="100%"
      p="3"
      className="border-t"
    >
      <Box className="flex-1">
        <TextField.Input
          radius="none"
          type="text"
          placeholder="Type your message"
          className="flex-1"
        />
      </Box>
      <Button radius="none">
        <AiOutlineSend />
      </Button>
    </Flex>
  );
};

export default MessageBottom;
