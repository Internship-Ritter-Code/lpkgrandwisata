import React from 'react';
import { Code, Briefcase, Headphones, Wrench, Clock, Users } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      icon: Code,
      title: "IT & Pengembangan Perangkat Lunak",
      description: "Pengembangan full-stack, aplikasi mobile, dan teknologi terbaru",
      duration: "6-12 bulan",
      students: "1,200+",
      domestic: "85%",
      international: "15%",
      color: "blue"
    },
    {
      icon: Briefcase,
      title: "Bisnis & Manajemen",
      description: "Manajemen proyek, analisis bisnis, dan keterampilan kepemimpinan",
      duration: "3-6 bulan",
      students: "800+",
      domestic: "60%",
      international: "40%",
      color: "green"
    },
    {
      icon: Headphones,
      title: "Layanan Pelanggan Unggul",
      description: "Call center internasional dan manajemen hubungan klien",
      duration: "2-4 bulan",
      students: "1,500+",
      domestic: "30%",
      international: "70%",
      color: "purple"
    },
    {
      icon: Wrench,
      title: "Teknik & Engineering",
      description: "Manufaktur, kontrol kualitas, dan operasi teknis",
      duration: "4-8 bulan",
      students: "600+",
      domestic: "70%",
      international: "30%",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", icon: "text-blue-600", bar: "bg-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600", icon: "text-green-600", bar: "bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", icon: "text-purple-600", bar: "bg-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", icon: "text-orange-600", bar: "bg-orange-600" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Program Pelatihan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Program pelatihan komprehensif yang dirancang untuk mempersiapkan Anda menghadapi peluang karir domestik dan internasional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {programs.map((program, index) => {
            const colorClasses = getColorClasses(program.color);
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className={`${colorClasses.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <program.icon className={`h-8 w-8 ${colorClasses.icon}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm">{program.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span className="text-sm">{program.students} enrolled</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Penempatan Domestik</span>
                      <span className="font-semibold">{program.domestic}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${colorClasses.bar} h-2 rounded-full transition-all duration-1000`} 
                        style={{ width: program.domestic }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Penempatan Internasional</span>
                      <span className="font-semibold">{program.international}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${colorClasses.bar} h-2 rounded-full transition-all duration-1000`} 
                        style={{ width: program.international }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;