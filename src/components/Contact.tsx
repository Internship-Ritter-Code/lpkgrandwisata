import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import React from 'react';

const Contact: React.FC = () => {
  const offices = [
    {
      city: "Jakarta",
      address: "Jl. Sudirman No. 123, Jakarta Pusat 10220",
      phone: "021-1234-5678",
      email: "jakarta@lpkgrandwisata.id"
    },
    {
      city: "Surabaya",
      address: "Jl. Pemuda No. 45, Surabaya 60271",
      phone: "031-8765-4321",
      email: "surabaya@lpkgrandwisata.id"
    },
    {
      city: "Medan",
      address: "Jl. Gatot Subroto No. 67, Medan 20112",
      phone: "061-2468-1357",
      email: "medan@lpkgrandwisata.id"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Siap Memulai Perjalanan Karir Anda?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami hari ini untuk konsultasi gratis dan temukan program yang tepat untuk Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Informasi Kontak</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Hotline 24/7</p>
                    <p>6285157606767 (WhatsApp)</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p>info@lpkgrandwisata.id</p>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-medium">Jam Operasional</p>
                    <p>Senin - Sabtu: 08:00 - 20:00 WIB</p>
                    <p>Minggu: 10:00 - 16:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Lokasi Kantor Kami</h4>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                    <h5 className="font-bold text-gray-900 mb-2">{office.city}</h5>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 text-blue-600 mr-2" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 text-blue-600 mr-2" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Mengapa Pilih LPK Grand Wisata?</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">5,000+</div>
                  <div className="text-sm opacity-90">Kisah Sukses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Penempatan Kerja</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">25+</div>
                  <div className="text-sm opacity-90">Negara Mitra</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Tahun Pengalaman</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Hubungi Kami</h4>
              <p className="text-gray-600 mb-4">
                Untuk konsultasi gratis dan informasi program, hubungi kami melalui WhatsApp atau kunjungi kantor terdekat.
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent("Halo! Saya tertarik dengan program pelatihan di LPK Grand Wisata. Bisakah Anda memberikan informasi lebih lanjut?");
                  window.open(`https://wa.me/6285157606767?text=${message}`, '_blank');
                }}
                className="w-full bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;