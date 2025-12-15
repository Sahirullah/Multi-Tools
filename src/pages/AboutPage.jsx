import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About FileEase
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Making file conversion simple, fast, and secure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At FileEase, we believe file conversion should be effortless. Our platform provides 
              fast, reliable, and secure file conversion tools that work directly in your browser 
              without requiring any software installation.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Whether you're converting documents for work, compressing files for storage, or 
              preparing presentations, FileEase has the tools you need.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose FileEase?
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>100% free to use with no hidden fees</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Secure processing - files are deleted after conversion</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>No software installation required</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Fast conversion with high-quality results</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Works on all devices and browsers</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Our Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'PDF Conversion', icon: '📄', count: '4 tools' },
              { name: 'Image Processing', icon: '🖼️', count: '2 tools' },
              { name: 'Document Conversion', icon: '📝', count: '2 tools' },
              { name: 'File Compression', icon: '🗜️', count: '2 tools' }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {category.count}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Try our file conversion tools today and experience the difference.
          </p>
          <a
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
          >
            Start Converting
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;