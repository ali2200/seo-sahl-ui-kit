
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-hacen font-bold text-primary mb-6 leading-tight">
              SEO Sahl
            </h1>
            <h2 className="text-2xl lg:text-3xl font-arabic font-bold text-gray-800 mb-6">
              الحل الشامل لتحسين محركات البحث
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 font-arabic leading-relaxed max-w-2xl mx-auto lg:mx-0">
              منصة متكاملة تساعدك على تحسين موقعك في محركات البحث، تحليل الكلمات المفتاحية، 
              وإنشاء محتوى محسن لـ SEO باللغة العربية بسهولة ودقة عالية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 font-arabic">
                <Search className="w-5 h-5 ml-2" />
                ابدأ التحليل مجاناً
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-arabic border-2 border-primary text-primary hover:bg-primary hover:text-white">
                شاهد العرض التقديمي
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-hacen">+50</div>
                <div className="text-gray-600 font-arabic">أداة متخصصة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary font-hacen">+1000</div>
                <div className="text-gray-600 font-arabic">عميل راضي</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-hacen">24/7</div>
                <div className="text-gray-600 font-arabic">دعم فني</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-in">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 font-arabic">تحليل الموقع</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-arabic">نقاط SEO</span>
                    <span className="text-2xl font-bold text-green-600">95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-800 font-arabic">الكلمات المفتاحية</span>
                  <span className="text-green-600 font-bold">ممتاز</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-800 font-arabic">سرعة التحميل</span>
                  <span className="text-blue-600 font-bold">جيد</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-800 font-arabic">الروابط الداخلية</span>
                  <span className="text-yellow-600 font-bold">يحتاج تحسين</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
