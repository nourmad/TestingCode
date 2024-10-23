import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignUpComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex w-full max-w-md flex-col px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex justify-start">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whizi%20compressed-D6oshfMZ4B3770pCIoL3Imb8lbzqy5.png"
            alt="Whizi Logo"
            width={80}
            height={80}
            className="h-16 w-auto"
          />
        </div>
        <div className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-sm">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              Sign Up to
            </h2>
            <h1 className="mt-2 text-6xl font-bold tracking-tight text-gray-900">
              Whizi
            </h1>

            <div className="mt-10">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Enter email"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Create user name"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <Input
                    type="number"
                    placeholder="Age"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="relative">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirm Password"
                    className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>

                <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700">
                  Register
                </Button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500">or continue with</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.71-1.07-.18-2.05-.91-3.01-.91-.99 0-1.94.71-3.01.91-1.03.18-2.1.24-3.08-.71-1.44-1.45-2.51-4.14-2.51-6.52 0-3.72 2.56-5.61 5.06-5.61 1.35 0 2.45.91 3.01.91.53 0 1.68-.96 3.08-.96 1.69 0 2.78.91 3.51 1.82-3.04 1.78-2.54 6.41.51 7.65-.03.18-.08.35-.13.53-.27.71-.76 1.47-1.35 2.17M12.03 7.25c-.15-1.4.42-2.93 1.34-3.99.92-1.06 2.41-1.88 3.69-1.92.16 1.4-.39 2.88-1.32 3.94-.92 1.06-2.41 1.88-3.71 1.97z"/>
                    </svg>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-center text-sm">
                <span className="text-gray-500">Already have an account?</span>{' '}
                <Link href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login here!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:flex flex-1 items-center justify-center bg-gray-50">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Saly-GTzsJcfo7KSJnBCwRuICvloDHxspGl.png"
            alt="Signup illustration"
            width={600}
            height={600}
            className="max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>
  )
}