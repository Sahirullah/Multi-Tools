import ToolPage from '../components/ToolPage';

const PdfToPptPage = () => {
  return (
    <ToolPage
      toolName="PDF to PowerPoint Converter"
      toolIcon="📄➡️📊"
      acceptedTypes={['application/pdf']}
      outputFormat=".pptx"
      description="Convert PDF documents to editable PowerPoint presentations"
    />
  );
};

export default PdfToPptPage;