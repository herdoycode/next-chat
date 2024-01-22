import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import LoginForm from "./LoginForm";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/authOptions";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/dashboard");

  return (
    <Flex align="center" justify="center" className="h-screen" px="3">
      <Box className="w-[500px] border rounded-lg p-4">
        <Heading as="h1" align="center" mb="3">
          Login
        </Heading>
        <LoginForm />
        <Text mt="4" as="p" align="center">
          Don&apos;t have an account?
          <Link className="text-[--accent-9]" href="/register">
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Login;
