import React from 'react';
import { Star, MapPin, Briefcase } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sari Dewi",
      position: "Software Engineer",
      company: "Tech Corp Singapore",
      location: "Singapore 🇸🇬",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "LPK Grand Wisata tidak hanya mengajarkan skill teknis, tapi juga mempersiapkan saya untuk bekerja di lingkungan internasional. Sekarang saya bekerja sebagai Software Engineer di Singapore dengan gaji yang sangat memuaskan!",
      salary: "$6,500/month",
      program: "Full-Stack Development",
      rating: 5
    },
    {
      name: "Budi Santoso",
      position: "Project Manager",
      company: "Dubai Construction Ltd",
      location: "Dubai, UAE 🇦🇪",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Setelah lulus dari program Business Management, saya langsung mendapat kesempatan kerja di Dubai. Training yang diberikan sangat praktis dan sesuai dengan kebutuhan industri internasional.",
      salary: "$4,200/month",
      program: "Business & Management",
      rating: 5
    },
    {
      name: "Maya Sari",
      position: "Customer Service Lead",
      company: "Global Call Center",
      location: "Kuala Lumpur, Malaysia 🇲🇾",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Program Customer Service Excellence benar-benar mengubah karir saya. Dari lulusan SMA, sekarang saya menjadi Team Leader di Malaysia. Terima kasih LPK Grand Wisata!",
      salary: "$2,800/month",
      program: "Customer Service Excellence",
      rating: 5
    },
    {
      name: "Ahmad Fauzi",
      position: "Quality Control Engineer",
      company: "Automotive Manufacturing",
      location: "Jakarta, Indonesia 🇮🇩",
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Saya memilih program Technical & Engineering untuk karir domestik. Hasilnya luar biasa! Sekarang bekerja di perusahaan automotive terkemuka dengan posisi yang saya impikan.",
      salary: "Rp 18,000,000/month",
      program: "Technical & Engineering",
      rating: 5
    },
    {
      name: "Rina Wati",
      position: "IT Support Specialist",
      company: "Healthcare Solutions",
      location: "Riyadh, Saudi Arabia 🇸🇦",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "LPK Grand Wisata memberikan pelatihan yang komprehensif, mulai dari technical skills sampai cultural adaptation. Ini sangat membantu saya sukses bekerja di Saudi Arabia.",
      salary: "$3,800/month",
      program: "IT & Software Development",
      rating: 5
    },
    {
      name: "Dedi Kurniawan",
      position: "Operations Manager",
      company: "Logistics International",
      location: "Surabaya, Indonesia 🇮🇩",
      image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Meskipun saya memilih karir domestik, kualitas training LPK Grand Wisata setara dengan standar internasional. Sekarang saya memimpin tim di perusahaan logistik terbesar di Jawa Timur.",
      salary: "Rp 25,000,000/month",
      program: "Business & Management",
      rating: 5
    }
  ];

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kisah Sukses Profesional Indonesia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimoni nyata dari lulusan kami yang kini sukses berkarir di seluruh dunia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{testimonial.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{testimonial.program}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-600 mr-2">Salary:</span>
                  <span className="font-bold text-green-600">Gaji: {testimonial.salary}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Baca Kisah Sukses Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;