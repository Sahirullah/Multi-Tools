import ToolPage from '../components/ToolPage';

const PdfToWordPage = () => {
  return (
    <ToolPage
      toolName="PDF to Word Converter"
      toolIcon="📄➡️📝"
      acceptedTypes={['application/pdf']}
      outputFormat=".docx"
      description="Convert your PDF documents to editable Word files quickly and easily"
    />
  );
};

export default PdfToWordPage;