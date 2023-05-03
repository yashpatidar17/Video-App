import { useContext } from "react";
import { VideoContext } from "../Context/VideoContextProvider";
import { Link } from "react-router-dom";

export const Videos = () => {
  const { videoData, likeHandler, watchLaterHandler } =
    useContext(VideoContext);
  // console.log(videoData)
  return (
    <>
      <h2>All Videos</h2>
      <div className="container">
        {videoData.map((video) => {
          const { id, title, description, url, thumbnail, duration } = video;
          return (
            <div className="card" key={id}>
              <img src={thumbnail} alt="video pic" />
              <p>{title}</p>
              {/* <Link to={url} target="_blank">Watch Here</Link> */}
              <Link to={`/video/${id}`}>Go to Videos</Link>
              <button onClick={() => likeHandler(video)}>Like</button>
              <button onClick={() => watchLaterHandler(video)}>
                Add to watch later
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
