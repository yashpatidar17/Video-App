import { useContext } from "react";
import { VideoContext } from "../Context/VideoContextProvider";

export const WatchLater = () => {
  const { watchLater } = useContext(VideoContext);
  return (
    <div className="card2">
      <h2>Watch Later</h2>
      <div className="container">
        {watchLater.map((item) => (
          <div className="card1" key={item.id}>
            <img src={item.thumbnail} alt="video" />
            <p>{item.title}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};
