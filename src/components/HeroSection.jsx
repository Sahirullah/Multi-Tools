import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [heroRef, isHeroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [statsRef, isStatsVisible] = useScrollAnimation({ threshold: 0.3 });
  const offsetY = useParallax();
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-24 overflow-hidden">
      {/* Background decorations with parallax */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"
          style={{ transform: `translateY(${offsetY * 0.15}px)` }}
        ></div>
        <div 
          className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"
          style={{ transform: `translateY(${offsetY * 0.05}px)` }}
        ></div>
      </div>
      
      <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className={`mb-8 transition-all duration-1000 ${isHeroVisible ? 'animate-bounce-in' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
              ✨ {t('newFeature')}
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 delay-200 ${isHeroVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
              {t('heroTitle')}
            </span>
            <br />
            <span className="text-gray-900">
              {t('heroSubtitle')}
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isHeroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {t('heroDescription')} 
            <span className="font-semibold text-blue-600"> {t('noRegistration')}</span>
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${isHeroVisible ? 'animate-scale-in' : 'opacity-0 scale-75'}`}>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span className="flex items-center justify-center">
                🚀 {t('chooseToolBtn')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            <button className="group border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 bg-white/80 backdrop-blur-sm hover:bg-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
              <span className="flex items-center justify-center">
                📁 {t('uploadFileBtn')}
                <svg className="ml-2 w-5 h-5 group-hover:translate-y-[-2px] transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </span>
            </button>
          </div>
          
          {/* Stats */}
          <div ref={statsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${isStatsVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">{t('filesConverted')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">{t('conversionTools')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">100%</div>
              <div className="text-gray-600">{t('freeSecure')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;