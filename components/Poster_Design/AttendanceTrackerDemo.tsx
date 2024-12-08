'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'

export function AttendanceTrackerDemo() {
  const [attendance, setAttendance] = useState(75)

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-purple-400'>Attendance Tracker Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-2xl font-bold text-center">{attendance}%</div>
          <Slider
            value={[attendance]}
            onValueChange={(value) => setAttendance(value[0])}
            max={100}
            step={1}
          />
          <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-300 ease-in-out"
              style={{ width: `${attendance}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-400 text-center">
            Drag the slider to see how attendance is visualized in real-time.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

