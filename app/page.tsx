import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import authOptions from "./api/auth/authOptions";

const Home = async () => {
  const session = await getServerSession(authOptions);
  return session ? redirect("/dashboard") : redirect("/login");
};

export default Home;
