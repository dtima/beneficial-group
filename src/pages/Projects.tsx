import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sustainable Mining Initiative",
      category: "Mining",
      description: "Implementation of eco-friendly mining practices in the South West Region.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      id: 2,
      title: "Fleet Modernization",
      category: "Transport",
      description: "Upgrading our transport fleet with fuel-efficient vehicles.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    },
    {
      id: 3,
      title: "Reforestation Program",
      category: "Forestry",
      description: "Large-scale tree planting initiative in collaboration with local communities.",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Our Projects</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
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

export default Projects;