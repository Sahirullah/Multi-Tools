import ToolPage from '../components/ToolPage';

const ImageCompressPage = () => {
  return (
    <ToolPage
      toolName="Image Compressor"
      toolIcon="🖼️🗜️"
      acceptedTypes={[
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/bmp',
        'image/webp'
      ]}
      outputFormat=".jpg"
      description="Compress images to reduce file size while maintaining visual quality"
    />
  );
};

export default ImageCompressPage;