'use client'

import { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const events = [
  { date: new Date(2024, 11, 5), type: 'exam', title: 'Math Exam' },
  { date: new Date(2024, 11, 12), type: 'class', title: 'Extra Physics Class' },
  { date: new Date(2024, 11, 20), type: 'exam', title: 'History Quiz' },
]

export function DynamicCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-purple-400'>Dynamic Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
          modifiers={{
            exam: events.filter(event => event.type === 'exam').map(event => event.date),
            class: events.filter(event => event.type === 'class').map(event => event.date),
          }}
          modifiersStyles={{
            exam: { backgroundColor: 'rgba(220, 38, 38, 0.1)', color: 'rgb(220, 38, 38)', fontWeight: 'bold' },
            class: { backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'rgb(59, 130, 246)', fontWeight: 'bold' },
          }}
        />
        <div className="mt-4">
          <h3 className="font-semibold">Legend:</h3>
          <div className="flex items-center mt-2">
            <div className="w-4 h-4 bg-red-100 border border-red-600 mr-2"></div>
            <span>Exam</span>
          </div>
          <div className="flex items-center mt-1">
            <div className="w-4 h-4 bg-blue-100 border border-blue-600 mr-2"></div>
            <span>Extra Class</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

