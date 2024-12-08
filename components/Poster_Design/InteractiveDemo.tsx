import { AttendanceTrackerDemo } from "./AttendanceTrackerDemo";
import { DynamicCalendar } from "./DynamicCalendar";
import { RoleBasedAccessDemo } from "./RoleBasedAccessDemo";

export function InteractiveDemo() {
  return (
    <section id="interactivedemo" className="py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Interactive Demos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DynamicCalendar />
          <AttendanceTrackerDemo />
          <RoleBasedAccessDemo />
        </div>
      </div>
    </section>
  )
}

