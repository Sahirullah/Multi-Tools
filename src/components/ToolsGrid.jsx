import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const ToolsGrid = () => {
  const [titleRef, isTitleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1 });
  const { t } = useLanguage();
  const tools = [
    {
      id: 'pdf-to-word',
      icon: '📄➡️📝',
      title: 'PDF to Word',
      description: t('pdfToWord'),
      path: '/pdf-to-word'
    },
    {
      id: 'word-to-pdf',
      icon: '📝➡️📄',
      title: 'Word to PDF',
      description: t('wordToPdf'),
      path: '/word-to-pdf'
    },
    {
      id: 'pdf-to-image',
      icon: '📄➡️🖼️',
      title: 'PDF to Image',
      description: t('pdfToImage'),
      path: '/pdf-to-image'
    },
    {
      id: 'image-to-pdf',
      icon: '🖼️➡️📄',
      title: 'Image to PDF',
      description: t('imageToPdf'),
      path: '/image-to-pdf'
    },
    {
      id: 'pdf-to-ppt',
      icon: '📄➡️📊',
      title: 'PDF to PPT',
      description: t('pdfToPpt'),
      path: '/pdf-to-ppt'
    },
    {
      id: 'ppt-to-pdf',
      icon: '📊➡️📄',
      title: 'PPT to PDF',
      description: t('pptToPdf'),
      path: '/ppt-to-pdf'
    },
    {
      id: 'pdf-compress',
      icon: '📄🗜️',
      title: 'PDF Compress',
      description: t('pdfCompress'),
      path: '/pdf-compress'
    },
    {
      id: 'image-compress',
      icon: '🖼️🗜️',
      title: 'Image Compress',
      description: t('imageCompress'),
      path: '/image-compress'
    }
  ];

  return (
    <section id="tools" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${isTitleVisible ? 'animate-slide-in-up' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent animate-gradient">
              {t('toolsTitle')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('toolsDescription')}
          </p>
        </div>
        
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className={`group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:scale-105 hover:-translate-y-2 ${
                isGridVisible 
                  ? 'animate-scale-in opacity-100' 
                  : 'opacity-0 scale-75'
              }`}
              style={{ 
                animationDelay: isGridVisible ? `${index * 150}ms` : '0ms',
                transitionDelay: isGridVisible ? `${index * 150}ms` : '0ms'
              }}
            >
              <div className="text-5xl mb-6 text-center transform group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors">
                {tool.title}
              </h3>
              <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">
                {tool.description}
              </p>
              <Link
                to={tool.path}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 block text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {t('startNow')} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;