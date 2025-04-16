
import { CheckCircle2, Calendar, ClipboardList, BarChart3, Users, Cloud } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <ClipboardList className="h-10 w-10 text-scouthub-green" />,
      title: "Task Management",
      description: "Create, assign, and track scouting tasks across all your fields and teams."
    },
    {
      icon: <Calendar className="h-10 w-10 text-scouthub-green" />,
      title: "Scheduling",
      description: "Plan and schedule regular inspections and other farming activities with our intuitive calendar."
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-scouthub-green" />,
      title: "Field Monitoring",
      description: "Record and track field conditions, pest sightings, crop health, and more with customizable forms."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-scouthub-green" />,
      title: "Data Analytics",
      description: "Generate reports and insights based on your scouting data to make informed decisions."
    },
    {
      icon: <Users className="h-10 w-10 text-scouthub-green" />,
      title: "Team Collaboration",
      description: "Improve communication between scouts, managers, and farm operators with real-time updates."
    },
    {
      icon: <Cloud className="h-10 w-10 text-scouthub-green" />,
      title: "Mobile Access",
      description: "Access ScoutHub from anywhere with our mobile app, with offline capabilities for remote fields."
    },
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Everything You Need for Efficient Agricultural Scouting</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools necessary to streamline your agricultural scouting operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="heading-sm mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
