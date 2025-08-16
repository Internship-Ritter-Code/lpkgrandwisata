import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Tips Sukses Wawancara Kerja di Perusahaan Multinasional",
      excerpt: "Pelajari strategi dan persiapan yang tepat untuk menghadapi wawancara kerja di perusahaan internasional. Dari persiapan dokumen hingga tips komunikasi yang efektif.",
      image: "https://images.pexels.com/photos/5439381/pexels-photo-5439381.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Tim LPK Grand Wisata",
      date: "15 Januari 2025",
      readTime: "5 menit",
      category: "Tips Karir"
    },
    {
      id: 2,
      title: "Peluang Kerja Terbesar di Timur Tengah untuk Profesional Indonesia",
      excerpt: "Eksplorasi mendalam tentang sektor-sektor yang paling menjanjikan di UAE dan Saudi Arabia, termasuk persyaratan, gaji, dan benefit yang ditawarkan.",
      image: "https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Ahmad Fauzi",
      date: "12 Januari 2025",
      readTime: "8 menit",
      category: "Peluang Internasional"
    },
    {
      id: 3,
      title: "Skill Digital yang Paling Dicari Tahun 2025",
      excerpt: "Analisis komprehensif tentang keterampilan teknologi yang paling diminati oleh perusahaan global, beserta roadmap pembelajaran yang praktis.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Sari Dewi",
      date: "10 Januari 2025",
      readTime: "6 menit",
      category: "Teknologi"
    },
    {
      id: 4,
      title: "Panduan Lengkap Adaptasi Budaya Kerja di Singapura",
      excerpt: "Memahami etika kerja, komunikasi bisnis, dan norma-norma profesional di Singapura untuk memaksimalkan kesuksesan karir Anda.",
      image: "https://images.pexels.com/photos/1878291/pexels-photo-1878291.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Maya Sari",
      date: "8 Januari 2025",
      readTime: "7 menit",
      category: "Budaya Kerja"
    },
    {
      id: 5,
      title: "Strategi Negosiasi Gaji untuk Fresh Graduate",
      excerpt: "Teknik-teknik praktis untuk menegosiasikan paket kompensasi yang adil, bahkan sebagai fresh graduate yang baru memasuki dunia kerja.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Budi Santoso",
      date: "5 Januari 2025",
      readTime: "4 menit",
      category: "Pengembangan Karir"
    },
    {
      id: 6,
      title: "Tren Industri Manufaktur Jepang dan Peluang untuk Tenaga Kerja Indonesia",
      excerpt: "Insight mendalam tentang perkembangan industri manufaktur Jepang dan bagaimana profesional Indonesia dapat memanfaatkan peluang ini.",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=400",
      author: "Rina Wati",
      date: "3 Januari 2025",
      readTime: "9 menit",
      category: "Industri"
    }
  ];

  const categories = [
    { name: "Semua", count: 6, active: true },
    { name: "Tips Karir", count: 1, active: false },
    { name: "Peluang Internasional", count: 1, active: false },
    { name: "Teknologi", count: 1, active: false },
    { name: "Budaya Kerja", count: 1, active: false },
    { name: "Pengembangan Karir", count: 1, active: false },
    { name: "Industri", count: 1, active: false }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Blog & Artikel Karir
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dapatkan wawasan terbaru tentang dunia kerja, tips karir, dan peluang internasional dari para ahli
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                category.active
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Artikel Unggulan
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium mr-4">
                    {blogPosts[0].category}
                  </span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{blogPosts[0].date}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">{blogPosts[0].author}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all flex items-center group">
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.date}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="h-3 w-3 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-600">{post.author}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
                    Baca
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all">
            Muat Artikel Lainnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;