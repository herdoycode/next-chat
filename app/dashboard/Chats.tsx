"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, Text, TextField } from "@radix-ui/themes";

const Chats = () => {
  const activeUser = [1, 2, 3, 4];
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
              <div className="avatar online">
                <div className="w-10 rounded-full">
                  <img
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    alt="user"
                  />
                </div>
              </div>
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
