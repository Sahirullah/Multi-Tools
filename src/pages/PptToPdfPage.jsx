import ToolPage from '../components/ToolPage';

const PptToPdfPage = () => {
  return (
    <ToolPage
      toolName="PowerPoint to PDF Converter"
      toolIcon="📊➡️📄"
      acceptedTypes={[
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        'application/vnd.ms-powerpoint'
      ]}
      outputFormat=".pdf"
      description="Convert PowerPoint presentations to PDF format for easy sharing"
    />
  );
};

export default PptToPdfPage;