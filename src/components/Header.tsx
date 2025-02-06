import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { Input } from "./ui/Input";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
    console.log('Navigating to:', path);
  };

  return (
    <>
      <div className={`sticky top-0 z-50 w-full ${
        isScrolled ? "bg-white/80 backdrop-blur-sm" : "bg-white"
      }`}>
        <div className="container flex h-16 items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-6">
            {/* Menu Button (Mobile) */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Logo */}
            <button
              onClick={() => handleNavigation('/')}
              className="text-blue-500 font-bold text-2xl"
            >
              AutoParts
            </button>

            {/* Navigation Items (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleNavigation('/')}
                className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation('/catalog')}
                className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                Catalog
              </button>
              <button
                onClick={() => handleNavigation('/brands')}
                className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                Brands
              </button>
              <button
                onClick={() => handleNavigation('/garage')}
                className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
              >
                My Garage
              </button>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex relative w-40 lg:w-64">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search parts..." 
                className="pl-8"
              />
            </div>

            {/* Cart */}
            <button
              onClick={() => handleNavigation('/cart')}
              className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Account */}
            <button
              onClick={() => handleNavigation('/account')}
              className="text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bg-white shadow-lg z-40">
          <div className="flex flex-col p-4 space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              className="w-full text-left text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/catalog')}
              className="w-full text-left text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Catalog
            </button>
            <button
              onClick={() => handleNavigation('/brands')}
              className="w-full text-left text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              Brands
            </button>
            <button
              onClick={() => handleNavigation('/garage')}
              className="w-full text-left text-black p-2 rounded hover:bg-blue-500 hover:text-white"
            >
              My Garage
            </button>
            {/* Mobile Search */}
            <div className="relative w-full sm:hidden">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Search parts..." 
                className="pl-8 w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;