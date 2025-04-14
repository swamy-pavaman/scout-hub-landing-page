
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
        { name: "Demo", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Knowledge Base", href: "#" },
        { name: "Guides", href: "#" },
        { name: "Customer Stories", href: "#" },
        { name: "Webinars", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Security", href: "#" },
        { name: "GDPR", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <h2 className="text-scouthub-green text-xl font-bold flex items-center gap-2">
                <span className="bg-scouthub-green text-white p-1 rounded">SH</span>
                ScoutHub
              </h2>
            </div>
            <p className="text-gray-600 mb-6 pr-4">
              Streamlining agricultural scouting operations with powerful task management tools, field monitoring, and data analytics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-scouthub-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-scouthub-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-scouthub-green transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-scouthub-green transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-600 hover:text-scouthub-green transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              &copy; {currentYear} ScoutHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-scouthub-green text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-scouthub-green text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-scouthub-green text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
