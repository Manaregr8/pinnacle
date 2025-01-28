const API_KEY = "AIzaSyAncuw1yKqe5tb8rTMHX3qNAKIblKoxoAI"; // Replace with your YouTube Data API key
const CHANNEL_ID = "UCz6g2YiUmSeZVg-QxB-lKSQ"; // Replace with the channel ID (e.g., UCXXXXXXXXXXXXX)
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// API handler to fetch videos from the channel
export default async function handler(req, res) {
  try {
    // Fetch the video data for the specific channel
    const response = await fetch(
      `${BASE_URL}?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${API_KEY}`
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch data from YouTube API");
    }

    const data = await response.json();

    // Extract relevant video data
    const videos = data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
    }));

    // Respond with the video data
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    res.status(500).json({ error: "Failed to fetch YouTube videos" });
  }
}
