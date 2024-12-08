import { ArrowRight, Bell, Calendar, Users, ClipboardList } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  {
    icon: Bell,
    title: 'Teacher Sends Notification',
    description: 'Teachers can send instant updates about classes, assignments, or important announcements.',
  },
  {
    icon: Users,
    title: 'Students Receive Update',
    description: 'All students in the class instantly receive the notification on their devices.',
  },
  {
    icon: ClipboardList,
    title: 'CR Adds Event',
    description: 'Class Representatives can add important events such as exams or extra classes.',
  },
  {
    icon: Calendar,
    title: 'Calendar Updates for All Users',
    description: 'The shared calendar automatically updates, ensuring everyone has the latest schedule.',
  },
]

export function HowItWorks() {
  return (
    <section id='how-it-works' className="py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">How ClassConnect Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <Card className="w-full">
                <CardContent className="flex flex-col items-center p-6">
                  <step.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-purple-400 mb-2 text-center">{step.title}</h3>
                  <p className="text-center text-gray-400">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 my-4 text-gray-400 hidden md:block" />
              )}
              {index < steps.length - 1 && (
                <ArrowRight className="w-8 h-8 my-4 text-gray-400 rotate-90 md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

