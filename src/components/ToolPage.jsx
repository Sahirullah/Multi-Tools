import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext.jsx';

const ToolPage = ({ 
  toolName, 
  toolIcon, 
  acceptedTypes, 
  outputFormat,
  description 
}) => {
  const { t } = useLanguage();
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

  const createMockFile = (originalFile, outputFormat) => {
    const convertedFileName = originalFile.name.replace(/\.[^/.]+$/, outputFormat);
    
    // Create appropriate mock content based on output format
    let blob;
    let mimeType;
    
    switch (outputFormat) {
      case '.pdf':
        // Create a minimal valid PDF structure
        const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 44
>>
stream
BT
/F1 12 Tf
100 700 Td
(Mock Converted File) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000000369 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
456
%%EOF`;
        blob = new Blob([pdfContent], { type: 'application/pdf' });
        mimeType = 'application/pdf';
        break;
        
      case '.docx':
        // Create a simple text file for Word documents (in real app, would be proper DOCX)
        const docContent = `Mock Converted Document

Original File: ${originalFile.name}
Converted to: ${convertedFileName}
Conversion Date: ${new Date().toLocaleString()}

This is a mock converted document. In a real application, this would be a properly formatted Word document with the converted content from your original file.

Multi.Tools - File Conversion Made Easy`;
        blob = new Blob([docContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        mimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        break;
        
      case '.jpg':
      case '.jpeg':
        // Create a minimal valid JPEG header (1x1 pixel image)
        const jpegData = new Uint8Array([
          0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01,
          0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43,
          0x00, 0x08, 0x06, 0x06, 0x07, 0x06, 0x05, 0x08, 0x07, 0x07, 0x07, 0x09,
          0x09, 0x08, 0x0A, 0x0C, 0x14, 0x0D, 0x0C, 0x0B, 0x0B, 0x0C, 0x19, 0x12,
          0x13, 0x0F, 0x14, 0x1D, 0x1A, 0x1F, 0x1E, 0x1D, 0x1A, 0x1C, 0x1C, 0x20,
          0x24, 0x2E, 0x27, 0x20, 0x22, 0x2C, 0x23, 0x1C, 0x1C, 0x28, 0x37, 0x29,
          0x2C, 0x30, 0x31, 0x34, 0x34, 0x34, 0x1F, 0x27, 0x39, 0x3D, 0x38, 0x32,
          0x3C, 0x2E, 0x33, 0x34, 0x32, 0xFF, 0xC0, 0x00, 0x11, 0x08, 0x00, 0x01,
          0x00, 0x01, 0x01, 0x01, 0x11, 0x00, 0x02, 0x11, 0x01, 0x03, 0x11, 0x01,
          0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0xFF, 0xC4,
          0x00, 0x14, 0x10, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
          0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x0C,
          0x03, 0x01, 0x00, 0x02, 0x11, 0x03, 0x11, 0x00, 0x3F, 0x00, 0x8A, 0x00,
          0xFF, 0xD9
        ]);
        blob = new Blob([jpegData], { type: 'image/jpeg' });
        mimeType = 'image/jpeg';
        break;
        
      case '.png':
        // Create a minimal valid PNG (1x1 pixel transparent image)
        const pngData = new Uint8Array([
          0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
          0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
          0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4, 0x89, 0x00, 0x00, 0x00,
          0x0B, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
          0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00, 0x00, 0x00, 0x00, 0x49,
          0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
        ]);
        blob = new Blob([pngData], { type: 'image/png' });
        mimeType = 'image/png';
        break;
        
      case '.pptx':
        // Create a simple text file for PowerPoint (in real app, would be proper PPTX)
        const pptContent = `Mock Converted Presentation

Original File: ${originalFile.name}
Converted to: ${convertedFileName}
Conversion Date: ${new Date().toLocaleString()}

Slide 1: Title Slide
- Mock Converted Presentation
- Created by Multi.Tools

Slide 2: Content
- This is a mock converted presentation
- In a real application, this would be a properly formatted PowerPoint file
- With all the original content converted appropriately

Multi.Tools - File Conversion Made Easy`;
        blob = new Blob([pptContent], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
        mimeType = 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        break;
        
      default:
        // Fallback to text file
        const textContent = `Mock Converted File

Original File: ${originalFile.name}
Converted to: ${convertedFileName}
Conversion Date: ${new Date().toLocaleString()}

This is a mock converted file created by Multi.Tools. In a real application, this would contain the actual converted content from your original file.

Multi.Tools - File Conversion Made Easy`;
        blob = new Blob([textContent], { type: 'text/plain' });
        mimeType = 'text/plain';
    }
    
    return { blob, mimeType, convertedFileName };
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
    
    // Create a mock converted file with proper format
    const originalFile = selectedFiles.length > 0 ? selectedFiles[0] : selectedFile;
    const { blob, mimeType, convertedFileName } = createMockFile(originalFile, outputFormat);
    const url = URL.createObjectURL(blob);
    
    setConvertedFile({
      name: convertedFileName,
      size: Math.floor(originalFile.size * 0.8), // Simulate compression
      url: url,
      blob: blob,
      mimeType: mimeType
    });
    
    setIsConverting(false);
  };

  const handleDownload = () => {
    if (convertedFile && convertedFile.url) {
      // Create a temporary download link
      const link = document.createElement('a');
      link.href = convertedFile.url;
      link.download = convertedFile.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL after download
      setTimeout(() => {
        URL.revokeObjectURL(convertedFile.url);
      }, 1000);
    }
  };

  const resetTool = () => {
    // Clean up any existing blob URLs
    if (convertedFile && convertedFile.url) {
      URL.revokeObjectURL(convertedFile.url);
    }
    
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
                {t('dropFiles')}
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                {t('clickToBrowse')}
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold cursor-pointer inline-block shadow-lg btn-hover"
              >
{t('chooseFiles')}
              </label>
              <p className="text-sm text-gray-500 mt-6 bg-gray-50 px-4 py-2 rounded-xl inline-block">
                {t('acceptedFormats')}: {acceptedTypes.join(', ')}
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
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-2xl font-bold shadow-lg btn-hover flex items-center justify-center space-x-2"
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
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-6 rounded-2xl font-bold shadow-lg btn-hover flex items-center justify-center space-x-2"
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
                <button 
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg btn-hover flex items-center justify-center space-x-2"
                >
                  <span>📥</span>
                  <span>{t('downloadFile')}</span>
                </button>
                <button
                  onClick={resetTool}
                  className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 bg-white hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold shadow-lg btn-hover flex items-center justify-center space-x-2"
                >
                  <span>🔄</span>
                  <span>{t('convertAnother')}</span>
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