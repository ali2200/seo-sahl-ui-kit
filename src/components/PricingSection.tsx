
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'المبتدئ',
      price: 'مجاني',
      period: '',
      description: 'مثالي للمواقع الصغيرة والمدونات الشخصية',
      features: [
        'تحليل أساسي للموقع',
        'بحث 10 كلمات مفتاحية شهرياً',
        'تقرير شهري واحد',
        'دعم عبر البريد الإلكتروني',
        'إعدادات SEO أساسية'
      ],
      buttonText: 'ابدأ مجاناً',
      popular: false,
      buttonStyle: 'outline'
    },
    {
      name: 'المحترف',
      price: '299',
      period: 'ريال / شهرياً',
      description: 'الأنسب للشركات الصغيرة والمتوسطة',
      features: [
        'تحليل شامل ومتقدم',
        'بحث غير محدود للكلمات',
        'تقارير أسبوعية',
        'دعم مباشر 24/7',
        'إنشاء محتوى بالذكاء الاصطناعي',
        'تحليل المنافسين',
        'تتبع الترتيب',
        'تكامل مع WordPress'
      ],
      buttonText: 'اشترك الآن',
      popular: true,
      buttonStyle: 'default'
    },
    {
      name: 'المؤسسات',
      price: '899',
      period: 'ريال / شهرياً',
      description: 'حلول متكاملة للشركات الكبيرة',
      features: [
        'جميع مميزات الخطة المحترفة',
        'تحليل متعدد المواقع',
        'تقارير مخصصة',
        'مدير حساب مخصص',
        'تدريب فريق العمل',
        'API متكامل',
        'نسخ احتياطية تلقائية',
        'أولوية في الدعم'
      ],
      buttonText: 'تواصل معنا',
      popular: false,
      buttonStyle: 'outline'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-hacen font-bold text-primary mb-6">
            خطط الأسعار
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto leading-relaxed">
            اختر الخطة التي تناسب احتياجاتك وميزانيتك
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-primary shadow-xl scale-105 bg-gradient-to-br from-white to-primary/5' 
                  : 'border-0 shadow-md bg-white'
              }`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-arabic font-bold">
                    الأكثر شعبية
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-hacen font-bold text-gray-800 mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary font-hacen">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 font-arabic text-sm block mt-1">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 font-arabic text-sm leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-arabic text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  variant={plan.buttonStyle as any}
                  className={`w-full font-arabic text-lg py-6 ${
                    plan.buttonStyle === 'default' 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  <Search className="w-5 h-5 ml-2" />
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 space-x-reverse bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-600 font-arabic">ضمان استرداد المال لمدة</span>
            <span className="text-2xl font-bold text-secondary font-hacen">30</span>
            <span className="text-gray-600 font-arabic">يوم</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
