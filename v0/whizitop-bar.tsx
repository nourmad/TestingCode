import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Camera, MessageSquare, Plus } from "lucide-react"

export default function TopBar() {
  return (
    <div className="flex flex-col border-b">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex flex-col">
            <Input
              className="w-64 text-sm"
              placeholder="Generate a Python hooks useLocalStorage"
            />
            <span className="text-xs text-muted-foreground mt-1">GPT-4o</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-medium">Creative Mode</span>
            <Switch />
          </div>
          <Button variant="ghost" size="icon">
            <MessageSquare className="w-4 h-4" />
            <span className="sr-only">Chat</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Camera className="w-4 h-4" />
            <span className="sr-only">Camera</span>
          </Button>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Choose Model
          </Button>
        </div>
      </div>
    </div>
  )
}