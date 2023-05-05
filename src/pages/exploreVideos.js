import ErrorFetch from "@/components/ErrorFetch";
import ExploreVideos from "@/components/ExploreVideos";
import React, { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   try {
//     // Fetch data from an API
//     const res = await fetch(process.env.NEXT_PUBLIC_YOUTUBEURL);
//     const data = await res.json();

//     // Extract video items
//     const videoItems = data.items;

//     // Pass video items to the page component as props
//     return {
//       props: { videoItems },
//     };
//   } catch (error) {
//     // Handle errors here
//     console.error(error);
//     return {
//       props: { videoItems: null, error: "Failed to fetch data" },
//     };
//   }
// }

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
