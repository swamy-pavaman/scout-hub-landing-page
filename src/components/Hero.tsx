
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-green-50 pt-10 md:pt-20 pb-16 md:pb-32 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="heading-xl text-gray-900">
            Streamline Your <span className="text-scouthub-green">Agricultural Scouting</span> Operations
          </h1>
          <p className="text-lg md:text-xl text-gray-600 md:pr-12">
            ScoutHub helps agricultural companies manage scouting tasks, track field conditions, and make data-driven decisions all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-scouthub-green hover:bg-scouthub-darkGreen text-white text-lg px-6 py-6">
              Get Started Free
            </Button>
            <Button variant="outline" className="border-scouthub-green text-scouthub-green hover:bg-scouthub-green hover:text-white text-lg px-6 py-6">
              Request a Demo <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          <div className="pt-4 text-sm text-gray-500">
            <p></p>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 relative">
          <div className="bg-white p-4 rounded-xl shadow-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Agricultural field scouting" 
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-scouthub-green"><path d="M12 22c6.5-6.5 6-13 0-19-6 6-6.5 12.5 0 19z"></path><path d="M5.5 8.5c1.5 3.5 2 5.5 0 8 3.5-2.5 7.5-2.5 11 0-2-2.5-1.5-4.5 0-8-3.5 2.5-7.5 2.5-11 0z"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Task completed</p>
                  <p className="text-xs text-gray-500">Crops inspection at Field #24</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/3 -left-10 bg-white py-3 px-4 rounded-lg shadow-lg hidden md:flex items-center gap-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="text-scouthub-blue"><path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path><path d="m9 11 3 3L22 4"></path></svg>
            </div>
            <div>
              <p className="text-sm font-medium">10 Tasks</p>
              <p className="text-xs text-gray-500">Completed Today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
