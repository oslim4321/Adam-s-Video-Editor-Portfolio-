import React from "react";

function VideoPlayer({ videoItems }) {
  return (
    // <iframe
    //   width="560"
    //   height="315"
    //   src={`https://www.youtube.com/embed/${videoId}`}
    //   frameborder="0"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //   allowfullscreen
    // ></iframe>

    <>
      {videoItems.map((item) => (
        <div key={item.id}>
          <h2>{item.snippet.title}</h2>
          <p>{item.snippet.description}</p>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
            title={item.snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </>
  );
}

export default VideoPlayer;
