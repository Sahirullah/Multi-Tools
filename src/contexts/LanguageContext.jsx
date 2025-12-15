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
    copyright: '© 2025 Multi.Tools. All rights reserved.'
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
    copyright: '© 2025 Multi.Tools۔ تمام حقوق محفوظ ہیں۔'
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
    copyright: '© 2025 Multi.Tools. ټول حقونه خوندي دي.'
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
    copyright: '© 2025 Multi.Tools. 全著作権所有。'
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
    copyright: '© 2025 Multi.Tools. 保留所有权利。'
  },

  es: {
    // Header - Spanish
    home: 'Inicio',
    tools: 'Herramientas',
    about: 'Acerca de',
    contact: 'Contacto',
    
    // Hero Section
    heroTitle: 'Convierte tus archivos',
    heroSubtitle: 'al instante',
    heroDescription: 'Transforma tus documentos con nuestras herramientas de conversión de archivos ultrarrápidas, seguras y completamente gratuitas.',
    noRegistration: 'No se requiere registro.',
    chooseToolBtn: 'Elegir Herramienta',
    uploadFileBtn: 'Subir Archivo',
    newFeature: 'Nuevo: Ahora se admite la carga de múltiples archivos',
    
    // Stats
    filesConverted: 'Archivos Convertidos',
    conversionTools: 'Herramientas de Conversión',
    freeSecure: 'Gratis y Seguro',
    
    // Tools Grid
    toolsTitle: 'Herramientas de Conversión Potentes',
    toolsDescription: 'Elige de nuestra colección de herramientas de conversión de archivos ultrarrápidas y de grado profesional',
    startNow: 'Comenzar Ahora',
    
    // Tool descriptions
    pdfToWord: 'Convierte documentos PDF a archivos Word editables',
    wordToPdf: 'Convierte documentos Word a formato PDF',
    pdfToImage: 'Extrae imágenes de PDF o convierte páginas a imágenes',
    imageToPdf: 'Combina múltiples imágenes en un solo PDF',
    pdfToPpt: 'Convierte documentos PDF a presentaciones PowerPoint',
    pptToPdf: 'Convierte presentaciones PowerPoint a PDF',
    pdfCompress: 'Reduce el tamaño del archivo PDF sin perder calidad',
    imageCompress: 'Comprime imágenes para reducir el tamaño del archivo',
    
    // Tool Page
    dropFiles: 'Suelta tus archivos aquí',
    clickToBrowse: 'o haz clic para navegar • Admite archivos únicos o múltiples',
    chooseFiles: 'Elegir Archivos',
    acceptedFormats: 'Formatos aceptados',
    filesSelected: 'Archivos Seleccionados',
    converting: 'Convirtiendo...',
    convertingFiles: 'Convirtiendo archivos...',
    startConversion: 'Iniciar Conversión',
    convertAllFiles: 'Convertir Todos los Archivos',
    conversionComplete: '¡Conversión Completa!',
    fileConverted: 'Tu archivo ha sido convertido exitosamente',
    downloadFile: 'Descargar Archivo',
    convertAnother: 'Convertir Otro Archivo',
    
    // Footer
    footerDescription: 'Convierte tus archivos al instante con nuestras herramientas en línea rápidas, gratuitas y seguras.',
    quickLinks: 'Enlaces Rápidos',
    legal: 'Legal',
    privacyPolicy: 'Política de Privacidad',
    termsOfService: 'Términos de Servicio',
    support: 'Soporte',
    copyright: '© 2025 Multi.Tools. Todos los derechos reservados.'
  },

  fr: {
    // Header - French
    home: 'Accueil',
    tools: 'Outils',
    about: 'À propos',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Convertissez vos fichiers',
    heroSubtitle: 'instantanément',
    heroDescription: 'Transformez vos documents avec nos outils de conversion de fichiers ultra-rapides, sécurisés et entièrement gratuits.',
    noRegistration: 'Aucune inscription requise.',
    chooseToolBtn: 'Choisir un Outil',
    uploadFileBtn: 'Télécharger un Fichier',
    newFeature: 'Nouveau : Le téléchargement de plusieurs fichiers est maintenant pris en charge',
    
    // Stats
    filesConverted: 'Fichiers Convertis',
    conversionTools: 'Outils de Conversion',
    freeSecure: 'Gratuit et Sécurisé',
    
    // Tools Grid
    toolsTitle: 'Outils de Conversion Puissants',
    toolsDescription: 'Choisissez parmi notre collection d\'outils de conversion de fichiers ultra-rapides et de qualité professionnelle',
    startNow: 'Commencer Maintenant',
    
    // Tool descriptions
    pdfToWord: 'Convertir les documents PDF en fichiers Word modifiables',
    wordToPdf: 'Convertir les documents Word au format PDF',
    pdfToImage: 'Extraire des images de PDF ou convertir des pages en images',
    imageToPdf: 'Combiner plusieurs images en un seul PDF',
    pdfToPpt: 'Convertir les documents PDF en présentations PowerPoint',
    pptToPdf: 'Convertir les présentations PowerPoint en PDF',
    pdfCompress: 'Réduire la taille du fichier PDF sans perte de qualité',
    imageCompress: 'Compresser les images pour réduire la taille du fichier',
    
    // Tool Page
    dropFiles: 'Déposez vos fichiers ici',
    clickToBrowse: 'ou cliquez pour parcourir • Prend en charge les fichiers uniques ou multiples',
    chooseFiles: 'Choisir des Fichiers',
    acceptedFormats: 'Formats acceptés',
    filesSelected: 'Fichiers Sélectionnés',
    converting: 'Conversion en cours...',
    convertingFiles: 'Conversion des fichiers...',
    startConversion: 'Démarrer la Conversion',
    convertAllFiles: 'Convertir Tous les Fichiers',
    conversionComplete: 'Conversion Terminée !',
    fileConverted: 'Votre fichier a été converti avec succès',
    downloadFile: 'Télécharger le Fichier',
    convertAnother: 'Convertir un Autre Fichier',
    
    // Footer
    footerDescription: 'Convertissez vos fichiers instantanément avec nos outils en ligne rapides, gratuits et sécurisés.',
    quickLinks: 'Liens Rapides',
    legal: 'Légal',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfService: 'Conditions de Service',
    support: 'Support',
    copyright: '© 2025 Multi.Tools. Tous droits réservés.'
  },

  de: {
    // Header - German
    home: 'Startseite',
    tools: 'Werkzeuge',
    about: 'Über uns',
    contact: 'Kontakt',
    
    // Hero Section
    heroTitle: 'Konvertieren Sie Ihre Dateien',
    heroSubtitle: 'sofort',
    heroDescription: 'Transformieren Sie Ihre Dokumente mit unseren blitzschnellen, sicheren und völlig kostenlosen Dateikonvertierungstools.',
    noRegistration: 'Keine Registrierung erforderlich.',
    chooseToolBtn: 'Tool Wählen',
    uploadFileBtn: 'Datei Hochladen',
    newFeature: 'Neu: Multi-Datei-Upload wird jetzt unterstützt',
    
    // Stats
    filesConverted: 'Konvertierte Dateien',
    conversionTools: 'Konvertierungstools',
    freeSecure: 'Kostenlos und Sicher',
    
    // Tools Grid
    toolsTitle: 'Leistungsstarke Konvertierungstools',
    toolsDescription: 'Wählen Sie aus unserer Sammlung von blitzschnellen, professionellen Dateikonvertierungstools',
    startNow: 'Jetzt Starten',
    
    // Tool descriptions
    pdfToWord: 'PDF-Dokumente in bearbeitbare Word-Dateien konvertieren',
    wordToPdf: 'Word-Dokumente in PDF-Format konvertieren',
    pdfToImage: 'Bilder aus PDF extrahieren oder Seiten in Bilder konvertieren',
    imageToPdf: 'Mehrere Bilder in eine einzige PDF kombinieren',
    pdfToPpt: 'PDF-Dokumente in PowerPoint-Präsentationen konvertieren',
    pptToPdf: 'PowerPoint-Präsentationen in PDF konvertieren',
    pdfCompress: 'PDF-Dateigröße ohne Qualitätsverlust reduzieren',
    imageCompress: 'Bilder komprimieren, um die Dateigröße zu reduzieren',
    
    // Tool Page
    dropFiles: 'Dateien hier ablegen',
    clickToBrowse: 'oder klicken zum Durchsuchen • Unterstützt einzelne oder mehrere Dateien',
    chooseFiles: 'Dateien Wählen',
    acceptedFormats: 'Akzeptierte Formate',
    filesSelected: 'Dateien Ausgewählt',
    converting: 'Konvertierung...',
    convertingFiles: 'Dateien konvertieren...',
    startConversion: 'Konvertierung Starten',
    convertAllFiles: 'Alle Dateien Konvertieren',
    conversionComplete: 'Konvertierung Abgeschlossen!',
    fileConverted: 'Ihre Datei wurde erfolgreich konvertiert',
    downloadFile: 'Datei Herunterladen',
    convertAnother: 'Weitere Datei Konvertieren',
    
    // Footer
    footerDescription: 'Konvertieren Sie Ihre Dateien sofort mit unseren schnellen, kostenlosen und sicheren Online-Tools.',
    quickLinks: 'Schnelle Links',
    legal: 'Rechtliches',
    privacyPolicy: 'Datenschutzrichtlinie',
    termsOfService: 'Nutzungsbedingungen',
    support: 'Support',
    copyright: '© 2025 Multi.Tools. Alle Rechte vorbehalten.'
  },

  it: {
    // Header - Italian
    home: 'Home',
    tools: 'Strumenti',
    about: 'Chi siamo',
    contact: 'Contatti',
    
    // Hero Section
    heroTitle: 'Converti i tuoi file',
    heroSubtitle: 'istantaneamente',
    heroDescription: 'Trasforma i tuoi documenti con i nostri strumenti di conversione file ultra-veloci, sicuri e completamente gratuiti.',
    noRegistration: 'Nessuna registrazione richiesta.',
    chooseToolBtn: 'Scegli Strumento',
    uploadFileBtn: 'Carica File',
    newFeature: 'Nuovo: Ora supportato il caricamento di più file',
    
    // Stats
    filesConverted: 'File Convertiti',
    conversionTools: 'Strumenti di Conversione',
    freeSecure: 'Gratuito e Sicuro',
    
    // Tools Grid
    toolsTitle: 'Potenti Strumenti di Conversione',
    toolsDescription: 'Scegli dalla nostra collezione di strumenti di conversione file ultra-veloci e di livello professionale',
    startNow: 'Inizia Ora',
    
    // Tool descriptions
    pdfToWord: 'Converti documenti PDF in file Word modificabili',
    wordToPdf: 'Converti documenti Word in formato PDF',
    pdfToImage: 'Estrai immagini da PDF o converti pagine in immagini',
    imageToPdf: 'Combina più immagini in un singolo PDF',
    pdfToPpt: 'Converti documenti PDF in presentazioni PowerPoint',
    pptToPdf: 'Converti presentazioni PowerPoint in PDF',
    pdfCompress: 'Riduci le dimensioni del file PDF senza perdita di qualità',
    imageCompress: 'Comprimi immagini per ridurre le dimensioni del file',
    
    // Tool Page
    dropFiles: 'Trascina i tuoi file qui',
    clickToBrowse: 'o clicca per sfogliare • Supporta file singoli o multipli',
    chooseFiles: 'Scegli File',
    acceptedFormats: 'Formati accettati',
    filesSelected: 'File Selezionati',
    converting: 'Conversione...',
    convertingFiles: 'Conversione file...',
    startConversion: 'Inizia Conversione',
    convertAllFiles: 'Converti Tutti i File',
    conversionComplete: 'Conversione Completata!',
    fileConverted: 'Il tuo file è stato convertito con successo',
    downloadFile: 'Scarica File',
    convertAnother: 'Converti un Altro File',
    
    // Footer
    footerDescription: 'Converti i tuoi file istantaneamente con i nostri strumenti online veloci, gratuiti e sicuri.',
    quickLinks: 'Link Rapidi',
    legal: 'Legale',
    privacyPolicy: 'Informativa sulla Privacy',
    termsOfService: 'Termini di Servizio',
    support: 'Supporto',
    copyright: '© 2025 Multi.Tools. Tutti i diritti riservati.'
  },

  pt: {
    // Header - Portuguese
    home: 'Início',
    tools: 'Ferramentas',
    about: 'Sobre',
    contact: 'Contato',
    
    // Hero Section
    heroTitle: 'Converta seus arquivos',
    heroSubtitle: 'instantaneamente',
    heroDescription: 'Transforme seus documentos com nossas ferramentas de conversão de arquivos ultra-rápidas, seguras e completamente gratuitas.',
    noRegistration: 'Nenhum registro necessário.',
    chooseToolBtn: 'Escolher Ferramenta',
    uploadFileBtn: 'Enviar Arquivo',
    newFeature: 'Novo: Upload de múltiplos arquivos agora suportado',
    
    // Stats
    filesConverted: 'Arquivos Convertidos',
    conversionTools: 'Ferramentas de Conversão',
    freeSecure: 'Gratuito e Seguro',
    
    // Tools Grid
    toolsTitle: 'Ferramentas de Conversão Poderosas',
    toolsDescription: 'Escolha da nossa coleção de ferramentas de conversão de arquivos ultra-rápidas e de nível profissional',
    startNow: 'Começar Agora',
    
    // Tool descriptions
    pdfToWord: 'Converter documentos PDF para arquivos Word editáveis',
    wordToPdf: 'Converter documentos Word para formato PDF',
    pdfToImage: 'Extrair imagens de PDF ou converter páginas em imagens',
    imageToPdf: 'Combinar múltiplas imagens em um único PDF',
    pdfToPpt: 'Converter documentos PDF para apresentações PowerPoint',
    pptToPdf: 'Converter apresentações PowerPoint para PDF',
    pdfCompress: 'Reduzir o tamanho do arquivo PDF sem perda de qualidade',
    imageCompress: 'Comprimir imagens para reduzir o tamanho do arquivo',
    
    // Tool Page
    dropFiles: 'Solte seus arquivos aqui',
    clickToBrowse: 'ou clique para navegar • Suporta arquivos únicos ou múltiplos',
    chooseFiles: 'Escolher Arquivos',
    acceptedFormats: 'Formatos aceitos',
    filesSelected: 'Arquivos Selecionados',
    converting: 'Convertendo...',
    convertingFiles: 'Convertendo arquivos...',
    startConversion: 'Iniciar Conversão',
    convertAllFiles: 'Converter Todos os Arquivos',
    conversionComplete: 'Conversão Completa!',
    fileConverted: 'Seu arquivo foi convertido com sucesso',
    downloadFile: 'Baixar Arquivo',
    convertAnother: 'Converter Outro Arquivo',
    
    // Footer
    footerDescription: 'Converta seus arquivos instantaneamente com nossas ferramentas online rápidas, gratuitas e seguras.',
    quickLinks: 'Links Rápidos',
    legal: 'Legal',
    privacyPolicy: 'Política de Privacidade',
    termsOfService: 'Termos de Serviço',
    support: 'Suporte',
    copyright: '© 2025 Multi.Tools. Todos os direitos reservados.'
  },

  ru: {
    // Header - Russian
    home: 'Главная',
    tools: 'Инструменты',
    about: 'О нас',
    contact: 'Контакты',
    
    // Hero Section
    heroTitle: 'Конвертируйте ваши файлы',
    heroSubtitle: 'мгновенно',
    heroDescription: 'Преобразуйте ваши документы с помощью наших молниеносных, безопасных и полностью бесплатных инструментов конвертации файлов.',
    noRegistration: 'Регистрация не требуется.',
    chooseToolBtn: 'Выбрать Инструмент',
    uploadFileBtn: 'Загрузить Файл',
    newFeature: 'Новое: Теперь поддерживается загрузка нескольких файлов',
    
    // Stats
    filesConverted: 'Конвертированных Файлов',
    conversionTools: 'Инструментов Конвертации',
    freeSecure: 'Бесплатно и Безопасно',
    
    // Tools Grid
    toolsTitle: 'Мощные Инструменты Конвертации',
    toolsDescription: 'Выберите из нашей коллекции молниеносных, профессиональных инструментов конвертации файлов',
    startNow: 'Начать Сейчас',
    
    // Tool descriptions
    pdfToWord: 'Конвертировать PDF документы в редактируемые Word файлы',
    wordToPdf: 'Конвертировать Word документы в PDF формат',
    pdfToImage: 'Извлечь изображения из PDF или конвертировать страницы в изображения',
    imageToPdf: 'Объединить несколько изображений в один PDF',
    pdfToPpt: 'Конвертировать PDF документы в PowerPoint презентации',
    pptToPdf: 'Конвертировать PowerPoint презентации в PDF',
    pdfCompress: 'Уменьшить размер PDF файла без потери качества',
    imageCompress: 'Сжать изображения для уменьшения размера файла',
    
    // Tool Page
    dropFiles: 'Перетащите ваши файлы сюда',
    clickToBrowse: 'или нажмите для просмотра • Поддерживает одиночные или множественные файлы',
    chooseFiles: 'Выбрать Файлы',
    acceptedFormats: 'Принимаемые форматы',
    filesSelected: 'Файлов Выбрано',
    converting: 'Конвертация...',
    convertingFiles: 'Конвертация файлов...',
    startConversion: 'Начать Конвертацию',
    convertAllFiles: 'Конвертировать Все Файлы',
    conversionComplete: 'Конвертация Завершена!',
    fileConverted: 'Ваш файл был успешно конвертирован',
    downloadFile: 'Скачать Файл',
    convertAnother: 'Конвертировать Другой Файл',
    
    // Footer
    footerDescription: 'Конвертируйте ваши файлы мгновенно с помощью наших быстрых, бесплатных и безопасных онлайн инструментов.',
    quickLinks: 'Быстрые Ссылки',
    legal: 'Правовая информация',
    privacyPolicy: 'Политика Конфиденциальности',
    termsOfService: 'Условия Использования',
    support: 'Поддержка',
    copyright: '© 2025 Multi.Tools. Все права защищены.'
  },

  ar: {
    // Header - Arabic
    home: 'الرئيسية',
    tools: 'الأدوات',
    about: 'حول',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'حول ملفاتك',
    heroSubtitle: 'فوراً',
    heroDescription: 'حول مستنداتك باستخدام أدوات تحويل الملفات السريعة والآمنة والمجانية تماماً.',
    noRegistration: 'لا يتطلب تسجيل.',
    chooseToolBtn: 'اختر الأداة',
    uploadFileBtn: 'رفع ملف',
    newFeature: 'جديد: يتم الآن دعم رفع ملفات متعددة',
    
    // Stats
    filesConverted: 'الملفات المحولة',
    conversionTools: 'أدوات التحويل',
    freeSecure: 'مجاني وآمن',
    
    // Tools Grid
    toolsTitle: 'أدوات تحويل قوية',
    toolsDescription: 'اختر من مجموعتنا من أدوات تحويل الملفات السريعة والاحترافية',
    startNow: 'ابدأ الآن',
    
    // Tool descriptions
    pdfToWord: 'تحويل مستندات PDF إلى ملفات Word قابلة للتحرير',
    wordToPdf: 'تحويل مستندات Word إلى تنسيق PDF',
    pdfToImage: 'استخراج الصور من PDF أو تحويل الصفحات إلى صور',
    imageToPdf: 'دمج صور متعددة في PDF واحد',
    pdfToPpt: 'تحويل مستندات PDF إلى عروض PowerPoint التقديمية',
    pptToPdf: 'تحويل عروض PowerPoint التقديمية إلى PDF',
    pdfCompress: 'تقليل حجم ملف PDF دون فقدان الجودة',
    imageCompress: 'ضغط الصور لتقليل حجم الملف',
    
    // Tool Page
    dropFiles: 'اسحب ملفاتك هنا',
    clickToBrowse: 'أو انقر للتصفح • يدعم ملف واحد أو ملفات متعددة',
    chooseFiles: 'اختر الملفات',
    acceptedFormats: 'التنسيقات المقبولة',
    filesSelected: 'الملفات المحددة',
    converting: 'جاري التحويل...',
    convertingFiles: 'جاري تحويل الملفات...',
    startConversion: 'بدء التحويل',
    convertAllFiles: 'تحويل جميع الملفات',
    conversionComplete: 'اكتمل التحويل!',
    fileConverted: 'تم تحويل ملفك بنجاح',
    downloadFile: 'تحميل الملف',
    convertAnother: 'تحويل ملف آخر',
    
    // Footer
    footerDescription: 'حول ملفاتك فوراً باستخدام أدواتنا السريعة والمجانية والآمنة عبر الإنترنت.',
    quickLinks: 'روابط سريعة',
    legal: 'قانوني',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    support: 'الدعم',
    copyright: '© 2025 Multi.Tools. جميع الحقوق محفوظة.'
  },

  hi: {
    // Header - Hindi
    home: 'होम',
    tools: 'टूल्स',
    about: 'के बारे में',
    contact: 'संपर्क',
    
    // Hero Section
    heroTitle: 'अपनी फाइलों को कन्वर्ट करें',
    heroSubtitle: 'तुरंत',
    heroDescription: 'हमारे अति-तेज़, सुरक्षित और पूर्णतः मुफ्त फाइल कन्वर्जन टूल्स के साथ अपने दस्तावेज़ों को रूपांतरित करें।',
    noRegistration: 'कोई पंजीकरण आवश्यक नहीं।',
    chooseToolBtn: 'टूल चुनें',
    uploadFileBtn: 'फाइल अपलोड करें',
    newFeature: 'नया: अब मल्टिपल फाइल अपलोड समर्थित है',
    
    // Stats
    filesConverted: 'कन्वर्ट की गई फाइलें',
    conversionTools: 'कन्वर्जन टूल्स',
    freeSecure: 'मुफ्त और सुरक्षित',
    
    // Tools Grid
    toolsTitle: 'शक्तिशाली कन्वर्जन टूल्स',
    toolsDescription: 'हमारे अति-तेज़, पेशेवर-ग्रेड फाइल कन्वर्जन टूल्स के संग्रह से चुनें',
    startNow: 'अभी शुरू करें',
    
    // Tool descriptions
    pdfToWord: 'PDF दस्तावेज़ों को संपादन योग्य Word फाइलों में कन्वर्ट करें',
    wordToPdf: 'Word दस्तावेज़ों को PDF प्रारूप में कन्वर्ट करें',
    pdfToImage: 'PDF से छवियां निकालें या पृष्ठों को छवियों में कन्वर्ट करें',
    imageToPdf: 'कई छवियों को एक PDF में संयोजित करें',
    pdfToPpt: 'PDF दस्तावेज़ों को PowerPoint प्रस्तुतियों में कन्वर्ट करें',
    pptToPdf: 'PowerPoint प्रस्तुतियों को PDF में कन्वर्ट करें',
    pdfCompress: 'गुणवत्ता खोए बिना PDF फाइल का आकार कम करें',
    imageCompress: 'फाइल का आकार कम करने के लिए छवियों को संपीड़ित करें',
    
    // Tool Page
    dropFiles: 'अपनी फाइलें यहाँ ड्रॉप करें',
    clickToBrowse: 'या ब्राउज़ करने के लिए क्लिक करें • एकल या मल्टिपल फाइलों का समर्थन करता है',
    chooseFiles: 'फाइलें चुनें',
    acceptedFormats: 'स्वीकृत प्रारूप',
    filesSelected: 'फाइलें चयनित',
    converting: 'कन्वर्ट हो रहा है...',
    convertingFiles: 'फाइलें कन्वर्ट हो रही हैं...',
    startConversion: 'कन्वर्जन शुरू करें',
    convertAllFiles: 'सभी फाइलें कन्वर्ट करें',
    conversionComplete: 'कन्वर्जन पूर्ण!',
    fileConverted: 'आपकी फाइल सफलतापूर्वक कन्वर्ट हो गई है',
    downloadFile: 'फाइल डाउनलोड करें',
    convertAnother: 'दूसरी फाइल कन्वर्ट करें',
    
    // Footer
    footerDescription: 'हमारे तेज़, मुफ्त और सुरक्षित ऑनलाइन टूल्स के साथ अपनी फाइलों को तुरंत कन्वर्ट करें।',
    quickLinks: 'त्वरित लिंक',
    legal: 'कानूनी',
    privacyPolicy: 'गोपनीयता नीति',
    termsOfService: 'सेवा की शर्तें',
    support: 'सहायता',
    copyright: '© 2025 Multi.Tools। सभी अधिकार सुरक्षित।'
  },

  bn: {
    // Header - Bengali
    home: 'হোম',
    tools: 'টুলস',
    about: 'সম্পর্কে',
    contact: 'যোগাযোগ',
    
    // Hero Section
    heroTitle: 'আপনার ফাইল রূপান্তর করুন',
    heroSubtitle: 'তাৎক্ষণিকভাবে',
    heroDescription: 'আমাদের অতি-দ্রুত, নিরাপদ এবং সম্পূর্ণ বিনামূল্যের ফাইল রূপান্তর টুলস দিয়ে আপনার নথিগুলি রূপান্তরিত করুন।',
    noRegistration: 'কোন নিবন্ধন প্রয়োজন নেই।',
    chooseToolBtn: 'টুল নির্বাচন করুন',
    uploadFileBtn: 'ফাইল আপলোড করুন',
    newFeature: 'নতুন: একাধিক ফাইল আপলোড এখন সমর্থিত',
    
    // Stats
    filesConverted: 'রূপান্তরিত ফাইল',
    conversionTools: 'রূপান্তর টুলস',
    freeSecure: 'বিনামূল্যে এবং নিরাপদ',
    
    // Tools Grid
    toolsTitle: 'শক্তিশালী রূপান্তর টুলস',
    toolsDescription: 'আমাদের অতি-দ্রুত, পেশাদার-গ্রেড ফাইল রূপান্তর টুলসের সংগ্রহ থেকে নির্বাচন করুন',
    startNow: 'এখনই শুরু করুন',
    
    // Tool descriptions
    pdfToWord: 'PDF নথিগুলিকে সম্পাদনাযোগ্য Word ফাইলে রূপান্তর করুন',
    wordToPdf: 'Word নথিগুলিকে PDF ফরম্যাটে রূপান্তর করুন',
    pdfToImage: 'PDF থেকে ছবি বের করুন বা পৃষ্ঠাগুলিকে ছবিতে রূপান্তর করুন',
    imageToPdf: 'একাধিক ছবিকে একটি PDF-এ একত্রিত করুন',
    pdfToPpt: 'PDF নথিগুলিকে PowerPoint উপস্থাপনায় রূপান্তর করুন',
    pptToPdf: 'PowerPoint উপস্থাপনাগুলিকে PDF-এ রূপান্তর করুন',
    pdfCompress: 'গুণমান হারানো ছাড়াই PDF ফাইলের আকার কমান',
    imageCompress: 'ফাইলের আকার কমাতে ছবিগুলি সংকুচিত করুন',
    
    // Tool Page
    dropFiles: 'আপনার ফাইলগুলি এখানে ড্রপ করুন',
    clickToBrowse: 'বা ব্রাউজ করতে ক্লিক করুন • একক বা একাধিক ফাইল সমর্থন করে',
    chooseFiles: 'ফাইল নির্বাচন করুন',
    acceptedFormats: 'গৃহীত ফরম্যাট',
    filesSelected: 'ফাইল নির্বাচিত',
    converting: 'রূপান্তর হচ্ছে...',
    convertingFiles: 'ফাইল রূপান্তর হচ্ছে...',
    startConversion: 'রূপান্তর শুরু করুন',
    convertAllFiles: 'সব ফাইল রূপান্তর করুন',
    conversionComplete: 'রূপান্তর সম্পূর্ণ!',
    fileConverted: 'আপনার ফাইল সফলভাবে রূপান্তরিত হয়েছে',
    downloadFile: 'ফাইল ডাউনলোড করুন',
    convertAnother: 'অন্য ফাইল রূপান্তর করুন',
    
    // Footer
    footerDescription: 'আমাদের দ্রুত, বিনামূল্যে এবং নিরাপদ অনলাইন টুলস দিয়ে আপনার ফাইলগুলি তাৎক্ষণিকভাবে রূপান্তর করুন।',
    quickLinks: 'দ্রুত লিঙ্ক',
    legal: 'আইনি',
    privacyPolicy: 'গোপনীয়তা নীতি',
    termsOfService: 'সেবার শর্তাবলী',
    support: 'সহায়তা',
    copyright: '© 2025 Multi.Tools। সমস্ত অধিকার সংরক্ষিত।'
  },

  ko: {
    // Header - Korean
    home: '홈',
    tools: '도구',
    about: '소개',
    contact: '연락처',
    
    // Hero Section
    heroTitle: '파일을 변환하세요',
    heroSubtitle: '즉시',
    heroDescription: '초고속이고 안전하며 완전 무료인 파일 변환 도구로 문서를 변환하세요.',
    noRegistration: '등록이 필요하지 않습니다.',
    chooseToolBtn: '도구 선택',
    uploadFileBtn: '파일 업로드',
    newFeature: '새로운 기능: 이제 다중 파일 업로드가 지원됩니다',
    
    // Stats
    filesConverted: '변환된 파일',
    conversionTools: '변환 도구',
    freeSecure: '무료 및 안전',
    
    // Tools Grid
    toolsTitle: '강력한 변환 도구',
    toolsDescription: '초고속 전문급 파일 변환 도구 컬렉션에서 선택하세요',
    startNow: '지금 시작',
    
    // Tool descriptions
    pdfToWord: 'PDF 문서를 편집 가능한 Word 파일로 변환',
    wordToPdf: 'Word 문서를 PDF 형식으로 변환',
    pdfToImage: 'PDF에서 이미지 추출 또는 페이지를 이미지로 변환',
    imageToPdf: '여러 이미지를 하나의 PDF로 결합',
    pdfToPpt: 'PDF 문서를 PowerPoint 프레젠테이션으로 변환',
    pptToPdf: 'PowerPoint 프레젠테이션을 PDF로 변환',
    pdfCompress: '품질 손실 없이 PDF 파일 크기 줄이기',
    imageCompress: '파일 크기를 줄이기 위해 이미지 압축',
    
    // Tool Page
    dropFiles: '파일을 여기에 드롭하세요',
    clickToBrowse: '또는 클릭하여 찾아보기 • 단일 또는 다중 파일 지원',
    chooseFiles: '파일 선택',
    acceptedFormats: '허용되는 형식',
    filesSelected: '선택된 파일',
    converting: '변환 중...',
    convertingFiles: '파일 변환 중...',
    startConversion: '변환 시작',
    convertAllFiles: '모든 파일 변환',
    conversionComplete: '변환 완료!',
    fileConverted: '파일이 성공적으로 변환되었습니다',
    downloadFile: '파일 다운로드',
    convertAnother: '다른 파일 변환',
    
    // Footer
    footerDescription: '빠르고 무료이며 안전한 온라인 도구로 파일을 즉시 변환하세요.',
    quickLinks: '빠른 링크',
    legal: '법적 고지',
    privacyPolicy: '개인정보 보호정책',
    termsOfService: '서비스 약관',
    support: '지원',
    copyright: '© 2025 Multi.Tools. 모든 권리 보유.'
  },

  th: {
    // Header - Thai
    home: 'หน้าแรก',
    tools: 'เครื่องมือ',
    about: 'เกี่ยวกับ',
    contact: 'ติดต่อ',
    
    // Hero Section
    heroTitle: 'แปลงไฟล์ของคุณ',
    heroSubtitle: 'ทันที',
    heroDescription: 'แปลงเอกสารของคุณด้วยเครื่องมือแปลงไฟล์ที่รวดเร็ว ปลอดภัย และฟรีอย่างสมบูรณ์',
    noRegistration: 'ไม่ต้องลงทะเบียน',
    chooseToolBtn: 'เลือกเครื่องมือ',
    uploadFileBtn: 'อัปโหลดไฟล์',
    newFeature: 'ใหม่: ตอนนี้รองรับการอัปโหลดไฟล์หลายไฟล์แล้ว',
    
    // Stats
    filesConverted: 'ไฟล์ที่แปลงแล้ว',
    conversionTools: 'เครื่องมือแปลง',
    freeSecure: 'ฟรีและปลอดภัย',
    
    // Tools Grid
    toolsTitle: 'เครื่องมือแปลงที่ทรงพลัง',
    toolsDescription: 'เลือกจากคอลเลกชันเครื่องมือแปลงไฟล์ที่รวดเร็วและระดับมืออาชีพของเรา',
    startNow: 'เริ่มตอนนี้',
    
    // Tool descriptions
    pdfToWord: 'แปลงเอกสาร PDF เป็นไฟล์ Word ที่แก้ไขได้',
    wordToPdf: 'แปลงเอกสาร Word เป็นรูปแบบ PDF',
    pdfToImage: 'แยกรูปภาพจาก PDF หรือแปลงหน้าเป็นรูปภาพ',
    imageToPdf: 'รวมรูปภาพหลายรูปเป็น PDF เดียว',
    pdfToPpt: 'แปลงเอกสาร PDF เป็นงานนำเสนอ PowerPoint',
    pptToPdf: 'แปลงงานนำเสนอ PowerPoint เป็น PDF',
    pdfCompress: 'ลดขนาดไฟล์ PDF โดยไม่สูญเสียคุณภาพ',
    imageCompress: 'บีบอัดรูปภาพเพื่อลดขนาดไฟล์',
    
    // Tool Page
    dropFiles: 'วางไฟล์ของคุณที่นี่',
    clickToBrowse: 'หรือคลิกเพื่อเรียกดู • รองรับไฟล์เดี่ยวหรือหลายไฟล์',
    chooseFiles: 'เลือกไฟล์',
    acceptedFormats: 'รูปแบบที่ยอมรับ',
    filesSelected: 'ไฟล์ที่เลือก',
    converting: 'กำลังแปลง...',
    convertingFiles: 'กำลังแปลงไฟล์...',
    startConversion: 'เริ่มการแปลง',
    convertAllFiles: 'แปลงไฟล์ทั้งหมด',
    conversionComplete: 'การแปลงเสร็จสิ้น!',
    fileConverted: 'ไฟล์ของคุณได้รับการแปลงเรียบร้อยแล้ว',
    downloadFile: 'ดาวน์โหลดไฟล์',
    convertAnother: 'แปลงไฟล์อื่น',
    
    // Footer
    footerDescription: 'แปลงไฟล์ของคุณทันทีด้วยเครื่องมือออนไลน์ที่รวดเร็ว ฟรี และปลอดภัยของเรา',
    quickLinks: 'ลิงก์ด่วน',
    legal: 'กฎหมาย',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    termsOfService: 'เงื่อนไขการให้บริการ',
    support: 'การสนับสนุน',
    copyright: '© 2025 Multi.Tools สงวนลิขสิทธิ์ทั้งหมด'
  },

  vi: {
    // Header - Vietnamese
    home: 'Trang chủ',
    tools: 'Công cụ',
    about: 'Giới thiệu',
    contact: 'Liên hệ',
    
    // Hero Section
    heroTitle: 'Chuyển đổi tệp của bạn',
    heroSubtitle: 'ngay lập tức',
    heroDescription: 'Chuyển đổi tài liệu của bạn với các công cụ chuyển đổi tệp siêu nhanh, an toàn và hoàn toàn miễn phí.',
    noRegistration: 'Không cần đăng ký.',
    chooseToolBtn: 'Chọn Công cụ',
    uploadFileBtn: 'Tải lên Tệp',
    newFeature: 'Mới: Hiện đã hỗ trợ tải lên nhiều tệp',
    
    // Stats
    filesConverted: 'Tệp Đã Chuyển đổi',
    conversionTools: 'Công cụ Chuyển đổi',
    freeSecure: 'Miễn phí và An toàn',
    
    // Tools Grid
    toolsTitle: 'Công cụ Chuyển đổi Mạnh mẽ',
    toolsDescription: 'Chọn từ bộ sưu tập các công cụ chuyển đổi tệp siêu nhanh và chuyên nghiệp của chúng tôi',
    startNow: 'Bắt đầu Ngay',
    
    // Tool descriptions
    pdfToWord: 'Chuyển đổi tài liệu PDF thành tệp Word có thể chỉnh sửa',
    wordToPdf: 'Chuyển đổi tài liệu Word sang định dạng PDF',
    pdfToImage: 'Trích xuất hình ảnh từ PDF hoặc chuyển đổi trang thành hình ảnh',
    imageToPdf: 'Kết hợp nhiều hình ảnh thành một PDF',
    pdfToPpt: 'Chuyển đổi tài liệu PDF thành bài thuyết trình PowerPoint',
    pptToPdf: 'Chuyển đổi bài thuyết trình PowerPoint thành PDF',
    pdfCompress: 'Giảm kích thước tệp PDF mà không mất chất lượng',
    imageCompress: 'Nén hình ảnh để giảm kích thước tệp',
    
    // Tool Page
    dropFiles: 'Thả tệp của bạn vào đây',
    clickToBrowse: 'hoặc nhấp để duyệt • Hỗ trợ tệp đơn lẻ hoặc nhiều tệp',
    chooseFiles: 'Chọn Tệp',
    acceptedFormats: 'Định dạng được chấp nhận',
    filesSelected: 'Tệp Đã chọn',
    converting: 'Đang chuyển đổi...',
    convertingFiles: 'Đang chuyển đổi tệp...',
    startConversion: 'Bắt đầu Chuyển đổi',
    convertAllFiles: 'Chuyển đổi Tất cả Tệp',
    conversionComplete: 'Chuyển đổi Hoàn tất!',
    fileConverted: 'Tệp của bạn đã được chuyển đổi thành công',
    downloadFile: 'Tải xuống Tệp',
    convertAnother: 'Chuyển đổi Tệp Khác',
    
    // Footer
    footerDescription: 'Chuyển đổi tệp của bạn ngay lập tức với các công cụ trực tuyến nhanh, miễn phí và an toàn của chúng tôi.',
    quickLinks: 'Liên kết Nhanh',
    legal: 'Pháp lý',
    privacyPolicy: 'Chính sách Bảo mật',
    termsOfService: 'Điều khoản Dịch vụ',
    support: 'Hỗ trợ',
    copyright: '© 2025 Multi.Tools. Tất cả quyền được bảo lưu.'
  },

  id: {
    // Header - Indonesian
    home: 'Beranda',
    tools: 'Alat',
    about: 'Tentang',
    contact: 'Kontak',
    
    // Hero Section
    heroTitle: 'Konversi file Anda',
    heroSubtitle: 'secara instan',
    heroDescription: 'Ubah dokumen Anda dengan alat konversi file yang super cepat, aman, dan sepenuhnya gratis.',
    noRegistration: 'Tidak perlu registrasi.',
    chooseToolBtn: 'Pilih Alat',
    uploadFileBtn: 'Unggah File',
    newFeature: 'Baru: Unggah beberapa file sekarang didukung',
    
    // Stats
    filesConverted: 'File Terkonversi',
    conversionTools: 'Alat Konversi',
    freeSecure: 'Gratis dan Aman',
    
    // Tools Grid
    toolsTitle: 'Alat Konversi yang Kuat',
    toolsDescription: 'Pilih dari koleksi alat konversi file super cepat dan tingkat profesional kami',
    startNow: 'Mulai Sekarang',
    
    // Tool descriptions
    pdfToWord: 'Konversi dokumen PDF ke file Word yang dapat diedit',
    wordToPdf: 'Konversi dokumen Word ke format PDF',
    pdfToImage: 'Ekstrak gambar dari PDF atau konversi halaman ke gambar',
    imageToPdf: 'Gabungkan beberapa gambar menjadi satu PDF',
    pdfToPpt: 'Konversi dokumen PDF ke presentasi PowerPoint',
    pptToPdf: 'Konversi presentasi PowerPoint ke PDF',
    pdfCompress: 'Kurangi ukuran file PDF tanpa kehilangan kualitas',
    imageCompress: 'Kompres gambar untuk mengurangi ukuran file',
    
    // Tool Page
    dropFiles: 'Letakkan file Anda di sini',
    clickToBrowse: 'atau klik untuk menjelajah • Mendukung file tunggal atau beberapa file',
    chooseFiles: 'Pilih File',
    acceptedFormats: 'Format yang diterima',
    filesSelected: 'File Terpilih',
    converting: 'Mengkonversi...',
    convertingFiles: 'Mengkonversi file...',
    startConversion: 'Mulai Konversi',
    convertAllFiles: 'Konversi Semua File',
    conversionComplete: 'Konversi Selesai!',
    fileConverted: 'File Anda telah berhasil dikonversi',
    downloadFile: 'Unduh File',
    convertAnother: 'Konversi File Lain',
    
    // Footer
    footerDescription: 'Konversi file Anda secara instan dengan alat online kami yang cepat, gratis, dan aman.',
    quickLinks: 'Tautan Cepat',
    legal: 'Hukum',
    privacyPolicy: 'Kebijakan Privasi',
    termsOfService: 'Syarat Layanan',
    support: 'Dukungan',
    copyright: '© 2025 Multi.Tools. Semua hak dilindungi.'
  },

  ms: {
    // Header - Malay
    home: 'Laman Utama',
    tools: 'Alatan',
    about: 'Mengenai',
    contact: 'Hubungi',
    
    // Hero Section
    heroTitle: 'Tukar fail anda',
    heroSubtitle: 'serta-merta',
    heroDescription: 'Ubah dokumen anda dengan alatan penukaran fail yang super pantas, selamat dan percuma sepenuhnya.',
    noRegistration: 'Tiada pendaftaran diperlukan.',
    chooseToolBtn: 'Pilih Alatan',
    uploadFileBtn: 'Muat Naik Fail',
    newFeature: 'Baharu: Muat naik berbilang fail kini disokong',
    
    // Stats
    filesConverted: 'Fail Ditukar',
    conversionTools: 'Alatan Penukaran',
    freeSecure: 'Percuma dan Selamat',
    
    // Tools Grid
    toolsTitle: 'Alatan Penukaran yang Berkuasa',
    toolsDescription: 'Pilih daripada koleksi alatan penukaran fail super pantas dan gred profesional kami',
    startNow: 'Mula Sekarang',
    
    // Tool descriptions
    pdfToWord: 'Tukar dokumen PDF kepada fail Word yang boleh diedit',
    wordToPdf: 'Tukar dokumen Word kepada format PDF',
    pdfToImage: 'Ekstrak imej daripada PDF atau tukar halaman kepada imej',
    imageToPdf: 'Gabungkan berbilang imej menjadi satu PDF',
    pdfToPpt: 'Tukar dokumen PDF kepada pembentangan PowerPoint',
    pptToPdf: 'Tukar pembentangan PowerPoint kepada PDF',
    pdfCompress: 'Kurangkan saiz fail PDF tanpa kehilangan kualiti',
    imageCompress: 'Mampat imej untuk mengurangkan saiz fail',
    
    // Tool Page
    dropFiles: 'Letakkan fail anda di sini',
    clickToBrowse: 'atau klik untuk melayari • Menyokong fail tunggal atau berbilang',
    chooseFiles: 'Pilih Fail',
    acceptedFormats: 'Format yang diterima',
    filesSelected: 'Fail Dipilih',
    converting: 'Menukar...',
    convertingFiles: 'Menukar fail...',
    startConversion: 'Mula Penukaran',
    convertAllFiles: 'Tukar Semua Fail',
    conversionComplete: 'Penukaran Selesai!',
    fileConverted: 'Fail anda telah berjaya ditukar',
    downloadFile: 'Muat Turun Fail',
    convertAnother: 'Tukar Fail Lain',
    
    // Footer
    footerDescription: 'Tukar fail anda serta-merta dengan alatan dalam talian kami yang pantas, percuma dan selamat.',
    quickLinks: 'Pautan Pantas',
    legal: 'Undang-undang',
    privacyPolicy: 'Dasar Privasi',
    termsOfService: 'Terma Perkhidmatan',
    support: 'Sokongan',
    copyright: '© 2025 Multi.Tools. Semua hak terpelihara.'
  },

  tr: {
    // Header - Turkish
    home: 'Ana Sayfa',
    tools: 'Araçlar',
    about: 'Hakkında',
    contact: 'İletişim',
    
    // Hero Section
    heroTitle: 'Dosyalarınızı dönüştürün',
    heroSubtitle: 'anında',
    heroDescription: 'Belgelerinizi ultra hızlı, güvenli ve tamamen ücretsiz dosya dönüştürme araçlarımızla dönüştürün.',
    noRegistration: 'Kayıt gerekli değil.',
    chooseToolBtn: 'Araç Seç',
    uploadFileBtn: 'Dosya Yükle',
    newFeature: 'Yeni: Çoklu dosya yükleme artık destekleniyor',
    
    // Stats
    filesConverted: 'Dönüştürülen Dosyalar',
    conversionTools: 'Dönüştürme Araçları',
    freeSecure: 'Ücretsiz ve Güvenli',
    
    // Tools Grid
    toolsTitle: 'Güçlü Dönüştürme Araçları',
    toolsDescription: 'Ultra hızlı, profesyonel seviye dosya dönüştürme araçları koleksiyonumuzdan seçin',
    startNow: 'Şimdi Başla',
    
    // Tool descriptions
    pdfToWord: 'PDF belgelerini düzenlenebilir Word dosyalarına dönüştür',
    wordToPdf: 'Word belgelerini PDF formatına dönüştür',
    pdfToImage: 'PDF\'den görüntü çıkar veya sayfaları görüntülere dönüştür',
    imageToPdf: 'Birden fazla görüntüyü tek bir PDF\'de birleştir',
    pdfToPpt: 'PDF belgelerini PowerPoint sunumlarına dönüştür',
    pptToPdf: 'PowerPoint sunumlarını PDF\'ye dönüştür',
    pdfCompress: 'Kalite kaybı olmadan PDF dosya boyutunu küçült',
    imageCompress: 'Dosya boyutunu küçültmek için görüntüleri sıkıştır',
    
    // Tool Page
    dropFiles: 'Dosyalarınızı buraya bırakın',
    clickToBrowse: 'veya göz atmak için tıklayın • Tekli veya çoklu dosyaları destekler',
    chooseFiles: 'Dosya Seç',
    acceptedFormats: 'Kabul edilen formatlar',
    filesSelected: 'Seçilen Dosyalar',
    converting: 'Dönüştürülüyor...',
    convertingFiles: 'Dosyalar dönüştürülüyor...',
    startConversion: 'Dönüştürmeyi Başlat',
    convertAllFiles: 'Tüm Dosyaları Dönüştür',
    conversionComplete: 'Dönüştürme Tamamlandı!',
    fileConverted: 'Dosyanız başarıyla dönüştürüldü',
    downloadFile: 'Dosyayı İndir',
    convertAnother: 'Başka Dosya Dönüştür',
    
    // Footer
    footerDescription: 'Hızlı, ücretsiz ve güvenli çevrimiçi araçlarımızla dosyalarınızı anında dönüştürün.',
    quickLinks: 'Hızlı Bağlantılar',
    legal: 'Yasal',
    privacyPolicy: 'Gizlilik Politikası',
    termsOfService: 'Hizmet Şartları',
    support: 'Destek',
    copyright: '© 2025 Multi.Tools. Tüm hakları saklıdır.'
  }
};

// Available languages
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'ps', name: 'پښتو', flag: '🇦🇫' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' }
];

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load saved language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('multitools-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Save language to localStorage when changed
  useEffect(() => {
    localStorage.setItem('multitools-language', currentLanguage);
    // Set document direction for RTL languages
    document.documentElement.dir = ['ur', 'ps', 'ar'].includes(currentLanguage) ? 'rtl' : 'ltr';
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
    isRTL: ['ur', 'ps', 'ar'].includes(currentLanguage)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};