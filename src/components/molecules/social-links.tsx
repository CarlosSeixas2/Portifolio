import { Linkedin, Github } from 'lucide-react'

const SocialLinks = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="w-12 h-12 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group"
          aria-label={label}
        >
          <Icon className="w-5 h-5 text-gray-400 group-hover:text-black" />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
