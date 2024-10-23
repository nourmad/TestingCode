import { ImagePlus, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="relative glowing-edge-container">
        <Input
          type="text"
          placeholder="Ask a question"
          className="w-full pl-4 pr-24 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-purple-300 transition-shadow duration-200 bg-white"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex space-x-2">
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Upload image"
          >
            <ImagePlus className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            aria-label="Send message"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <style jsx>{`
        @keyframes moveGradient {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
        .glowing-edge-container {
          position: relative;
          isolation: isolate;
        }
        .glowing-edge-container::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 9999px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(168, 85, 247, 0.3) 25%,
            rgba(168, 85, 247, 0.3) 75%,
            transparent
          );
          background-size: 200% 100%;
          animation: moveGradient 3s linear infinite;
          z-index: -1;
        }
        .glowing-edge-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          border-radius: 9999px;
          z-index: -1;
        }
      `}</style>
    </div>
  )
}