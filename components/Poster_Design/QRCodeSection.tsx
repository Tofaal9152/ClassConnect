import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export function QRCodeSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 ">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-400">Scan to View Poster Website</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="w-64 h-64 relative">
              <Image
                src="/qrcode.jpg"
                alt="QR Code for Poster Website"
                width={256}
                height={256}
                className="border-2 border-gray-200 rounded-lg"
              />
            </div>
            <div className="text-center md:text-left space-y-4 max-w-md">
              <p className="text-lg">
              { ` Scan this QR code with your smartphone camera to visit the poster's dedicated website and explore more details.`}
              </p>
              <p className="text-sm text-gray-400">
                Learn about the event, view resources, and stay updated with all the latest information!
              </p>
             
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
