"use client";

import { motion } from "framer-motion";
import { Search, Send, MoreVertical, Phone, Video, Smile, Paperclip } from "lucide-react";
import { useState } from "react";

// Type Definitions
interface Message {
  sender: 'me' | 'other';
  text: string;
  time: string;
}

interface Contact {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  lastMessage: string;
  unread?: number;
}

const contacts: Contact[] = [
  { id: 1, name: 'Alice', avatar: 'https://i.pravatar.cc/40?img=1', online: true, lastMessage: 'Hey, how are you?', unread: 2 },
  { id: 2, name: 'Bob', avatar: 'https://i.pravatar.cc/40?img=2', online: false, lastMessage: 'Can you check the new design?' },
  { id: 3, name: 'Charlie', avatar: 'https://i.pravatar.cc/40?img=3', online: true, lastMessage: 'See you at 5 PM.' },
  { id: 4, name: 'David', avatar: 'https://i.pravatar.cc/40?img=4', online: false, lastMessage: 'Happy Birthday!' },
  { id: 5, name: 'Eve', avatar: 'https://i.pravatar.cc/40?img=5', online: true, lastMessage: 'Sure, I will send it.' },
];

const initialMessages: { [key: number]: Message[] } = {
  1: [
    { sender: 'other', text: 'Hey, how are you?', time: '10:00 AM' },
    { sender: 'me', text: 'I am good, thanks! How about you?', time: '10:01 AM' },
    { sender: 'other', text: 'Doing great! Working on the new project.', time: '10:02 AM' },
  ],
  2: [
    { sender: 'other', text: 'Can you check the new design?', time: 'Yesterday' },
  ],
};

export default function ChatPage() {
  const [activeContact, setActiveContact] = useState<Contact>(contacts[0]);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    const newMsg: Message = {
      sender: 'me',
      text: newMessage,
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => ({
      ...prev,
      [activeContact.id]: [...(prev[activeContact.id] || []), newMsg]
    }));

    setNewMessage("");
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white dark:bg-gray-900/80 rounded-xl shadow-lg overflow-hidden">
      {/* Contact List */}
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-1/4 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search contacts..." className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800" />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {contacts.map(contact => (
            <div
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={`flex items-center gap-4 p-4 cursor-pointer transition ${activeContact.id === contact.id ? 'bg-primary/10' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                {contact.online && <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white dark:border-gray-900"></span>}
              </div>
              <div className="flex-grow overflow-hidden">
                <h4 className="font-semibold">{contact.name}</h4>
                <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread && <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">{contact.unread}</span>}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chat Window */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-grow flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src={activeContact.avatar} alt={activeContact.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-semibold text-lg">{activeContact.name}</h3>
              <p className="text-sm text-green-500">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Phone size={20} /></button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Video size={20} /></button>
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><MoreVertical size={20} /></button>
          </div>
        </div>
        
        <div className="flex-grow p-6 overflow-y-auto bg-gray-50 dark:bg-gray-900">
          <div className="space-y-4">
            {(messages[activeContact.id] || []).map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.sender === 'me' ? 'justify-end' : ''}`}>
                {msg.sender === 'other' && <img src={activeContact.avatar} alt="avatar" className="w-8 h-8 rounded-full"/>}
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${msg.sender === 'me' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 rounded-bl-none'}`}>
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-blue-200' : 'text-gray-500'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSendMessage} className="flex items-center gap-4">
            <button type="button" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Smile size={22} /></button>
            <button type="button" className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"><Paperclip size={22} /></button>
            <input 
              type="text" 
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Type a message..." 
              className="flex-grow px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-white dark:bg-gray-800" 
            />
            <button type="submit" className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark">
              <Send size={20} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
} 