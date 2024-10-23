import { useState } from "react"
import { ChevronRight, User, Lock, CreditCard, Gift, Palette, Zap, Users, Info, FileText, FileQuestion, LogOut, Trash2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsScreen() {
  const [hapticFeedback, setHapticFeedback] = useState(false)
  const [activeScreen, setActiveScreen] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen bg-[#1B252F]">
      <div className="flex-1 max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6 text-[#E2E2E2]">Settings</h1>
        
        <section className="bg-[#202C37] rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b border-gray-700 text-[#E2E2E2]">Account</h2>
          <div className="divide-y divide-gray-700">
            <SettingsItem icon={User} title="Manage Account" subtitle="Email: thestoryshop@gmail.com" onClick={() => setActiveScreen('manageAccount')} />
            <SettingsItem icon={Lock} title="Change Password" subtitle="Change password anytime" onClick={() => setActiveScreen('changePassword')} />
            <SettingsItem icon={CreditCard} title="Subscription Status" subtitle="Powerhouse Subscriber" onClick={() => setActiveScreen('subscriptionStatus')} />
            <div className="flex items-center p-4">
              <Gift className="h-5 w-5 text-[#E2E2E2] mr-4" />
              <div className="flex-1">
                <h3 className="font-medium text-[#E2E2E2]">Referral Code</h3>
                <p className="text-sm text-gray-400">Put referral code coupon here to get discounts</p>
              </div>
              <Input placeholder="EX: G52381" className="w-32 bg-[#1B252F] text-[#E2E2E2] border-gray-700" />
              <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
            </div>
          </div>
        </section>

        <section className="bg-[#202C37] rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b border-gray-700 text-[#E2E2E2]">App</h2>
          <div className="divide-y divide-gray-700">
            <div className="flex items-center p-4">
              <Palette className="h-5 w-5 text-[#E2E2E2] mr-4" />
              <div className="flex-1">
                <h3 className="font-medium text-[#E2E2E2]">Color Theme</h3>
                <p className="text-sm text-gray-400">Toggle between Light and Dark mode</p>
              </div>
              <Switch data-theme="dark" />
            </div>
            <div className="flex items-center p-4">
              <Zap className="h-5 w-5 text-[#E2E2E2] mr-4" />
              <div className="flex-1">
                <h3 className="font-medium text-[#E2E2E2]">Haptic Feedback</h3>
                <p className="text-sm text-gray-400">Turn On or Off</p>
              </div>
              <Switch data-theme="dark" checked={hapticFeedback} onCheckedChange={setHapticFeedback} />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 rounded-lg shadow mb-6 p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Users className="h-6 w-6 text-white mr-4" />
            <div>
              <h3 className="font-bold text-white">Refer a Friend</h3>
              <p className="text-sm text-white">Both get a month for only $5</p>
            </div>
          </div>
          <Button variant="secondary" className="bg-[#1B252F] text-[#E2E2E2] hover:bg-gray-800">
            Claim Now
          </Button>
        </section>

        <section className="bg-[#202C37] rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b border-gray-700 text-[#E2E2E2]">Support</h2>
          <div className="divide-y divide-gray-700">
            <SettingsItem icon={Info} title="About Us" />
            <SettingsItem icon={FileText} title="Terms Of Service" />
            <SettingsItem icon={FileQuestion} title="Privacy Policy" />
            <div className="p-4 space-y-4">
              <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900">
                <LogOut className="mr-2 h-4 w-4 text-red-400" /> Sign Out
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900">
                <Trash2 className="mr-2 h-4 w-4 text-red-400" /> Delete Account
              </Button>
            </div>
          </div>
        </section>

      </div>
      <div className="hidden lg:block flex-1">
      {activeScreen === 'manageAccount' && <ManageAccountScreen />}
      {activeScreen === 'changePassword' && <ChangePasswordScreen />}
      {activeScreen === 'subscriptionStatus' && <SubscriptionStatusScreen />}
      {!activeScreen && (
        <div 
          className="h-full bg-contain bg-no-repeat bg-center opacity-35" 
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whizi%20compressed-SbClcocoaOsBNPDMiSnpOEDoFS93Q6.png')"
          }} 
        />
      )}
    </div>
    </div>
  )
}

function SettingsItem({ icon: Icon, title, subtitle, onClick }: { icon: any, title: string, subtitle?: string, onClick?: () => void }) {
  return (
    <div className="flex items-center p-4 cursor-pointer text-[#E2E2E2]" onClick={onClick}>
      <Icon className="h-5 w-5 text-[#E2E2E2] mr-4" />
      <div className="flex-1">
        <h3 className="font-medium text-[#E2E2E2]">{title}</h3>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  )
}

function ManageAccountScreen() {
  return <div className="p-4 text-[#E2E2E2]">Manage Account Screen (Placeholder)</div>
}

function ChangePasswordScreen() {
  return <div className="p-4 text-[#E2E2E2]">Change Password Screen (Placeholder)</div>
}

function SubscriptionStatusScreen() {
  return <div className="p-4 text-[#E2E2E2]">Subscription Status Screen (Placeholder)</div>
}