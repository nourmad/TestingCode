import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ImageIcon, MoreVertical } from "lucide-react"

export default function ChatInterface() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow flex items-end justify-center p-4">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {[1, 2, 3].map((i) => (
            <Button
              key={i}
              variant="secondary"
              className="flex flex-col items-center p-3 h-auto"
            >
              <span className="font-semibold">Design a database schema</span>
              <span className="text-xs text-gray-500">for an online merch store</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="p-4">
        <div className="relative">
          <Input
            className="w-full pl-4 pr-20 py-3 rounded-full border-2 border-[#E2E2E2] focus:border-[#E2E2E2] focus:ring-0 shadow-[0_0_10px_rgba(103,100,192,0.2)]"
            placeholder="Ask A Question"
          />
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <ImageIcon className="h-5 w-5 text-gray-500" />
            </Button>
            <Button size="icon" variant="ghost" className="h-9 w-9">
              <MoreVertical className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}