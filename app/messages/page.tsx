"use client";
import { useState } from "react";
import { Search, Send, MoreVertical, Phone, Video } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function UserMessages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey, how are you?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      name: "Jane Smith",
      lastMessage: "Can we meet tomorrow?",
      timestamp: "Yesterday",
    },
    {
      id: 3,
      name: "Admin Support",
      lastMessage: "Your request has been processed.",
      timestamp: "2 days ago",
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "John Doe",
      content: "Hey, how are you?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "You",
      content: "I'm good, thanks! How about you?",
      timestamp: "10:31 AM",
    },
    {
      id: 3,
      sender: "John Doe",
      content: "Doing well! Just wanted to check in.",
      timestamp: "10:32 AM",
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // Here you would typically send the message to your backend
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Messages</h1>
      <div className="flex flex-1 gap-4 h-[calc(100vh-100px)]">
        <div className="w-1/3 bg-background border rounded-lg overflow-hidden flex flex-col">
          <div className="p-4 border-b">
            <Input placeholder="Search conversations..." className="w-full" />
          </div>
          <ScrollArea className="flex-1">
            {chats.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 border-b cursor-pointer hover:bg-accent ${
                  selectedChat === chat.id ? "bg-accent" : ""
                }`}
                onClick={() => setSelectedChat(chat.id)}
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?text=${chat.name[0]}`}
                    />
                    <AvatarFallback>{chat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <p className="text-sm text-muted-foreground truncate">
                      {chat.lastMessage}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {chat.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        <div className="flex-1 bg-background border rounded-lg overflow-hidden flex flex-col">
          {selectedChat ? (
            <>
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage
                      src={`/placeholder.svg?text=${
                        chats.find((c) => c.id === selectedChat)?.name[0]
                      }`}
                    />
                    <AvatarFallback>
                      {chats.find((c) => c.id === selectedChat)?.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h2 className="font-semibold">
                    {chats.find((c) => c.id === selectedChat)?.name}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Link
                    href="https://agoraproject2-g3le59.flutterflow.app/"
                    passHref
                  >
                    
                      <Button variant="ghost" size="icon">
                        <Video className="h-4 w-4" />
                      </Button>
                   
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Profile</DropdownMenuItem>
                      <DropdownMenuItem>Block User</DropdownMenuItem>
                      <DropdownMenuItem>Clear Chat</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <ScrollArea className="flex-1 p-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 ${
                      msg.sender === "You" ? "text-right" : ""
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        msg.sender === "You"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p>{msg.content}</p>
                      <span className="text-xs text-muted-foreground">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </ScrollArea>
              <div className="p-4 border-t">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex gap-2"
                >
                  <Input
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </form>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              Select a conversation to start messaging
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
