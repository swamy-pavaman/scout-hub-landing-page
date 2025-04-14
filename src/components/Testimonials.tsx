
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "ScoutHub has revolutionized how we manage our scouting operations. We've reduced reporting time by 65% and improved our response time to field issues.",
      name: "Sarah Johnson",
      title: "Farm Operations Manager",
      company: "Green Valley Farms",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "The task management system in ScoutHub has eliminated confusion among our team. Everyone knows exactly what they need to do and when.",
      name: "Michael Rodriguez",
      title: "Agricultural Director",
      company: "Harvest Solutions Inc.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    },
    {
      quote: "Being able to access all of our scouting data in one place has made decision-making so much easier. We can quickly identify trends and take action.",
      name: "Emma Thompson",
      title: "Chief Agronomist",
      company: "Fieldview Agricultural Services",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
    }
  ];

  return (
    <section id="testimonials" className="section bg-gradient-to-b from-white to-green-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-gray-900 mb-4">Trusted by Agricultural Professionals</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our customers about how ScoutHub has transformed their agricultural operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md relative">
              <Quote className="h-8 w-8 text-scouthub-green opacity-20 absolute top-6 left-6" />
              <div className="mb-8">
                <p className="text-gray-700 italic relative z-10 pl-8">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
