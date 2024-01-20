"use client";
import { joiResolver } from "@hookform/resolvers/joi";
import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import Joi from "joi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { IoLogoGoogle } from "react-icons/io5";

const schema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string().min(8).required(),
});

interface FormData {
  name: string;
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
    <Flex align="center" justify="center" className="h-screen">
      <Box className="w-[500px] border rounded-lg p-4">
        <Heading as="h1" align="center" mb="3">
          Create Account
        </Heading>

        <Button color="green" className="w-full">
          <IoLogoGoogle /> Continue with google
        </Button>

        <Flex align="center" my="3" gap="3">
          <Box className="flex-1 h-[1px] bg-gray-500" />
          <span>or</span>
          <Box className="flex-1 h-[1px] bg-gray-500" />
        </Flex>

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col gap-5"
        >
          <Box>
            <TextField.Input
              {...register("name")}
              type="email"
              placeholder="Enter your email address"
            />
            {errors.name && (
              <Text size="2" color="red">
                {errors.name.message}
              </Text>
            )}
          </Box>
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
          <Button>Create Account</Button>
        </form>
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

export default Login;
