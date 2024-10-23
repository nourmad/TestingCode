import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronDownIcon, MessageSquareIcon, UserPlusIcon } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-white border-r">
      <div className="p-4">
        <div className="w-10 h-10 mb-4">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="50" cy="50" r="40" fill="url(#gradient)" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF00FF" />
                <stop offset="100%" stopColor="#00FFFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <Button variant="outline" className="w-full justify-start">
          <span className="mr-2">+</span> New Conversation
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 border-b">
            <div className="flex items-center">
              <MessageSquareIcon className="w-5 h-5 mr-2" />
              <div>
                <div className="font-semibold">GPT-4o</div>
                <div className="text-sm text-gray-500">Generate A React Hooks UseLocalStorage</div>
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-between mb-4">
          Collapse <ChevronDownIcon className="w-4 h-4" />
        </Button>
        <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UserPlusIcon className="w-5 h-5 mr-2 text-black" />
              <span className="font-bold text-black">Refer a Friend</span>
            </div>
            <div className="bg-black text-white text-xs px-2 py-1 rounded">$1/month</div>
          </div>
          <div className="text-xs text-black mt-1">Get one month for only $1</div>
        </div>
        {['About', 'Subscribe', 'Settings'].map((item) => (
          <Button key={item} variant="ghost" className="w-full justify-start mb-2">
            <span className="mr-2">=</span> {item}
          </Button>
        ))}
        <div className="flex justify-start space-x-4 mt-4">
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          <svg viewBox="0 0 127.14 96.36" className="w-6 h-6 fill-current">
            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}