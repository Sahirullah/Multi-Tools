import ToolPage from '../components/ToolPage';

const PdfToImagePage = () => {
  return (
    <ToolPage
      toolName="PDF to Image Converter"
      toolIcon="📄➡️🖼️"
      acceptedTypes={['application/pdf']}
      outputFormat=".jpg"
      description="Extract images from PDF or convert PDF pages to high-quality images"
    />
  );
};

export default PdfToImagePage;