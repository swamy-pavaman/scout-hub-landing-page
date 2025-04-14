
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-scouthub-green text-xl font-bold flex items-center gap-2">
            <span className="bg-scouthub-green text-white p-1 rounded">Sasyak</span>
            
           
           
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-scouthub-green">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-scouthub-green">How It Works</a>
          <a href="#pricing" className="text-gray-600 hover:text-scouthub-green">Pricing</a>
          <a href="#testimonials" className="text-gray-600 hover:text-scouthub-green">Testimonials</a>
          {/* <Button variant="outline" className="border-scouthub-green text-scouthub-green hover:bg-scouthub-green hover:text-white">Login</Button>
          <Button className="bg-scouthub-green hover:bg-scouthub-darkGreen text-white">Get Started</Button> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full py-4 px-6 bg-white">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-scouthub-green" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-scouthub-green" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-scouthub-green" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-scouthub-green" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="border-scouthub-green text-scouthub-green hover:bg-scouthub-green hover:text-white w-full">Login</Button>
              <Button className="bg-scouthub-green hover:bg-scouthub-darkGreen text-white w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;   