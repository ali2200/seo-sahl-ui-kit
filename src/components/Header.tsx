
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, User, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'المقالات', href: '/articles' },
    { name: 'الأدوات', href: '#tools' },
    { name: 'المميزات', href: '#features' },
    { name: 'الخطط', href: '#pricing' }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return location.pathname === '/' && window.location.hash === href;
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#') && location.pathname !== '/') {
      // If it's an anchor link and we're not on home page, go to home page first
      window.location.href = '/' + href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 animate-slide-bottom">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 space-x-reverse animate-bounce-in">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-custom">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-hacen font-bold text-primary">SEO Sahl</h1>
              <p className="text-xs text-gray-600 font-arabic">الحل الأمثل للـ SEO</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navItems.map((item, index) => (
              <div key={item.name} className="animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                {item.href.startsWith('#') ? (
                  <a
                    href={item.href}
                    className={`text-gray-700 hover:text-primary transition-all duration-300 font-arabic font-medium relative group ${
                      isActive(item.href) ? 'text-primary' : ''
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-primary transition-all duration-300 font-arabic font-medium relative group ${
                      isActive(item.href) ? 'text-primary' : ''
                    }`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Button variant="outline" className="font-arabic animate-slide-right hover:scale-105 transition-transform duration-200">
              <User className="w-4 h-4 ml-2" />
              تسجيل الدخول
            </Button>
            <Button className="bg-primary hover:bg-primary/90 font-arabic animate-slide-right animate-delay-100 hover:scale-105 transition-transform duration-200">
              ابدأ مجاناً
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden animate-bounce-in hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-slide-bottom">
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item, index) => (
                <div key={item.name} className="animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  {item.href.startsWith('#') ? (
                    <a
                      href={item.href}
                      className={`text-gray-700 hover:text-primary transition-colors duration-200 font-arabic font-medium ${
                        isActive(item.href) ? 'text-primary' : ''
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`text-gray-700 hover:text-primary transition-colors duration-200 font-arabic font-medium ${
                        isActive(item.href) ? 'text-primary' : ''
                      }`}
                      onClick={() => handleNavClick(item.href)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <Button variant="outline" className="font-arabic animate-fade-up animate-delay-500">
                  <User className="w-4 h-4 ml-2" />
                  تسجيل الدخول
                </Button>
                <Button className="bg-primary hover:bg-primary/90 font-arabic animate-fade-up animate-delay-600">
                  ابدأ مجاناً
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
