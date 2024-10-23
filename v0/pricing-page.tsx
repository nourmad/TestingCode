import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <h2 className="text-center text-indigo-600 font-semibold mb-2">PRICING</h2>
      <h1 className="text-center text-4xl font-bold text-[#1e0e4b] mb-4">Plans that suit everyone</h1>
      <p className="text-center text-gray-600 mb-8">
        Sign up today to benefit from premium AI solutions at an unmatched low price.
      </p>
      
      <div className="flex justify-center items-center gap-4 mb-12">
        <span className="text-sm font-medium">Monthly</span>
        <Switch />
        <span className="text-sm font-medium">Annually</span>
        <span className="text-sm text-indigo-600 font-medium flex items-center">
          <svg className="w-5 h-5 mr-1 rotate-[230deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
          Save 50%
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Essentials Plan */}
        <div className="border rounded-lg p-8 bg-white shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mr-4"></div>
            <h3 className="text-xl font-bold">Essentials</h3>
          </div>
          <div className="mb-4">
            <span className="text-gray-500 line-through">$19.99</span>
            <div className="text-3xl font-bold">$10.99 <span className="text-lg font-normal text-gray-600">/monthly</span></div>
          </div>
          <h4 className="font-semibold mb-4">What's included</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Access on Web, iOS, Android
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              GPT-4o, Claude 3.5 Sonnet, 40 More
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Chat with PDF and other documents
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Up to 20 Prompts Per Hour
            </li>
          </ul>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Free Trial</Button>
        </div>

        {/* Pro Plan */}
        <div className="border rounded-lg p-8 bg-indigo-600 text-white shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white rounded-lg mr-4"></div>
            <h3 className="text-xl font-bold">Pro</h3>
          </div>
          <div className="absolute top-4 right-4 bg-indigo-400 text-white text-xs font-semibold px-2 py-1 rounded">Popular</div>
          <div className="mb-4">
            <span className="text-indigo-200 line-through">$29.99</span>
            <div className="text-3xl font-bold">$15.99 <span className="text-lg font-normal">/monthly</span></div>
          </div>
          <h4 className="font-semibold mb-4">What's included</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              All features from Basic, Plus
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              GPT-4o, Claude 3.5 Sonnet, 180 More
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Vocal Dialogue with Assistant
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Up to 40 Prompts per hour
            </li>
          </ul>
          <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">Free Trial</Button>
        </div>

        {/* Powerhouse Plan */}
        <div className="border rounded-lg p-8 bg-white shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg mr-4"></div>
            <h3 className="text-xl font-bold">Powerhouse</h3>
          </div>
          <div className="mb-4">
            <span className="text-gray-500 line-through">$39.99</span>
            <div className="text-3xl font-bold">$19.99 <span className="text-lg font-normal text-gray-600">/monthly</span></div>
          </div>
          <h4 className="font-semibold mb-4">What's included</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Everything in Pro, plus
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              500 Text to image creations
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              75 Text to video creations
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              50 Text to music creations
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Unlimited prompts per hour
            </li>
          </ul>
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Free Trial</Button>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        All Cancellations must be within 7 Days
      </p>
    </div>
  )
}