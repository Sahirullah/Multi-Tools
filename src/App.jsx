import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import {
  PdfToWordPage,
  WordToPdfPage,
  PdfToImagePage,
  ImageToPdfPage,
  PdfToPptPage,
  PptToPdfPage,
  PdfCompressPage,
  ImageCompressPage,
  LoginPage,
  AboutPage,
  ContactPage
} from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pdf-to-word" element={<PdfToWordPage />} />
        <Route path="/word-to-pdf" element={<WordToPdfPage />} />
        <Route path="/pdf-to-image" element={<PdfToImagePage />} />
        <Route path="/image-to-pdf" element={<ImageToPdfPage />} />
        <Route path="/pdf-to-ppt" element={<PdfToPptPage />} />
        <Route path="/ppt-to-pdf" element={<PptToPdfPage />} />
        <Route path="/pdf-compress" element={<PdfCompressPage />} />
        <Route path="/image-compress" element={<ImageCompressPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
