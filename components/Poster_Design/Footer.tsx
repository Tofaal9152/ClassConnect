import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const teamMembers = [
  { name: 'Luba', phoneNumber: '+880 1751-332383' },
  { name: 'Raaj', phoneNumber: '+880 01522121489' },
  { name: 'Tofaal', phoneNumber: '+880 01732243108' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/classconnect' },
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/classconnect' },
  { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/classconnect' },
  { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/classconnect' },
]

export function Footer() {
  return (
    <footer id='contact' className="bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800  text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Contact Us</h3>
            <ul className="space-y-2">
              {teamMembers.map((member) => (
                <li key={member.name} className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href={`mailto:${member.phoneNumber}`} className="hover:text-blue-400 transition-colors">
                    {member.name} - {member.phoneNumber}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Follow Us (Available Soon)</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  <link.icon className="w-6 h-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">About ClassConnect</h3>
            <p className="mb-4">
              ClassConnect is a project developed for the IEEE RU SB WIE Affinity Group event, aiming to revolutionize class management and communication in educational institutions.
            </p>
            <Link href="#" className="text-blue-400 hover:underline">
              Learn more about IEEE RU SB WIE Affinity Group
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center ">
          <p>&copy; 2024 ClassConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

