import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import International from './components/International';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Programs />
        <International />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppButton />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold text-sm">GW</span>
                </div>
                <span className="font-bold text-lg">LPK Grand Wisata</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Indonesia's premier job training institute connecting talented individuals
                to opportunities worldwide since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">IT & Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business & Management</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Customer Service Excellence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical & Engineering</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Opportunities</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Domestic Jobs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">International Placement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Consultation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Visa Assistance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>6285157606767</li>
                <li>info@lpkgrandwisata.id</li>
                <li>Jakarta • Surabaya • Medan</li>
                <li>Mon-Sat: 8AM-8PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 LPK Grand Wisata. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Support</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;