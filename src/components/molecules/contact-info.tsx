import { type LucideIcon } from 'lucide-react'
import Text from "../atoms/text"

interface ContactInfoProps {
  icon: LucideIcon
  label: string
  value: string
}

const ContactInfo = ({ icon: Icon, label, value }: ContactInfoProps) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
        <Icon className="w-5 h-5 text-green-400" />
      </div>
      <div>
        <Text variant="small">{label}</Text>
        <Text variant="body" className="text-white">
          {value}
        </Text>
      </div>
    </div>
  )
}

export default ContactInfo
