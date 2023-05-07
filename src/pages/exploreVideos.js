import ErrorFetch from "@/components/ErrorFetch";
import ExploreVideos from "@/components/ExploreVideos";
import React, { useEffect, useState } from "react";

function VideoList({ videoItems }) {
  // console.log(videoItems);
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const [Error, setError] = useState(false);
  const [playlistId, setplaylistId] = useState(null);

  const fetchVideo = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/getVideos?playlistId=${playlistId}`);
      const data = await res.json();
      const videoItems = data.items;
      setVideoData(videoItems);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, [playlistId]);

  if (Error) {
    return <ErrorFetch error={"Failed loading data"} />;
  }
  return (
    <div>
      {/* {loading && <div className="spinner">loding</div>} */}
      <ExploreVideos
        videoItems={videoData}
        // onVideoLoad={handleVideoLoad}
        loading={loading}
        setplaylistId={setplaylistId}
      />
    </div>
  );
}

export default VideoList;
