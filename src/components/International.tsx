import React from 'react';
import { MapPin, DollarSign, Calendar, Plane } from 'lucide-react';

const International: React.FC = () => {
  const opportunities = [
    {
      country: "United Arab Emirates",
      flag: "🇦🇪",
      positions: "Layanan Pelanggan, IT Support, Perhotelan",
      salary: "$2,000 - $4,500",
      demand: "Tinggi",
      image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      country: "Singapore",
      flag: "🇸🇬",
      positions: "Pengembangan Software, Keuangan, Kesehatan",
      salary: "$3,500 - $7,000",
      demand: "Sangat Tinggi",
      image: "https://images.pexels.com/photos/1878291/pexels-photo-1878291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      country: "Japan",
      flag: "🇯🇵",
      positions: "Manufaktur, Teknologi, Layanan Perawatan",
      salary: "$2,500 - $5,000",
      demand: "Tinggi",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      country: "Saudi Arabia",
      flag: "🇸🇦",
      positions: "Engineering, Konstruksi, Kesehatan",
      salary: "$3,000 - $6,000",
      demand: "Sangat Tinggi",
      image: "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const benefits = [
    {
      icon: Plane,
      title: "Dukungan Migrasi Lengkap",
      description: "Bantuan visa, dokumentasi, dan orientasi pra-keberangkatan"
    },
    {
      icon: DollarSign,
      title: "Gaji Kompetitif",
      description: "Potensi penghasilan lebih tinggi dengan peluang pendapatan bebas pajak"
    },
    {
      icon: Calendar,
      title: "Fleksibilitas Kontrak",
      description: "Kontrak 2-5 tahun dengan opsi perpanjangan dan reuni keluarga"
    },
    {
      icon: MapPin,
      title: "Kemajuan Karir",
      description: "Pengalaman internasional dan peluang networking global"
    }
  ];

  return (
    <section id="international" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Peluang Karir Internasional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Perluas wawasan Anda dengan posisi internasional bergaji tinggi di seluruh dunia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <img 
                src={opportunity.image}
                alt={opportunity.country}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-2">{opportunity.flag}</span>
                  <h3 className="text-lg font-bold text-gray-900">{opportunity.country}</h3>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-gray-700">Posisi:</span>
                    <p className="text-gray-600">{opportunity.positions}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Rentang Gaji:</span>
                    <p className="text-green-600 font-semibold">{opportunity.salary}/month</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Permintaan:</span>
                    <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                      opportunity.demand === 'Sangat Tinggi' 
                        ? 'bg-red-100 text-red-700' 
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {opportunity.demand}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default International;