
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small farms with basic scouting needs.",
      features: [
        "Up to 5 users",
        "10 fields",
        "Task management",
        "Basic reporting",
        "Mobile app access",
        "Email support"
      ],
      highlighted: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      description: "Ideal for growing operations with advanced needs.",
      features: [
        "Up to 15 users",
        "Unlimited fields",
        "Advanced task management",
        "Comprehensive reporting",
        "Team collaboration tools",
        "Data analytics",
        "Offline mode",
        "Priority support"
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large agricultural businesses.",
      features: [
        "Unlimited users",
        "Unlimited fields",
        "Custom integrations",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom training"
      ],
      highlighted: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that's right for your agricultural operation. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl border ${
                tier.highlighted 
                  ? 'border-scouthub-green shadow-lg ring-1 ring-scouthub-green' 
                  : 'border-gray-200 shadow-sm'
              } p-8 relative`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-0 right-0 transform -translate-y-1/2">
                  <div className="bg-scouthub-green text-white text-sm font-medium px-4 py-1 rounded-full w-fit mx-auto">
                    Most Popular
                  </div>
                </div>
              )}
              
              <h3 className="heading-sm mb-2">{tier.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                {tier.name !== "Enterprise" && <span className="text-gray-600 ml-2">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-scouthub-green shrink-0 mt-0.5" />
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  tier.highlighted 
                    ? 'bg-scouthub-green hover:bg-scouthub-darkGreen text-white' 
                    : 'bg-white border-2 border-scouthub-green text-scouthub-green hover:bg-scouthub-green hover:text-white'
                }`}
              >
                {tier.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
