import {
  BarChart,
  Bell,
  Calendar,
  ClipboardList,
  Clock,
  Lock,
  Users,
} from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";

const projects = [
  {
    title: "Class Notifications for Teachers",
    description:
      "Teachers can send instant notifications and updates to students, ensuring everyone stays informed.",
    icon: <Bell />,
  },
  {
    title: "Next-Day Reminders",
    description:
      "Students receive daily reminders about their next day's routine, helping them stay prepared and organized.",
    icon: <Clock />,
  },
  {
    title: "Class Count Summary",
    description:
      "View comprehensive class completion statistics to track progress and identify areas for improvement.",
    icon: <BarChart />,
  },
  {
    title: "Attendance Tracking",
    description:
      "Real-time attendance tracking allows for accurate and efficient record-keeping.",
    icon: <ClipboardList />,
  },
  {
    title: "Exam Calendar",
    description:
      "Class Representatives can update important dates, which are clearly displayed for all students.",
    icon: <Calendar />,
  },
  {
    title: "Extra Classes",
    description:
      "Teachers can easily schedule additional classes during free periods to provide extra support.",
    icon: <Users />,
  },
  {
    title: "Controlled Access",
    description:
      "Role-based access ensures that Class Representatives and teachers have appropriate permissions.",
    icon: <Lock />,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 "
    >
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
