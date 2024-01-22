import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import authOptions from "../api/auth/authOptions";
import RegisterForm from "./RegisterForm";

const Register = async () => {
  const session = await getServerSession(authOptions);
  if (session) return redirect("/dashboard");

  return (
    <Flex align="center" justify="center" className="h-screen" px="3">
      <Box className="w-[500px] border rounded-lg p-4">
        <Heading as="h1" align="center" mb="3">
          Create Account
        </Heading>
        <RegisterForm />
        <Text mt="4" as="p" align="center">
          Already have account?
          <Link className="text-[--accent-9]" href="/login">
            Login
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Register;
