import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function UpgradeModal({ onClose }: { onClose: () => void }) {
  const [isAnnual, setIsAnnual] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => setAnimate(false), 300)
    return () => clearTimeout(timer)
  }, [isAnnual])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <Button variant="ghost" size="icon" onClick={onClose} className="absolute top-2 right-2">
          <X className="h-6 w-6" />
        </Button>
        <div className="text-center mb-6">
          <div className="flex justify-center mb-2">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Upgrade to a bigger plan!</h2>
          <p className="text-gray-600">You've hit your hourly limit. Please choose from one of the higher plans</p>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <span className={`font-medium ${!isAnnual ? 'text-[#4A3AFF]' : 'text-gray-500'}`}>Monthly</span>
          <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
          <span className={`font-medium ${isAnnual ? 'text-[#4A3AFF]' : 'text-gray-500'}`}>Annually</span>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <PlanCard
            name="Pro"
            price={isAnnual ? (359.88 / 12).toFixed(2) : 29.99}
            originalPrice={isAnnual ? 29.99 : null}
            period="/month"
            features={[
              'All features from Basic, Plus',
              'GPT-4, Claude 3.5 Sonnet, 180 More',
              'Vocal Dialogue with Assistant',
              'Up to 40 Prompts per hour'
            ]}
            color="#4A3AFF"
            popular
            animate={animate}
          />
          <PlanCard
            name="Powerhouse"
            price={isAnnual ? (479.88 / 12).toFixed(2) : 39.99}
            originalPrice={isAnnual ? 39.99 : null}
            period="/month"
            features={[
              'Everything in Pro, plus',
              '500 Text to image creations',
              '75 Text to video creations',
              '50 Text to music creations',
              'Unlimited prompts per hour'
            ]}
            color="#FFFFFF"
            animate={animate}
          />
        </div>
      </div>
    </div>
  )
}

function PlanCard({ name, price, originalPrice, period, features, color, popular = false, animate = false }) {
  return (
    <div className={`rounded-lg overflow-hidden ${popular ? 'ring-2 ring-[#4A3AFF]' : 'border border-gray-200'}`}>
      <div className={`p-6 flex flex-col h-full ${popular ? 'bg-[#4A3AFF] text-white' : 'bg-white text-gray-900'}`} style={{ backgroundColor: color }}>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">{name}</h3>
            {popular && (
              <span className="bg-white text-[#4A3AFF] text-xs font-bold px-2 py-1 rounded">
                Popular
              </span>
            )}
          </div>
          <div className="mb-2 relative h-12">
            <div className={`absolute w-full transition-all duration-300 ease-in-out ${animate ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <span className="text-3xl font-bold">${price}</span>
              <span className="text-lg ml-1">{period}</span>
            </div>
          </div>
          <div className="h-6 mb-4">
            {originalPrice && (
              <span className="line-through text-gray-400">
                ${originalPrice}{period}
              </span>
            )}
          </div>
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg className={`h-5 w-5 ${popular ? 'text-white' : 'text-green-500'} mr-2`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className={`mt-auto ${popular ? 'bg-[#4A3AFF]' : ''}`}>
          <Button className={`w-full ${popular ? 'bg-white text-[#4A3AFF] hover:bg-gray-100' : 'bg-[#4A3AFF] text-white hover:bg-[#3A2AEF]'}`}>
            Upgrade now
          </Button>
        </div>
      </div>
    </div>
  )
}