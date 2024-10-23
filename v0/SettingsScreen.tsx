import { useState } from "react"
import { ChevronRight, User, Lock, CreditCard, Gift, Palette, Zap, Users, Info, FileText, FileQuestion, LogOut, Trash2 } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsScreen() {
  const [hapticFeedback, setHapticFeedback] = useState(false)
  const [activeScreen, setActiveScreen] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 max-w-2xl mx-auto p-8">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        
        <section className="bg-white rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Account</h2>
          <div className="divide-y">
            <SettingsItem icon={User} title="Manage Account" subtitle="Email: thestoryshop@gmail.com" onClick={() => setActiveScreen('manageAccount')} />
            <SettingsItem icon={Lock} title="Change Password" subtitle="Change password anytime" onClick={() => setActiveScreen('changePassword')} />
            <SettingsItem icon={CreditCard} title="Subscription Status" subtitle="Powerhouse Subscriber" onClick={() => setActiveScreen('subscriptionStatus')} />
            <div className="flex items-center p-4">
              <Gift className="h-5 w-5 text-gray-500 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">Referral Code</h3>
                <p className="text-sm text-gray-500">Put referral code coupon here to get discounts</p>
              </div>
              <Input placeholder="EX: G52381" className="w-32" />
              <ChevronRight className="h-5 w-5 text-gray-400 ml-2" />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b">App</h2>
          <div className="divide-y">
            <div className="flex items-center p-4">
              <Palette className="h-5 w-5 text-gray-500 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">Color Theme</h3>
                <p className="text-sm text-gray-500">Toggle between Light and Dark mode</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center p-4">
              <Zap className="h-5 w-5 text-gray-500 mr-4" />
              <div className="flex-1">
                <h3 className="font-medium">Haptic Feedback</h3>
                <p className="text-sm text-gray-500">Turn On or Off</p>
              </div>
              <Switch checked={hapticFeedback} onCheckedChange={setHapticFeedback} />
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
          <Button variant="secondary" className="bg-gray-900 text-white hover:bg-gray-800">
            Claim Now
          </Button>
        </section>

        <section className="bg-white rounded-lg shadow mb-6">
          <h2 className="text-lg font-medium p-4 border-b">Support</h2>
          <div className="divide-y">
            <SettingsItem icon={Info} title="About Us" />
            <SettingsItem icon={FileText} title="Terms Of Service" />
            <SettingsItem icon={FileQuestion} title="Privacy Policy" />
            <div className="p-4 space-y-4">
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <LogOut className="mr-2 h-4 w-4" /> Sign Out
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                <Trash2 className="mr-2 h-4 w-4" /> Delete Account
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
    <div className="flex items-center p-4 cursor-pointer" onClick={onClick}>
      <Icon className="h-5 w-5 text-gray-500 mr-4" />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <ChevronRight className="h-5 w-5 text-gray-400" />
    </div>
  )
}

function ManageAccountScreen() {
  return <div className="p-4">Manage Account Screen (Placeholder)</div>
}

function ChangePasswordScreen() {
  return <div className="p-4">Change Password Screen (Placeholder)</div>
}

function SubscriptionStatusScreen() {
  return <div className="p-4">Subscription Status Screen (Placeholder)</div>
}