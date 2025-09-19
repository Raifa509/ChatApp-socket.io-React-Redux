import React from "react";
import { useSelector } from "react-redux";

function MessageList() {
  const username = useSelector((state) => state.chatReducer.username);
  const messages = useSelector((state) => state.chatReducer.messages);

  return (
    <div className="p-4 space-y-3 flex-1 overflow-y-auto">
      {messages.map((msg, index) => {
        const isSent = msg.user === username; // check if message is sent by current user

        return (
          <div
            key={index}
            className={`flex ${isSent ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] break-words px-3 py-2 rounded-lg text-sm shadow ${
                isSent
                  ? "bg-sky-600 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-900 rounded-tl-none"
              }`}
            >
              {/* Message text */}
              {msg.text}

              {/* Timestamp */}
              <div
                className={`text-[10px] mt-1 ${
                  isSent ? "text-gray-200 text-right" : "text-gray-500 text-left"
                }`}
              >
                {msg.time ||
                  new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MessageList;
