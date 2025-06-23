
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Settings, Calendar, User, ArrowLeft } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'تحليل شامل للموقع',
      description: 'فحص تقني متكامل لجميع جوانب موقعك مع تقارير مفصلة وتوصيات قابلة للتطبيق',
      icon: Settings,
      items: [
        'تحليل السرعة والأداء',
        'فحص الروابط المعطلة',
        'تحليل البنية التقنية',
        'تقييم المحتوى',
        'فحص الأمان'
      ]
    },
    {
      title: 'بحث الكلمات المفتاحية المتقدم',
      description: 'اكتشف أفضل الفرص لتحسين ترتيب موقعك مع تحليل عميق للمنافسة',
      icon: Search,
      items: [
        'بحث ذكي بالعربية',
        'تحليل صعوبة المنافسة',
        'اقتراحات الكلمات الطويلة',
        'تتبع الترتيب',
        'خريطة الكلمات المفتاحية'
      ]
    },
    {
      title: 'إنشاء المحتوى بالذكاء الاصطناعي',
      description: 'أنشئ محتوى عالي الجودة ومحسن لمحركات البحث باستخدام أحدث تقنيات الذكاء الاصطناعي',
      icon: Calendar,
      items: [
        'كتابة مقالات متخصصة',
        'تحسين تلقائي للـ SEO',
        'أفكار إبداعية للمحتوى',
        'تحليل قابلية القراءة',
        'تصدير متعدد الصيغ'
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-hacen font-bold text-primary mb-6">
            مميزات استثنائية
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto leading-relaxed">
            كل ما تحتاجه لتحسين موقعك في محركات البحث في مكان واحد
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} animate-fade-in`}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center ml-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-hacen font-bold text-gray-800">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-lg text-gray-600 font-arabic mb-8 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-8">
                  {feature.items.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full ml-3"></div>
                      <span className="text-gray-700 font-arabic">{item}</span>
                    </div>
                  ))}
                </div>

                <Button size="lg" className="bg-primary hover:bg-primary/90 font-arabic">
                  اكتشف المزيد
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </div>

              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} animate-slide-in`}>
                <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-xl">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-arabic text-gray-800">
                        {feature.title}
                      </CardTitle>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feature.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                          <span className="text-gray-700 font-arabic text-sm">{item}</span>
                          <div className="flex items-center space-x-2 space-x-reverse">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-green-600 text-sm font-arabic">مفعل</span>
                          </div>
                        </div>
                      ))}
                      <div className="text-center pt-4">
                        <span className="text-gray-500 font-arabic text-sm">
                          + {feature.items.length - 3} مميزات أخرى
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
