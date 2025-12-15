import ToolPage from '../components/ToolPage';

const PdfCompressPage = () => {
  return (
    <ToolPage
      toolName="PDF Compressor"
      toolIcon="📄🗜️"
      acceptedTypes={['application/pdf']}
      outputFormat=".pdf"
      description="Reduce PDF file size without losing quality - perfect for email and web sharing"
    />
  );
};

export default PdfCompressPage;