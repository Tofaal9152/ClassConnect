import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const teamMembers = [
  {
    name: "Luba (CSE, RU)",
    image: "/luba.jpg",
  },
  {
    name: "Tofaal (CSE, RU)",
    image: "/tofaal.jpg",
  },
  {
    name: "Raaj (CSE, RU)",
    image: "/raaj.jpg",
  },
];

export default function Hero() {
  return (
    <BackgroundBeamsWithCollision>
      <section className="relative z-20 px-4 py-16 text-center">
        {/* Hero Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black dark:text-white">
          ClassConnect: Simplifying Class{" "}
          <span className="dark:text-purple-400">Management</span> and {""}
          <span className="dark:text-purple-400"> Communication</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          A modern approach to class coordination with instant updates and event
          calendars.
        </p>

        {/* Explore Poster Button */}
        <div className="mt-8">
          <Dialog>
            <DialogTrigger>
              <div className="relative inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-br from-blue-500 via-purple-500 to-purple-600 rounded-full shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50">
                Explore Poster
              </div>
            </DialogTrigger>
            <DialogContent className="h-[87vh] bg-gradient-to-br from-blue-500 to-purple-600 overflow-y-scroll">
              <img
                className="w-full max-h-[80vh] rounded-md object-contain"
                src="/poster.png"
                alt="ClassConnect Poster"
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold  dark:text-white">
            Team: Dynamic Alliance
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <Avatar className="h-20 w-20">
                  <AvatarImage
                    className="object-cover"
                    src={member.image}
                    alt={member.name}
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}
