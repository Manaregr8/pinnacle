interface BlogCardProps {
  title: string;
  content: string;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content, onClick }) => {
  // Limit the content to a preview while rendering HTML
  const previewContent = content.substring(0, 150); // Adjust the preview length as needed

  return (
    <div
      className="p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer bg-white"
      onClick={onClick}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p
        className="text-gray-600 text-base mb-4"
        dangerouslySetInnerHTML={{ __html: previewContent }}
      />
      <span className="text-blue-500 font-semibold">Read more...</span>
    </div>
  );
};

export default BlogCard;
