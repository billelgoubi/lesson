import React, { useState } from 'react';
import { 
  BookOpen, 
  CheckCircle, 
  Clock, 
  CreditCard, 
  Gift, 
  Layout, 
  MessageCircle, 
  MonitorPlay, 
  Users, 
  Zap 
} from 'lucide-react';

// --- Components ---

const Header = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white p-2 rounded-lg">
            <Zap size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-900">معلم المستقبل</span>
        </div>
        <div className="hidden md:flex gap-6 items-center font-medium text-gray-600">
          <a href="#about" className="hover:text-primary transition-colors">عن الدورة</a>
          <a href="#curriculum" className="hover:text-primary transition-colors">المحاور</a>
          <a href="#pricing" className="hover:text-primary transition-colors">التسجيل</a>
        </div>
        <a 
          href="https://wa.me/213558449995" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary hover:bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          <span>سجل الآن</span>
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
        <div className="lg:col-span-6 text-center lg:text-right mb-12 lg:mb-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 border border-secondary/20">
            <Gift size={16} />
            <span>عرض حصري - أماكن محدودة</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-primary leading-tight mb-4">
             تعلم كيف تجعل <br/>
             <span className="text-secondary">الذكاء الاصطناعي مساعدك</span>
          </h1>
          <div className="bg-secondary text-white px-6 py-3 rounded-lg inline-block text-lg font-bold mb-8 shadow-md transform -rotate-1">
            ورشة تطبيقية للمعلمين - أماكن محدودة - أونلاين
          </div>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            انتقل بمهاراتك التدريسية إلى المستوى التالي. دورة عملية مكثفة تمكنك من دمج أدوات الذكاء الاصطناعي في تحضير الدروس، التقييم، وصناعة المحتوى التعليمي.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="px-8 py-4 bg-secondary hover:bg-green-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all flex justify-center items-center gap-2">
              <CheckCircle size={20} />
              احجز مقعدك (1800دج)
            </a>
            <a href="https://t.me/+TR13UiGkZj8zOGQ0" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white hover:bg-gray-50 text-primary border border-primary/30 rounded-xl font-bold text-lg shadow-sm transition-all flex justify-center items-center gap-2">
              <MessageCircle size={20} />
              مجموعة التلغرام
            </a>
          </div>
        </div>
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105"></div>
          <img 
            src="https://i.imgur.com/idLrEUn.png" 
            alt="معلم في القسم أمام سبورة تفاعلية" 
            className="relative rounded-3xl shadow-2xl border-4 border-white w-full object-cover h-[400px] lg:h-[500px] object-top"
          />
          
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 animate-bounce duration-[3000ms]">
            <div className="bg-red-100 p-3 rounded-full text-red-600">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">تخفيض محدود</p>
              <p className="text-xl font-bold text-gray-900">سارع بالتسجيل</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <MonitorPlay className="w-8 h-8 text-blue-600" />,
      title: "3 حصص تطبيقية",
      description: "تدريب عملي مباشر خطوة بخطوة وليس مجرد نظريات. ستطبق ما تتعلمه مباشرة أثناء الدورة."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "متابعة مشروع مجانية",
      description: "سنرافقك بعد الدورة لإنجاز مشروعك التعليمي الأول باستخدام الذكاء الاصطناعي لضمان إتقانك للمهارات."
    },
    {
      icon: <Layout className="w-8 h-8 text-purple-600" />,
      title: "أدوات متخصصة",
      description: "تعرف على أفضل الأدوات المجانية والمدفوعة التي تخدم المعلم العربي وتدعم اللغة العربية بكفاءة."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">لماذا هذه الدورة؟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">صممت هذه الدورة خصيصاً للمعلمين الذين يرغبون في توفير الوقت والجهد وتقديم تجربة تعليمية مبتكرة.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-colors border border-gray-100">
              <div className="mb-6 bg-white w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Curriculum = () => {
  const axes = [
    "مقدمة في الذكاء الاصطناعي التوليدي وفهم آليات عمله في السياق التعليمي.",
    "هندسة الأوامر (Prompt Engineering) للمعلمين للحصول على أفضل النتائج.",
    "تصميم خطط الدروس والتحضير الآلي والاختبارات في دقائق.",
    "تصميم العروض التقديمية والوسائل البصرية باستخدام الذكاء الاصطناعي.",
    "أدوات التقييم والتغذية الراجعة الشخصية للطلاب."
  ];

  return (
    <section id="curriculum" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">ماذا ستتعلم في هذه الدورة؟</h2>
            <p className="text-gray-400 text-lg mb-8">
              برنامج مكثف يغطي أهم المحاور التي يحتاجها المعلم العصري لدمج التقنية في فصله الدراسي.
            </p>
            <div className="space-y-4">
              {axes.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/40 p-2 rounded-lg mt-1">
                    <BookOpen size={20} className="text-blue-200" />
                  </div>
                  <p className="text-lg text-gray-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-center text-blue-300">هيكل الدورة</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                <span className="font-bold text-4xl text-white/20">01</span>
                <div>
                  <h4 className="font-bold text-lg">الحصة الأولى</h4>
                  <p className="text-sm text-gray-400">الأساسيات وتوليد المحتوى النصي</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                <span className="font-bold text-4xl text-white/20">02</span>
                <div>
                  <h4 className="font-bold text-lg">الحصة الثانية</h4>
                  <p className="text-sm text-gray-400">التصميم البصري والعروض التقديمية</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl">
                <span className="font-bold text-4xl text-white/20">03</span>
                <div>
                  <h4 className="font-bold text-lg">الحصة الثالثة</h4>
                  <p className="text-sm text-gray-400">التقييم، الأتمتة والمشروع الختامي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-blue-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">باقات الاشتراك والتسجيل</h2>
          <p className="text-gray-600 mt-2">استثمر في مستقبلك المهني بأفضل الأسعار</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Offer */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-secondary relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 bg-secondary text-white px-6 py-2 rounded-bl-xl font-bold text-sm">
              الأكثر طلباً
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">الدورة التدريبية الشاملة</h3>
            <p className="text-gray-500 mb-6">شاملة التدريب والمتابعة</p>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-5xl font-extrabold text-secondary">1800 دج</span>
              <span className="text-xl text-gray-400 line-through mb-2">2500 دج</span>
            </div>
            <p className="text-red-500 font-semibold text-sm mb-6 bg-red-50 inline-block px-3 py-1 rounded-full">
              ⚡ عرض خاص لأول 10 مسجلين فقط
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "3 حصص تطبيقية مكثفة",
                "متابعة مشروع واحد مجاناً",
                "حقيبة تدريبية إلكترونية",
                "شهادة مشاركة"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="https://wa.me/213558449995?text=مرحباً، أريد التسجيل في دورة الذكاء الاصطناعي للمعلمين (العرض المخفض 1800دج)" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-secondary hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-colors"
            >
              احجز الآن بـ 1800دج
            </a>
          </div>

          {/* Add-ons */}
          <div className="flex flex-col gap-6">
             <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-blue-100 p-2 rounded-lg text-primary"><Layout size={20}/></span>
                    إضافات اختيارية
                </h4>
                <div className="space-y-4">
                    <div className="p-4 border border-blue-100 rounded-xl bg-blue-50/50 flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-800">اشتراك Canva Pro</p>
                            <p className="text-xs text-gray-500">مدة 3 سنوات</p>
                        </div>
                        <span className="font-bold text-primary text-lg">1000 دج</span>
                    </div>
                    
                    <div className="p-4 border border-purple-100 rounded-xl bg-purple-50/50 flex justify-between items-center">
                        <div>
                            <p className="font-bold text-gray-800">اشتراك Gemini Pro</p>
                            <p className="text-xs text-gray-500">مدة سنة كاملة</p>
                        </div>
                        <span className="font-bold text-purple-600 text-lg">1500 دج</span>
                    </div>
                </div>
             </div>

             <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex-grow">
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="bg-green-100 p-2 rounded-lg text-secondary"><CreditCard size={20}/></span>
                    طرق الدفع
                </h4>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>بريدي موب (BaridiMob)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>بريد الجزائر (CCP)</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                        <span>باي بال (PayPal)</span>
                    </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <p className="text-sm text-gray-500 mb-2">تواصل معنا للحصول على معلومات الحساب</p>
                    <a href="https://wa.me/213558449995" className="text-primary font-bold hover:underline dir-ltr">
                        +213 558 44 99 95
                    </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-right">
        <h5 className="text-white font-bold text-xl mb-2">معلم المستقبل</h5>
        <p className="text-sm">نمكن المعلمين من أدوات العصر الرقمي.</p>
      </div>
      <div className="flex gap-6">
        <a href="https://t.me/+TR13UiGkZj8zOGQ0" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          مجموعة التلغرام
        </a>
        <a href="https://wa.me/213558449995" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          واتساب
        </a>
      </div>
      <div className="text-sm">
        جميع الحقوق محفوظة © {new Date().getFullYear()}
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Pricing />
      </main>
      <Footer />
      
      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href="https://wa.me/213558449995" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}

export default App;