"use client";
import {
  Avatar,
  Box,
  DropdownMenu,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import { BsThreeDots } from "react-icons/bs";
import { FaChevronLeft, FaRegUser } from "react-icons/fa";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import {
  IoCallOutline,
  IoSearchOutline,
  IoVideocamOutline,
} from "react-icons/io5";
import { RiDeleteBinLine, RiVolumeMuteLine } from "react-icons/ri";

const MessageTop = () => {
  return (
    <Flex
      justify="between"
      align="center"
      width="100%"
      px="5"
      className="border-b"
    >
      <Flex align="center" gap="4">
        <Box display={{ initial: "block", md: "none" }} className="text-2xl">
          <FaChevronLeft />
        </Box>
        <Avatar
          width="50px"
          height="50px"
          fallback="u"
          radius="full"
          src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
        />
      </Flex>
      <Flex align="center" gap="6">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Text size="5">
              <IoSearchOutline />
            </Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Label style={{ cursor: "pointer", padding: "0px" }}>
              <TextField.Root>
                <TextField.Slot>
                  <IoSearchOutline />
                </TextField.Slot>
                <TextField.Input placeholder="Search the docs…" />
              </TextField.Root>
            </DropdownMenu.Label>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
        <Text size="5">
          <IoCallOutline />
        </Text>
        <Text size="5">
          <IoVideocamOutline />
        </Text>
        <Text size="5">
          <FaRegUser />
        </Text>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Text size="5">
              <BsThreeDots />
            </Text>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item
              className="flex gap-4"
              style={{ cursor: "pointer" }}
            >
              <span>Archive</span> <HiOutlineArchiveBox />
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-4"
              style={{ cursor: "pointer" }}
            >
              <span>Muted</span> <RiVolumeMuteLine />
            </DropdownMenu.Item>
            <DropdownMenu.Item
              className="flex gap-4"
              style={{ cursor: "pointer" }}
            >
              <span>Delete</span> <RiDeleteBinLine />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Flex>
    </Flex>
  );
};

export default MessageTop;
