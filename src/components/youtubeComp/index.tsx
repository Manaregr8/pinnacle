"use client";
import "./youtube.css";
import { useEffect } from "react";

const YouTubeWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="cleanContainerYoutube elfsight-app-4ea9ca53-6e5c-4d7d-b58b-5736cf58a3f1" data-elfsight-app-lazy></div>
  );
};

export default YouTubeWidget;
