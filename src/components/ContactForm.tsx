
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Demo request submitted",
        description: "We'll be in touch shortly to schedule your demo.",
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-scouthub-green p-10 text-white">
              <h2 className="heading-md mb-6">Ready to transform your agricultural scouting?</h2>
              <p className="mb-6">
                Request a personalized demo and see how ScoutHub can help streamline your operations.
              </p>
              
              <div className="space-y-4 mt-10">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 mt-0.5" />
                  <p>See the platform in action with real-world scenarios</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 mt-0.5" />
                  <p>Get your specific questions answered by our experts</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 mr-3 mt-0.5" />
                  <p>Learn about implementation and onboarding process</p>
                </div>
              </div>
            </div>
            
            <div className="p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-scouthub-green mb-4" />
                  <h3 className="heading-md mb-2">Thank you!</h3>
                  <p className="text-gray-600 mb-6">
                    Your demo request has been submitted successfully. One of our representatives will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="heading-sm mb-6 text-gray-900">Request a Demo</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <Input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        What are your main challenges?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-scouthub-green hover:bg-scouthub-darkGreen text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Demo"}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-4">
                      By submitting this form, you agree to our Privacy Policy and Terms of Service.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
