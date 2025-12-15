import ToolPage from '../components/ToolPage';

const WordToPdfPage = () => {
  return (
    <ToolPage
      toolName="Word to PDF Converter"
      toolIcon="📝➡️📄"
      acceptedTypes={[
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/msword'
      ]}
      outputFormat=".pdf"
      description="Convert your Word documents to PDF format for easy sharing and printing"
    />
  );
};

export default WordToPdfPage;