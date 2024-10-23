import { useState } from 'react'
import { X } from 'lucide-react'

import { Button } from "@/components/ui/button"

export default function SaleBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-red-600 text-white py-3 px-4 flex items-center justify-between">
      <div className="flex-1 flex items-center justify-center space-x-4">
        <span className="font-semibold">Summer sale special ends soon - Get 50% off your first year</span>
        <Button 
          variant="secondary" 
          size="sm" 
          className="text-red-600 bg-white hover:bg-gray-100 rounded-full px-6 py-1 text-sm font-medium"
        >
          Get Now
        </Button>
      </div>
      <button onClick={() => setIsVisible(false)} className="text-white hover:text-gray-200 ml-4">
        <X className="h-5 w-5" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  )
}