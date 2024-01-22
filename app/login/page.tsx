"use client";
import { joiResolver } from "@hookform/resolvers/joi";
import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Joi from "joi";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io5";

const schema = Joi.object({
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(8).required(),
});

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: joiResolver(schema) });
  return (
    <Flex align="center" justify="center" className="h-screen" px="3">
      <Box className="w-[500px] border rounded-lg p-4">
        <Heading as="h1" align="center" mb="3">
          Login
        </Heading>

        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          color="green"
          className="w-full"
        >
          <IoLogoGoogle /> Continue with google
        </Button>

        <Flex align="center" my="3" gap="3">
          <Box className="flex-1 h-[1px] bg-gray-500" />
          <span>or</span>
          <Box className="flex-1 h-[1px] bg-gray-500" />
        </Flex>

        <form
          onSubmit={handleSubmit(({ email, password }) =>
            signIn("credentials", {
              email,
              password,
              callbackUrl: "/dashboard",
            })
          )}
          className="flex flex-col gap-5"
        >
          <Box>
            <TextField.Input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <Text size="2" color="red">
                {errors.email.message}
              </Text>
            )}
          </Box>
          <Box>
            <TextField.Input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <Text size="2" color="red">
                {errors.password.message}
              </Text>
            )}
          </Box>
          <Button>Login</Button>
        </form>
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
