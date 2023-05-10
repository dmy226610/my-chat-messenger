import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

function Chat() {
  return (
    <div>
      <h1>My App</h1>
      <MessengerCustomerChat
        pageId="100092384239475"
        appId="791242365902023"
        htmlRef="airlineee"
      />
    </div>
  );
}

export default Chat;
