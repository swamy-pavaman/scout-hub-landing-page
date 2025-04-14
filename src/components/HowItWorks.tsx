
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Tasks",
      description: "Easily create and assign scouting tasks to your team members with detailed instructions and priorities."
    },
    {
      number: "02",
      title: "Collect Data",
      description: "Scouts collect field data using our mobile app, including photos, notes, and structured assessments."
    },
    {
      number: "03",
      title: "Analyze Results",
      description: "Review submitted data, identify trends, and generate comprehensive reports to guide your decisions."
    },
    {
      number: "04",
      title: "Take Action",
      description: "Implement targeted interventions based on scouting insights to optimize crop health and yield."
    }
  ];

  return (
    <section id="how-it-works" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">How ScoutHub Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process helps you implement effective scouting practices across your agricultural operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm h-full">
                <div className="text-4xl font-bold text-scouthub-green/20 mb-4">{step.number}</div>
                <h3 className="heading-sm mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-1 bg-scouthub-green/30 z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="heading-sm mb-4">See ScoutHub in action</h3>
            <p className="text-gray-600 mb-6">
              Book a personalized demo with our product specialists to see how ScoutHub can transform your agricultural scouting operations.
            </p>
            <Button className="bg-scouthub-green hover:bg-scouthub-darkGreen text-white px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
