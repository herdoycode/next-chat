import { Grid } from "@radix-ui/themes";
import MessageBody from "./MessageBody";
import MessageBottom from "./MessageBottom";
import MessageTop from "./MessageTop";

const Messages = () => {
  return (
    <Grid className="h-[100dvh] cursor-pointer" rows="60px 1fr 60px">
      <MessageTop />
      <MessageBody />
      <MessageBottom />
    </Grid>
  );
};

export default Messages;
