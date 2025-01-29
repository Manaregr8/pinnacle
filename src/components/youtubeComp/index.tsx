"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// Card component for each video
const VideoCard = ({ video }: { video: any }) => {
  return (
    <Link href={video.url} target="_blank" rel="noopener noreferrer" className="w-full max-w-[250px]">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-dark">{video.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{video.description}</p>
        </div>
      </div>
    </Link>
  );
};

const YouTubeComp = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

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

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-8 px-4">
        {loading ? (
          <div className="text-center text-dark">Loading videos...</div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
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
