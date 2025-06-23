
import { Button } from '@/components/ui/button';
import { Search, ArrowLeft } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right animate-slide-left">
            <h1 className="text-5xl lg:text-7xl font-hacen font-bold text-primary mb-6 leading-tight animate-fade-up">
              SEO Sahl
            </h1>
            <h2 className="text-2xl lg:text-3xl font-arabic font-bold text-gray-800 mb-6 animate-fade-up animate-delay-100">
              الحل الشامل لتحسين محركات البحث
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 font-arabic leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-up animate-delay-200">
              منصة متكاملة تساعدك على تحسين موقعك في محركات البحث، تحليل الكلمات المفتاحية، 
              وإنشاء محتوى محسن لـ SEO باللغة العربية بسهولة ودقة عالية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up animate-delay-300">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 font-arabic hover:scale-105 transition-transform duration-200">
                <Search className="w-5 h-5 ml-2" />
                ابدأ التحليل مجاناً
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-arabic border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-200">
                شاهد العرض التقديمي
                <ArrowLeft className="w-5 h-5 mr-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 animate-fade-up animate-delay-400">
              <div className="text-center animate-bounce-in animate-delay-500">
                <div className="text-3xl font-bold text-primary font-hacen animate-pulse-custom">+50</div>
                <div className="text-gray-600 font-arabic">أداة متخصصة</div>
              </div>
              <div className="text-center animate-bounce-in animate-delay-600">
                <div className="text-3xl font-bold text-secondary font-hacen animate-pulse-custom">+1000</div>
                <div className="text-gray-600 font-arabic">عميل راضي</div>
              </div>
              <div className="text-center animate-bounce-in animate-delay-700">
                <div className="text-3xl font-bold text-primary font-hacen animate-pulse-custom">24/7</div>
                <div className="text-gray-600 font-arabic">دعم فني</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-slide-right">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 animate-bounce-in animate-delay-300 hover:shadow-3xl transition-shadow duration-300">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800 font-arabic">تحليل الموقع</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 font-arabic">نقاط SEO</span>
                    <span className="text-2xl font-bold text-green-600 animate-fade-up animate-delay-800">95/100</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full animate-slide-right animate-delay-900" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg animate-fade-up animate-delay-1000 hover:bg-green-100 transition-colors duration-200">
                  <span className="text-green-800 font-arabic">الكلمات المفتاحية</span>
                  <span className="text-green-600 font-bold">ممتاز</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg animate-fade-up animate-delay-1100 hover:bg-blue-100 transition-colors duration-200">
                  <span className="text-blue-800 font-arabic">سرعة التحميل</span>
                  <span className="text-blue-600 font-bold">جيد</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg animate-fade-up animate-delay-1200 hover:bg-yellow-100 transition-colors duration-200">
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
