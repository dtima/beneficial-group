import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Eben Ebot Flavius",
      position: "Founder/CEO",
      initials: "EEF"
    },
    {
      id: 2,
      name: "Elad Patricia Efundu",
      position: "Operation Manager",
      initials: "EPE"
    },
    {
      id: 3,
      name: "Enombe Louis Sandah",
      position: "Business and Legal",
      initials: "ELS"
    },
    {
      id: 4,
      name: "Eyong Ayuk Andreas",
      position: "Legal Advisor",
      initials: "EAA"
    },
    {
      id: 5,
      name: "Albert E. Makia",
      position: "Board Member",
      initials: "AEM"
    },
    {
      id: 6,
      name: "Maureen M. Yankee",
      position: "HR Manager",
      initials: "MMY"
    }
  ];

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Management Team</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center animate-fade-up"
                style={{ animationDelay: `${member.id * 100}ms` }}
              >
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="bg-primary text-white text-lg">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;