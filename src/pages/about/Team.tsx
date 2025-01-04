import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Operations Director",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Environmental Officer",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Transport Manager",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Our Team</h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
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