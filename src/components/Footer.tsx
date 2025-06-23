
import { Search, Calendar, User, Settings } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'الأدوات',
      links: [
        'بحث الكلمات المفتاحية',
        'تحليل الموقع',
        'إنشاء المحتوى',
        'تحليل المنافسين',
        'تحسين الصور'
      ]
    },
    {
      title: 'الخدمات',
      links: [
        'استشارات SEO',
        'تحليل شامل',
        'إدارة المحتوى',
        'التدريب',
        'الدعم الفني'
      ]
    },
    {
      title: 'الشركة',
      links: [
        'من نحن',
        'فريق العمل',
        'المدونة',
        'الشراكات',
        'الوظائف'
      ]
    },
    {
      title: 'المساعدة',
      links: [
        'مركز المساعدة',
        'الأسئلة الشائعة',
        'تواصل معنا',
        'الدعم التقني',
        'التقارير'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-hacen font-bold text-white">SEO Sahl</h1>
                <p className="text-sm text-gray-400 font-arabic">الحل الأمثل للـ SEO</p>
              </div>
            </div>
            
            <p className="text-gray-400 font-arabic leading-relaxed mb-6 max-w-md">
              منصة شاملة لتحسين محركات البحث باللغة العربية. نساعدك على تحقيق أفضل النتائج في جوجل وزيادة الزيارات إلى موقعك.
            </p>

            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400 font-arabic">خدمة 24/7</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-400 font-arabic">دعم عربي</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-hacen font-bold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-gray-800 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-hacen mb-2">+50</div>
            <div className="text-gray-400 font-arabic text-sm">أداة متخصصة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary font-hacen mb-2">+1000</div>
            <div className="text-gray-400 font-arabic text-sm">عميل راضي</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary font-hacen mb-2">99%</div>
            <div className="text-gray-400 font-arabic text-sm">معدل النجاح</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary font-hacen mb-2">24/7</div>
            <div className="text-gray-400 font-arabic text-sm">دعم فني</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 space-x-reverse mb-4 md:mb-0">
              <span className="text-gray-400 font-arabic text-sm">
                © 2024 SEO Sahl. جميع الحقوق محفوظة
              </span>
            </div>
            
            <div className="flex items-center space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic text-sm">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic text-sm">
                شروط الاستخدام
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-arabic text-sm">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
