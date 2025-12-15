import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ToolPage = ({ 
  toolName, 
  toolIcon, 
  acceptedTypes, 
  outputFormat,
  description 
}) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const [uploadProgress, setUploadProgress] = useState(0);
  const [isConverting, setIsConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file) => {
    if (file && acceptedTypes.includes(file.type)) {
      setSelectedFile(file);
      setConvertedFile(null);
    } else {
      alert(`Please select a valid file type: ${acceptedTypes.join(', ')}`);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length === 1) {
      handleFileSelect(files[0]);
    } else if (files.length > 1) {
      // Handle multiple files
      const validFiles = files.filter(file => acceptedTypes.includes(file.type));
      if (validFiles.length > 0) {
        setSelectedFiles(validFiles);
        setSelectedFile(null);
        setConvertedFile(null);
      } else {
        alert(`Please select valid file types: ${acceptedTypes.join(', ')}`);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 1) {
      handleFileSelect(files[0]);
    } else if (files.length > 1) {
      const validFiles = files.filter(file => acceptedTypes.includes(file.type));
      if (validFiles.length > 0) {
        setSelectedFiles(validFiles);
        setSelectedFile(null);
        setConvertedFile(null);
      }
    }
  };

  const simulateConversion = async () => {
    setIsConverting(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i);
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    // Simulate conversion time
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock converted file
    setConvertedFile({
      name: selectedFile.name.replace(/\.[^/.]+$/, outputFormat),
      size: Math.floor(selectedFile.size * 0.8), // Simulate compression
      url: '#' // In real app, this would be the download URL
    });
    
    setIsConverting(false);
  };

  const resetTool = () => {
    setSelectedFile(null);
    setSelectedFiles([]);
    setConvertedFile(null);
    setUploadProgress(0);
    setIsConverting(false);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tool Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-2xl">
            <span className="text-4xl">{toolIcon}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {toolName}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Upload Section */}
        {!selectedFile && selectedFiles.length === 0 && (
          <div className="bg-white rounded-3xl p-12 border-2 border-dashed border-gray-200 mb-12 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div
              className={`text-center ${isDragOver ? 'bg-gradient-to-br from-blue-50 to-purple-50 scale-105' : ''} rounded-2xl p-12 transition-all duration-300`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl text-white">📁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Drop your files here
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                or click to browse • Supports single or multiple files
              </p>
              <input
                type="file"
                accept={acceptedTypes.join(',')}
                onChange={handleFileInput}
                className="hidden"
                id="file-input"
                multiple
              />
              <label
                htmlFor="file-input"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold cursor-pointer inline-block transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Choose Files
              </label>
              <p className="text-sm text-gray-500 mt-6 bg-gray-50 px-4 py-2 rounded-xl inline-block">
                Accepted formats: {acceptedTypes.join(', ')}
              </p>
            </div>
          </div>
        )}

        {/* File Info & Progress */}
        {selectedFile && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">📄</div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {selectedFile.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatFileSize(selectedFile.size)}
                  </p>
                </div>
              </div>
              <button
                onClick={resetTool}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Progress Bar */}
            {isConverting && (
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Converting...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Convert Button */}
            {!isConverting && !convertedFile && (
              <button
                onClick={simulateConversion}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>🚀</span>
                <span>Start Conversion</span>
              </button>
            )}
          </div>
        )}

        {/* Multiple Files Info & Progress */}
        {selectedFiles.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {selectedFiles.length} Files Selected
              </h3>
              <button
                onClick={resetTool}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Files List */}
            <div className="space-y-2 mb-4 max-h-40 overflow-y-auto">
              {selectedFiles.map((file, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 bg-gray-50 dark:bg-gray-700 rounded">
                  <div className="text-lg">📄</div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            {isConverting && (
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Converting files...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            {/* Convert Button */}
            {!isConverting && !convertedFile && (
              <button
                onClick={simulateConversion}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>🚀</span>
                <span>Convert All Files</span>
              </button>
            )}
          </div>
        )}

        {/* Download Section */}
        {convertedFile && (
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-2">
                Conversion Complete!
              </h3>
              <p className="text-green-600 dark:text-green-400 mb-4">
                Your file has been successfully converted
              </p>
              
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="text-2xl">📄</div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {convertedFile.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {formatFileSize(convertedFile.size)}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>📥</span>
                  <span>Download File</span>
                </button>
                <button
                  onClick={resetTool}
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>🔄</span>
                  <span>Convert Another File</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ToolPage;