import ToolPage from '../components/ToolPage';

const ImageToPdfPage = () => {
  return (
    <ToolPage
      toolName="Image to PDF Converter"
      toolIcon="🖼️➡️📄"
      acceptedTypes={[
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp'
      ]}
      outputFormat=".pdf"
      description="Combine multiple images into a single PDF document"
    />
  );
};

export default ImageToPdfPage;