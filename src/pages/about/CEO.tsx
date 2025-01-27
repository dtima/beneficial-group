import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UserRound } from "lucide-react";

const CEO = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <UserRound className="w-6 h-6 text-primary" />
            <h1 className="text-3xl font-bold">Meet Our CEO</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <img
              src="/lovable-uploads/2662a24b-d2de-447c-95af-6be83e215776.png"
              alt="CEO at a podium with US and diplomatic flags"
              className="w-full rounded-lg shadow-lg"
            />
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">Message from the CEO</h2>
                <p className="text-gray-600">
                  Welcome to Beneficial Group. As the CEO, I am proud to lead a company that puts sustainability and community development at the forefront of everything we do. Our commitment to responsible business practices in mining, transport, forestry, and agriculture continues to drive positive change in the South West Region.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  We envision a future where business success and environmental stewardship go hand in hand. Through innovative practices and community engagement, we're working to create sustainable growth that benefits all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CEO;