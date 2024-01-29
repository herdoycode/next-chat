"use client";
import { Box, DropdownMenu, Flex } from "@radix-ui/themes";
import { BsChatDots, BsMessenger } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { LuMoon } from "react-icons/lu";
import { MdExitToApp } from "react-icons/md";
import { PiUserListLight } from "react-icons/pi";
import Avatar from "../components/Avatar";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data } = useSession();
  return (
    <Flex
      justify="between"
      align="center"
      py={{ initial: "0", md: "2" }}
      px={{ initial: "2", md: "0" }}
      direction={{ initial: "row", md: "column" }}
      height="100%"
    >
      <Box display={{ initial: "none", md: "block" }} className="text-2xl">
        <BsMessenger />
      </Box>
      <Flex gap="5" direction={{ initial: "row", md: "column" }}>
        <Box className="text-xl cursor-pointer">
          <FaRegUser />
        </Box>
        <Box className="text-xl cursor-pointer">
          <BsChatDots />
        </Box>
        <Box className="text-xl cursor-pointer">
          <PiUserListLight />
        </Box>
        <Box className="text-xl cursor-pointer">
          <GoGear />
        </Box>
      </Flex>
      <Flex align="center" gap="5" direction={{ initial: "row", md: "column" }}>
        <Box className="text-xl cursor-pointer">
          <LuMoon />
        </Box>
        <Box className="text-xl cursor-pointer">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className="outline-none border-none">
                <Avatar online={false} src={data?.user?.image!} />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item
                className="flex gap-4"
                style={{ cursor: "pointer" }}
              >
                <span>Profile</span> <FaRegUser />
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="flex gap-4"
                style={{ cursor: "pointer" }}
              >
                <span>Setting</span> <GoGear />
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="flex gap-4"
                style={{ cursor: "pointer" }}
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                <span>Logout</span> <MdExitToApp />
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
