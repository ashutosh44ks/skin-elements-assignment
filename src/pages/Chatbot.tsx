import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState, useRef, useEffect } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { sender: "user", text: input },
      { sender: "bot", text: "This is a dummy response" },
    ]);
    setInput("");
  };

  return (
    <div className="h-full border rounded-md flex flex-col">
      <div className="overflow-y-auto p-4 space-y-2 flex-1">
        {messages.length === 0 && (
          <div className="text-gray-400 text-center">
            Start the conversation...
          </div>
        )}
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={msg.sender === "user" ? "text-right" : "text-left"}
          >
            <span
              className={cn(
                "inline-block rounded-lg px-4 py-2 mb-1 text-sm",
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              )}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="p-4 border-t flex gap-2">
        <Input
          type="text"
          className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring w-full"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default Chatbot;
