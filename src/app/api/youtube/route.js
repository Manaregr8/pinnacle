// src/app/api/youtube/route.js

export async function GET(req, res) {
  const API_KEY = "AIzaSyAncuw1yKqe5tb8rTMHX3qNAKIblKoxoAI"; // Your API key
  const CHANNEL_ID = "UCz6g2YiUmSeZVg-QxB-lKSQ"; // Replace with your YouTube channel ID
  const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

  try {
    // Fetch video data for the channel
    const response = await fetch(
      `${BASE_URL}?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&order=date&key=${API_KEY}`
    );

    // Check if the response is successful
    if (!response.ok) {
      throw new Error("Failed to fetch data from YouTube API");
    }

    const data = await response.json();

    // Extract and return the video data
    const videos = data.items.map((item) => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
    }));

    return new Response(JSON.stringify(videos), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch YouTube videos" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
