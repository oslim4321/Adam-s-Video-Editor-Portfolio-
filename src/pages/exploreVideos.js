// import VideoPlayer from "@/components/VideoPlayer";
// import React from "react";
// // cnannell id to generate different playlist
// /*     // "https://youtube.googleapis.com/youtube/v3/playlists?channelId=UCRlV33-dIWOkQlex3XkC7Dw&key=AIzaSyAXcq1J0MTDhZjg8Cw2oKi0iZAIg8UOOGI"
//  */

// export async function getServerSideProps(context) {
//   // Fetch data from an API
//   const res = await fetch(process.env.youtubeurl);
//   const data = await res.json();

//   // Pass data to the page component as props
//   return {
//     props: { data },
//   };
// }

// function MyPage({ data }) {
//   const { items } = data;

//   // Use the data to render the page
//   return (
//     <>
//       <h1>Video player:</h1>
//       <VideoPlayer videoId={videoId} />
//     </>
//   );
// }

// export default MyPage;

import ExploreVideos from "@/components/ExploreVideos";
import React, { useState } from "react";

export async function getServerSideProps(context) {
  // Fetch data from an API
  const res = await fetch(process.env.youtubeurl);
  const data = await res.json();

  // Extract video items
  const videoItems = data.items;

  // Pass video items to the page component as props
  return {
    props: { videoItems },
  };
}

function VideoList({ videoItems }) {
  console.log(videoItems);
  const [loading, setLoading] = useState(true);

  function handleVideoLoad() {
    setLoading(false);
  }

  return (
    <div>
      {/* {loading && <div className="spinner">loding</div>} */}
      <ExploreVideos
        videoItems={videoItems}
        onVideoLoad={handleVideoLoad}
        loading={loading}
      />
    </div>
  );
}

export default VideoList;
