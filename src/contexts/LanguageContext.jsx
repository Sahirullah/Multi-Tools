import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Language translations
const translations = {
  en: {
    // Header
    home: 'Home',
    tools: 'Tools',
    about: 'About',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Convert your files',
    heroSubtitle: 'instantly',
    heroDescription: 'Transform your documents with our lightning-fast, secure, and completely free file conversion tools.',
    noRegistration: 'No registration required.',
    chooseToolBtn: 'Choose Tool',
    uploadFileBtn: 'Upload File',
    newFeature: 'New: Multiple file uploads now supported',
    
    // Stats
    filesConverted: 'Files Converted',
    conversionTools: 'Conversion Tools',
    freeSecure: 'Free & Secure',
    
    // Tools Grid
    toolsTitle: 'Powerful Conversion Tools',
    toolsDescription: 'Choose from our collection of lightning-fast, professional-grade file conversion tools',
    startNow: 'Start Now',
    
    // Tool descriptions
    pdfToWord: 'Convert PDF documents to editable Word files',
    wordToPdf: 'Convert Word documents to PDF format',
    pdfToImage: 'Extract images from PDF or convert pages to images',
    imageToPdf: 'Combine multiple images into a single PDF',
    pdfToPpt: 'Convert PDF documents to PowerPoint presentations',
    pptToPdf: 'Convert PowerPoint presentations to PDF',
    pdfCompress: 'Reduce PDF file size without losing quality',
    imageCompress: 'Compress images to reduce file size',
    
    // Tool Page
    dropFiles: 'Drop your files here',
    clickToBrowse: 'or click to browse • Supports single or multiple files',
    chooseFiles: 'Choose Files',
    acceptedFormats: 'Accepted formats',
    filesSelected: 'Files Selected',
    converting: 'Converting...',
    convertingFiles: 'Converting files...',
    startConversion: 'Start Conversion',
    convertAllFiles: 'Convert All Files',
    conversionComplete: 'Conversion Complete!',
    fileConverted: 'Your file has been successfully converted',
    downloadFile: 'Download File',
    convertAnother: 'Convert Another File',
    
    // Footer
    footerDescription: 'Convert your files instantly with our fast, free, and secure online tools.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    support: 'Support',
    copyright: '© 2025 FileEase. All rights reserved.'
  },
  
  ur: {
    // Header - Urdu
    home: 'گھر',
    tools: 'ٹولز',
    about: 'کے بارے میں',
    contact: 'رابطہ',
    
    // Hero Section
    heroTitle: 'اپنی فائلوں کو تبدیل کریں',
    heroSubtitle: 'فوری طور پر',
    heroDescription: 'ہمارے تیز رفتار، محفوظ، اور مکمل طور پر مفت فائل کنورٹر ٹولز کے ساتھ اپنے دستاویزات کو تبدیل کریں۔',
    noRegistration: 'رجسٹریشن کی ضرورت نہیں۔',
    chooseToolBtn: 'ٹول منتخب کریں',
    uploadFileBtn: 'فائل اپ لوڈ کریں',
    newFeature: 'نیا: متعدد فائل اپ لوڈز اب سپورٹ کیے جاتے ہیں',
    
    // Stats
    filesConverted: 'فائلیں تبدیل شدہ',
    conversionTools: 'کنورٹر ٹولز',
    freeSecure: 'مفت اور محفوظ',
    
    // Tools Grid
    toolsTitle: 'طاقتور کنورٹر ٹولز',
    toolsDescription: 'ہمارے تیز رفتار، پیشہ ورانہ فائل کنورٹر ٹولز کے مجموعے سے انتخاب کریں',
    startNow: 'ابھی شروع کریں',
    
    // Tool descriptions
    pdfToWord: 'PDF دستاویزات کو قابل تدوین Word فائلوں میں تبدیل کریں',
    wordToPdf: 'Word دستاویزات کو PDF فارمیٹ میں تبدیل کریں',
    pdfToImage: 'PDF سے تصاویر نکالیں یا صفحات کو تصاویر میں تبدیل کریں',
    imageToPdf: 'متعدد تصاویر کو ایک PDF میں ملائیں',
    pdfToPpt: 'PDF دستاویزات کو PowerPoint پریزنٹیشن میں تبدیل کریں',
    pptToPdf: 'PowerPoint پریزنٹیشن کو PDF میں تبدیل کریں',
    pdfCompress: 'معیار کھوئے بغیر PDF فائل کا سائز کم کریں',
    imageCompress: 'تصاویر کو کمپریس کر کے فائل سائز کم کریں',
    
    // Tool Page
    dropFiles: 'اپنی فائلیں یہاں چھوڑیں',
    clickToBrowse: 'یا براؤز کرنے کے لیے کلک کریں • ایک یا متعدد فائلوں کو سپورٹ کرتا ہے',
    chooseFiles: 'فائلیں منتخب کریں',
    acceptedFormats: 'قبول شدہ فارمیٹس',
    filesSelected: 'فائلیں منتخب شدہ',
    converting: 'تبدیل کر رہا ہے...',
    convertingFiles: 'فائلیں تبدیل کر رہا ہے...',
    startConversion: 'تبدیلی شروع کریں',
    convertAllFiles: 'تمام فائلیں تبدیل کریں',
    conversionComplete: 'تبدیلی مکمل!',
    fileConverted: 'آپ کی فائل کامیابی سے تبدیل ہو گئی ہے',
    downloadFile: 'فائل ڈاؤن لوڈ کریں',
    convertAnother: 'دوسری فائل تبدیل کریں',
    
    // Footer
    footerDescription: 'ہمارے تیز، مفت اور محفوظ آن لائن ٹولز کے ساتھ اپنی فائلوں کو فوری طور پر تبدیل کریں۔',
    quickLinks: 'فوری لنکس',
    legal: 'قانونی',
    privacyPolicy: 'پرائیویسی پالیسی',
    termsOfService: 'سروس کی شرائط',
    support: 'سپورٹ',
    copyright: '© 2025 FileEase۔ تمام حقوق محفوظ ہیں۔'
  },
  
  ps: {
    // Header - Pashto
    home: 'کور',
    tools: 'وسایل',
    about: 'د دې په اړه',
    contact: 'اړیکه',
    
    // Hero Section
    heroTitle: 'خپل فایلونه بدل کړئ',
    heroSubtitle: 'سمدلاسه',
    heroDescription: 'زموږ د چټک، خوندي، او په بشپړه توګه وړیا فایل بدلولو وسایلو سره خپل اسناد بدل کړئ.',
    noRegistration: 'د ثبت نوم ته اړتیا نشته.',
    chooseToolBtn: 'وسیله غوره کړئ',
    uploadFileBtn: 'فایل اپلوډ کړئ',
    newFeature: 'نوی: د ډیری فایلونو اپلوډ اوس ملاتړ کیږي',
    
    // Stats
    filesConverted: 'فایلونه بدل شوي',
    conversionTools: 'د بدلولو وسایل',
    freeSecure: 'وړیا او خوندي',
    
    // Tools Grid
    toolsTitle: 'پیاوړي د بدلولو وسایل',
    toolsDescription: 'زموږ د چټک، مسلکي فایل بدلولو وسایلو له ټولګه څخه غوره کړئ',
    startNow: 'اوس پیل کړئ',
    
    // Tool descriptions
    pdfToWord: 'د PDF اسناد د Word فایلونو ته بدل کړئ',
    wordToPdf: 'د Word اسناد د PDF بڼه ته بدل کړئ',
    pdfToImage: 'له PDF څخه انځورونه واوځئ یا پاڼې انځورونو ته بدل کړئ',
    imageToPdf: 'ډیری انځورونه په یو PDF کې یوځای کړئ',
    pdfToPpt: 'د PDF اسناد د PowerPoint پریزنټیشن ته بدل کړئ',
    pptToPdf: 'د PowerPoint پریزنټیشن PDF ته بدل کړئ',
    pdfCompress: 'د کیفیت له لاسه ورکولو پرته د PDF فایل اندازه کمه کړئ',
    imageCompress: 'انځورونه کمپریس کړئ ترڅو د فایل اندازه کمه شي',
    
    // Tool Page
    dropFiles: 'خپل فایلونه دلته پریږدئ',
    clickToBrowse: 'یا د لټون لپاره کلیک وکړئ • یو یا ډیری فایلونو ملاتړ کوي',
    chooseFiles: 'فایلونه غوره کړئ',
    acceptedFormats: 'منل شوي بڼې',
    filesSelected: 'فایلونه غوره شوي',
    converting: 'بدلوي...',
    convertingFiles: 'فایلونه بدلوي...',
    startConversion: 'بدلول پیل کړئ',
    convertAllFiles: 'ټول فایلونه بدل کړئ',
    conversionComplete: 'بدلول بشپړ شو!',
    fileConverted: 'ستاسو فایل په بریالیتوب سره بدل شو',
    downloadFile: 'فایل ډاونلوډ کړئ',
    convertAnother: 'بل فایل بدل کړئ',
    
    // Footer
    footerDescription: 'زموږ د چټک، وړیا او خوندي آنلاین وسایلو سره خپل فایلونه سمدلاسه بدل کړئ.',
    quickLinks: 'چټک لینکونه',
    legal: 'قانوني',
    privacyPolicy: 'د محرمیت پالیسي',
    termsOfService: 'د خدماتو شرایط',
    support: 'ملاتړ',
    copyright: '© 2025 FileEase. ټول حقونه خوندي دي.'
  },
  
  ja: {
    // Header - Japanese
    home: 'ホーム',
    tools: 'ツール',
    about: 'について',
    contact: 'お問い合わせ',
    
    // Hero Section
    heroTitle: 'ファイルを変換',
    heroSubtitle: '瞬時に',
    heroDescription: '高速で安全、完全無料のファイル変換ツールでドキュメントを変換しましょう。',
    noRegistration: '登録不要。',
    chooseToolBtn: 'ツールを選択',
    uploadFileBtn: 'ファイルをアップロード',
    newFeature: '新機能：複数ファイルのアップロードに対応',
    
    // Stats
    filesConverted: '変換されたファイル',
    conversionTools: '変換ツール',
    freeSecure: '無料で安全',
    
    // Tools Grid
    toolsTitle: '強力な変換ツール',
    toolsDescription: '高速でプロフェッショナルなファイル変換ツールのコレクションから選択してください',
    startNow: '今すぐ開始',
    
    // Tool descriptions
    pdfToWord: 'PDF文書を編集可能なWordファイルに変換',
    wordToPdf: 'Word文書をPDF形式に変換',
    pdfToImage: 'PDFから画像を抽出またはページを画像に変換',
    imageToPdf: '複数の画像を1つのPDFに結合',
    pdfToPpt: 'PDF文書をPowerPointプレゼンテーションに変換',
    pptToPdf: 'PowerPointプレゼンテーションをPDFに変換',
    pdfCompress: '品質を損なうことなくPDFファイルサイズを削減',
    imageCompress: '画像を圧縮してファイルサイズを削減',
    
    // Tool Page
    dropFiles: 'ファイルをここにドロップ',
    clickToBrowse: 'またはクリックして参照 • 単一または複数ファイルに対応',
    chooseFiles: 'ファイルを選択',
    acceptedFormats: '対応形式',
    filesSelected: 'ファイルが選択されました',
    converting: '変換中...',
    convertingFiles: 'ファイルを変換中...',
    startConversion: '変換を開始',
    convertAllFiles: 'すべてのファイルを変換',
    conversionComplete: '変換完了！',
    fileConverted: 'ファイルが正常に変換されました',
    downloadFile: 'ファイルをダウンロード',
    convertAnother: '別のファイルを変換',
    
    // Footer
    footerDescription: '高速で無料、安全なオンラインツールでファイルを瞬時に変換。',
    quickLinks: 'クイックリンク',
    legal: '法的事項',
    privacyPolicy: 'プライバシーポリシー',
    termsOfService: '利用規約',
    support: 'サポート',
    copyright: '© 2025 FileEase. 全著作権所有。'
  },
  
  zh: {
    // Header - Chinese
    home: '首页',
    tools: '工具',
    about: '关于',
    contact: '联系',
    
    // Hero Section
    heroTitle: '转换您的文件',
    heroSubtitle: '瞬间完成',
    heroDescription: '使用我们快速、安全且完全免费的文件转换工具来转换您的文档。',
    noRegistration: '无需注册。',
    chooseToolBtn: '选择工具',
    uploadFileBtn: '上传文件',
    newFeature: '新功能：现在支持多文件上传',
    
    // Stats
    filesConverted: '已转换文件',
    conversionTools: '转换工具',
    freeSecure: '免费安全',
    
    // Tools Grid
    toolsTitle: '强大的转换工具',
    toolsDescription: '从我们的快速、专业级文件转换工具集合中选择',
    startNow: '立即开始',
    
    // Tool descriptions
    pdfToWord: '将PDF文档转换为可编辑的Word文件',
    wordToPdf: '将Word文档转换为PDF格式',
    pdfToImage: '从PDF中提取图像或将页面转换为图像',
    imageToPdf: '将多个图像合并为一个PDF',
    pdfToPpt: '将PDF文档转换为PowerPoint演示文稿',
    pptToPdf: '将PowerPoint演示文稿转换为PDF',
    pdfCompress: '在不损失质量的情况下减小PDF文件大小',
    imageCompress: '压缩图像以减小文件大小',
    
    // Tool Page
    dropFiles: '将文件拖放到此处',
    clickToBrowse: '或点击浏览 • 支持单个或多个文件',
    chooseFiles: '选择文件',
    acceptedFormats: '支持的格式',
    filesSelected: '已选择文件',
    converting: '转换中...',
    convertingFiles: '正在转换文件...',
    startConversion: '开始转换',
    convertAllFiles: '转换所有文件',
    conversionComplete: '转换完成！',
    fileConverted: '您的文件已成功转换',
    downloadFile: '下载文件',
    convertAnother: '转换另一个文件',
    
    // Footer
    footerDescription: '使用我们快速、免费且安全的在线工具瞬间转换您的文件。',
    quickLinks: '快速链接',
    legal: '法律',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    support: '支持',
    copyright: '© 2025 FileEase. 保留所有权利。'
  }
};

// Available languages
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('fileease-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('fileease-language', currentLanguage);
    // Set document direction for RTL languages
    document.documentElement.dir = ['ur', 'ps'].includes(currentLanguage) ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const changeLanguage = (languageCode) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode);
    }
  };

  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    t,
    languages,
    isRTL: ['ur', 'ps'].includes(currentLanguage)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};