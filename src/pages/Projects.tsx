import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, TreePine, Factory, Users, Target, Leaf } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sustainable Bamboo Cultivation",
      category: "Agriculture & Manufacturing",
      description: "A comprehensive initiative focusing on sustainable bamboo cultivation and product diversification, creating employment opportunities while promoting environmental conservation.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      details: {
        location: "Kumba 1, MEME Division - South West Region, Cameroon",
        investment: "$850,000",
        impact: "385 Direct & Indirect Jobs",
        goals: [
          "Establish sustainable bamboo plantations",
          "Expand product line (skewers, chopsticks, packaging)",
          "Implement eco-friendly manufacturing",
          "Provide youth training programs",
          "Form strategic partnerships"
        ]
      }
    },
    {
      id: 2,
      title: "Toothpick Production Initiative",
      category: "Manufacturing",
      description: "An innovative manufacturing project producing high-quality wooden toothpicks to serve Cameroon's population and beyond, utilizing sustainable practices and automated systems.",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
      details: {
        location: "Cameroon",
        capacity: "1.5 million toothpicks per day",
        impact: "Serving 25+ million population",
        goals: [
          "Automated manufacturing system",
          "Solar-powered operations",
          "Sustainable wood sourcing",
          "Quality control excellence",
          "International market expansion"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-accent">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Our Projects</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="relative h-48 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      {project.id === 1 ? (
                        <TreePine className="w-5 h-5 text-primary" />
                      ) : (
                        <Factory className="w-5 h-5 text-primary" />
                      )}
                      <span className="text-sm font-medium text-primary">
                        {project.category}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{project.details.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm">{project.details.impact}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-primary" />
                        Key Goals
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                        {project.details.goals.map((goal, index) => (
                          <li key={index}>{goal}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;