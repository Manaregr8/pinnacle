"use client";
import { useEffect, useState } from "react";

// Card component for each video
const VideoCard = ({ video }: { video: any }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white dark:bg-dark-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-dark dark:text-white">{video.title}</h3>
          <p className="text-sm text-dark-6 dark:text-dark-3 mt-2">{video.description}</p>
        </div>
      </div>
    </div>
  );
};

const YouTubeComp = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("light");

  // Fetch video data from the API
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/youtube");
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching YouTube data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`transition-all duration-500 ${theme === "dark" ? "bg-dark-800" : "bg-white"}`}>
      <div className="max-w-screen-xl mx-auto py-8 px-4">

        {loading ? (
          <div className="text-center text-dark dark:text-white">Loading videos...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.videoId} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeComp;
