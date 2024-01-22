"use client";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Grid, Heading, Text, TextField } from "@radix-ui/themes";
import Avatar from "../components/Avatar";

const Chats = () => {
  const activeUser = [1, 2, 3, 4];
  return (
    <Grid rows="210px 1fr" className="h-[100dvh]">
      <Box pt="3" px="3">
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
          <Flex
            gap="5"
            align="center"
            className="overflow-auto w-[320px]"
            mt="5"
          >
            {activeUser.map((u) => (
              <Flex
                key={u}
                direction="column"
                align="center"
                className="cursor-pointer"
                justify="center"
              >
                <Avatar online={true} src="/user.jpg" />
                <Text size="2" as="p">
                  Herdoy
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>
        <Heading as="h3" size="4" weight="medium">
          Recent
        </Heading>
      </Box>
      <Box className="overflow-auto p-3">
        {activeUser.map((u) => (
          <Flex
            key={u}
            p="2"
            className="hover:bg-gray-200 transition cursor-pointer"
            mb="3"
          >
            <Flex align="center" gap="2">
              <Avatar online={true} src="/user.jpg" />
              <Box>
                <Text size="3" weight="medium" as="p">
                  Herdoy Almamun
                </Text>
                <Text size="2" as="p" className="text-zinc-400">
                  hey! there I&apos;m available
                </Text>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Grid>
  );
};

export default Chats;
