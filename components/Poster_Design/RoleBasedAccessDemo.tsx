'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check, X } from 'lucide-react'

const permissions = {
  teacher: ['View Classes', 'Send Notifications', 'Mark Attendance', 'Schedule Extra Classes'],
  cr: ['View Classes', 'Update Exam Dates', 'Send Class Notifications'],
  student: ['View Classes', 'Receive Notifications', 'View Attendance'],
}

export function RoleBasedAccessDemo() {
  const [selectedRole, setSelectedRole] = useState<'teacher' | 'cr' | 'student'>('student')

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-purple-400'>Role-based Access Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center space-x-2">
            <Button
              variant={selectedRole === 'teacher' ? 'default' : 'outline'}
              onClick={() => setSelectedRole('teacher')}
            >
              Teacher
            </Button>
            <Button
              variant={selectedRole === 'cr' ? 'default' : 'outline'}
              onClick={() => setSelectedRole('cr')}
            >
              Class Rep
            </Button>
            <Button
              variant={selectedRole === 'student' ? 'default' : 'outline'}
              onClick={() => setSelectedRole('student')}
            >
              Student
            </Button>
          </div>
          <div className="space-y-2">
            {['View Classes', 'Send Notifications', 'Mark Attendance', 'Schedule Extra Classes', 'Update Exam Dates', 'Receive Notifications', 'View Attendance'].map((permission) => (
              <div key={permission} className="flex items-center text-gray-900 text-sm font-semibold justify-between p-2 bg-gray-100 rounded">
                <span>{permission}</span>
                {permissions[selectedRole].includes(permission) ? (
                  <Check className="text-green-500" />
                ) : (
                  <X className="text-red-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

