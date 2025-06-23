
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Settings, Calendar, User } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      icon: Search,
      title: 'بحث الكلمات المفتاحية',
      description: 'اكتشف أفضل الكلمات المفتاحية لموقعك وحلل المنافسة',
      features: ['تحليل شامل للكلمات', 'مراقبة المنافسين', 'اقتراحات ذكية'],
      color: 'bg-blue-500'
    },
    {
      icon: Settings,
      title: 'تحليل الموقع',
      description: 'فحص شامل لموقعك واكتشاف نقاط القوة والضعف',
      features: ['تدقيق تقني شامل', 'تحليل الأداء', 'تقارير مفصلة'],
      color: 'bg-green-500'
    },
    {
      icon: Calendar,
      title: 'إنشاء المحتوى',
      description: 'أنشئ محتوى محسن لمحركات البحث بالذكاء الاصطناعي',
      features: ['كتابة ذكية', 'تحسين تلقائي', 'أفكار إبداعية'],
      color: 'bg-purple-500'
    },
    {
      icon: User,
      title: 'تحليل المنافسين',
      description: 'راقب منافسيك واكتشف استراتيجياتهم الناجحة',
      features: ['مراقبة الترتيب', 'تحليل الروابط', 'استراتيجيات المنافسين'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-hacen font-bold text-primary mb-6">
            أدوات احترافية
          </h2>
          <p className="text-xl text-gray-600 font-arabic max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الأدوات المتخصصة لتحسين موقعك في محركات البحث
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-arabic text-gray-800 group-hover:text-primary transition-colors duration-300">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 font-arabic mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <div className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-500 font-arabic">
                      <div className="w-2 h-2 bg-primary rounded-full ml-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 space-x-reverse bg-white rounded-full px-8 py-4 shadow-lg">
            <span className="text-gray-600 font-arabic">و أكثر من</span>
            <span className="text-3xl font-bold text-primary font-hacen">50</span>
            <span className="text-gray-600 font-arabic">أداة متخصصة أخرى</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
