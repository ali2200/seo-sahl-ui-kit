
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Calendar, Eye, Edit, Trash2, Plus } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const articles = [
    {
      id: 1,
      title: 'كيفية تحسين محركات البحث للمواقع العربية',
      excerpt: 'دليل شامل لتحسين موقعك في محركات البحث باللغة العربية مع أفضل الممارسات والاستراتيجيات المجربة',
      category: 'SEO',
      date: '2024-01-15',
      readTime: '8 دقائق',
      views: 1250,
      status: 'published',
      keywords: ['SEO', 'تحسين محركات البحث', 'المواقع العربية'],
      thumbnail: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'استراتيجيات الكلمات المفتاحية الفعالة',
      excerpt: 'تعلم كيفية اختيار وتحليل الكلمات المفتاحية المناسبة لنيتش موقعك وزيادة الترافيك المستهدف',
      category: 'البحث عن الكلمات',
      date: '2024-01-12',
      readTime: '6 دقائق',
      views: 980,
      status: 'published',
      keywords: ['الكلمات المفتاحية', 'بحث الكلمات', 'استراتيجية SEO'],
      thumbnail: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'تحليل المنافسين في SEO',
      excerpt: 'كيفية دراسة منافسيك وتحليل استراتيجياتهم لتطوير خطة SEO أقوى وأكثر فعالية',
      category: 'تحليل المنافسين',
      date: '2024-01-10',
      readTime: '10 دقائق',
      views: 750,
      status: 'draft',
      keywords: ['تحليل المنافسين', 'استراتيجية SEO', 'تحليل المواقع'],
      thumbnail: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'أساسيات SEO التقني للمطورين',
      excerpt: 'الجوانب التقنية المهمة في تحسين محركات البحث التي يجب على كل مطور معرفتها',
      category: 'SEO التقني',
      date: '2024-01-08',
      readTime: '12 دقائق',
      views: 650,
      status: 'published',
      keywords: ['SEO التقني', 'تطوير المواقع', 'الأداء التقني'],
      thumbnail: '/placeholder.svg'
    }
  ];

  const categories = ['all', 'SEO', 'البحث عن الكلمات', 'تحليل المنافسين', 'SEO التقني'];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || article.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'منشور';
      case 'draft':
        return 'مسودة';
      default:
        return 'غير محدد';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-arabic" dir="rtl">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8 animate-fade-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl font-hacen font-bold text-primary mb-2">
                  مقالاتي
                </h1>
                <p className="text-gray-600 font-arabic">
                  إدارة وتتبع جميع مقالاتك المحسنة لمحركات البحث
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 font-arabic animate-bounce-in">
                <Plus className="w-5 h-5 ml-2" />
                مقال جديد
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 animate-slide-bottom animate-delay-100">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="البحث في المقالات..."
                  className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary font-arabic"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary font-arabic"
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                >
                  <option value="all">جميع الفئات</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <Card 
                key={article.id} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md animate-fade-up"
                style={{animationDelay: `${index * 0.1 + 0.2}s`}}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={article.thumbnail} 
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(article.status)}>
                        {getStatusText(article.status)}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      {article.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg font-arabic text-gray-800 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {article.title}
                  </CardTitle>
                  
                  <p className="text-gray-600 font-arabic mb-4 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span className="font-arabic">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span className="font-arabic">{article.views}</span>
                      </div>
                    </div>
                    <span className="font-arabic">{article.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.keywords.slice(0, 3).map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 font-arabic">
                      <Eye className="w-4 h-4 ml-1" />
                      عرض
                    </Button>
                    <Button size="sm" variant="outline" className="font-arabic">
                      <Edit className="w-4 h-4 ml-1" />
                      تعديل
                    </Button>
                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16 animate-fade-up">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-hacen font-bold text-gray-600 mb-2">
                لم يتم العثور على مقالات
              </h3>
              <p className="text-gray-500 font-arabic mb-6">
                جرب تغيير معايير البحث أو الفلترة
              </p>
              <Button className="bg-primary hover:bg-primary/90 font-arabic">
                إنشاء مقال جديد
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Articles;
