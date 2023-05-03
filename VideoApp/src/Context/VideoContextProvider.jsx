import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fakeFetch } from "../Data/Api";

export const VideoContext = createContext();
export const VideoContextProvider = ({ children }) => {
  const [videoData, setVideoData] = useState([]);
  const [likedVideo, setLikedVideo] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate("/videos");
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await fakeFetch("https://example.com/api/videos");
        setVideoData(data.videos);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const likeHandler = (item) => {
    const alreadyLiked = likedVideo.find((video)=> video.id === item.id)
    if(alreadyLiked){
        setLikedVideo((prev)=>[...prev])
    }else{
        setLikedVideo((prev) => [...prev, item]);
    }
    
  };

  const watchLaterHandler = (wlItem) => {
    const alreadyWatched = watchLater.find((video)=> video.id === wlItem.id)
    if(alreadyWatched){
        setWatchLater((prev)=>[...prev])
    }else{
        setWatchLater((prev) => [...prev, wlItem]);
    }
  };

  return (
    <div>
      <VideoContext.Provider
        value={{
          navigationHandler,
          videoData,
          likeHandler,
          watchLaterHandler,
          likedVideo,
          watchLater,
        }}
      >
        {children}
      </VideoContext.Provider>
    </div>
  );
};
