import { Avatar, Box } from "@radix-ui/themes";

const MessageBody = () => {
  const chatItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Box p="3" className="overflow-auto">
      {chatItems.map((c) => (
        <Box key={c}>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Avatar
                  width="50px"
                  height="50px"
                  fallback="u"
                  radius="full"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-bubble bg-gray-200 text-zinc-900">
              You were the Chosen One Lorem ipsum.
            </div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <Avatar
                  width="50px"
                  height="50px"
                  fallback="u"
                  radius="full"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <div className="chat-bubble bg-[--accent-9]">
              I hate you Lorem ipsum dolor sit amet
            </div>

            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </Box>
      ))}
    </Box>
  );
};

export default MessageBody;
