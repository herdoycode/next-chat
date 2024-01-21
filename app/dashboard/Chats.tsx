"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Avatar, Box, Flex, Text, Heading, TextField } from "@radix-ui/themes";
import React, { use, useState } from "react";

const Chats = () => {
  const activeUser = [1, 2, 3, 4];
  const [tx, setTx] = useState<number>(0);
  return (
    <Box p="3">
      <Heading weight="medium" size="5" as="h2">
        Chats
      </Heading>
      <Box my="3">
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="Search the docs…" />
        </TextField.Root>
        <Flex gap="5" align="center" className="overflow-auto" mt="5">
          {activeUser.map((u) => (
            <Flex
              key={u}
              direction="column"
              align="center"
              className="cursor-pointer"
              justify="center"
            >
              <Avatar
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                width="40px"
                height="40px"
                fallback="U"
                radius="full"
              />
              <Text size="2" as="p">
                Herdoy
              </Text>
            </Flex>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Chats;
