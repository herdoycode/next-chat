import { Box, Grid } from "@radix-ui/themes";
import Chats from "./Chats";
import Messages from "./Messages";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <Grid
      columns={{ md: "70px 350px 1fr", initial: "1fr" }}
      className="h-screen"
    >
      <Box
        position={{ initial: "fixed", md: "static" }}
        bottom={{ initial: "0", md: "auto" }}
        width={{ initial: "100%", md: "auto" }}
        height={{ initial: "9", md: "auto" }}
        className="bg-gray-200"
      >
        <Navbar />
      </Box>
      <Box className="bg-gray-100">
        <Chats />
      </Box>
      <Box
        position={{ initial: "fixed", md: "static" }}
        right={{ initial: "100%", md: "auto" }}
        width="100%"
      >
        <Messages />
      </Box>
    </Grid>
  );
};

export default Dashboard;
