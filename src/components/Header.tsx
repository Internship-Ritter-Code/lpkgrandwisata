import { Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+62-800-CAREER-1</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>info@lpkgrandwisata.id</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Jakarta • Surabaya • Medan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">GW</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">LPK Grand Wisata</h1>
              <p className="text-xs text-gray-600">Jembatan Karir Masa Depan</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#beranda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Beranda
            </a>
            <a href="#program" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Program
            </a>
            <a href="#internasional" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Peluang Internasional
            </a>
            <a href="#testimoni" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Testimoni
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Kontak
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Beranda
              </a>
              <a href="#program" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Program
              </a>
              <a href="#internasional" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Peluang Internasional
              </a>
              <a href="#testimoni" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Testimoni
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Blog
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Kontak
              </a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full">
                Daftar Sekarang
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;