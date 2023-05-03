import { useContext } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { VideoContext } from "../Context/VideoContextProvider";

export const ParticularVideo = ()=>{
    const {videoData,likeHandler,watchLaterHandler} = useContext(VideoContext);
    const {videoId} = useParams();

    const selectedVideo = videoData.find((item)=> item.id.toString() === videoId);
    console.log(selectedVideo)
    return(
        <div>
            <h2>Particular Video</h2>
            <div>
                <img src={selectedVideo.thumbnail} alt="video"/>
                <p>{selectedVideo.title}</p>
                <Link to={selectedVideo.url}>Watch Here</Link>
                <p>Description : {selectedVideo.description}</p>
                <p>Duration : {selectedVideo.duration}</p>
                <button onClick={()=>likeHandler(selectedVideo)}>Like</button>
                <button onClick={()=>watchLaterHandler(selectedVideo)}>Add to watch Later</button>
            </div>
        </div>
    )
}