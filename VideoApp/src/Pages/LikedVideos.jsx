import { useContext } from "react"
import { VideoContext } from "../Context/VideoContextProvider"

export const LikedVideos = ()=>{
    const {likedVideo} = useContext(VideoContext)
    return(
        <div className="container">
        <h2>Liked Videos</h2>
            {likedVideo.map((item)=>(
                <div className="card1" key={item.id}>
                    <img src={item.thumbnail} alt="video"/>
                    <p>{item.title}</p>
                    <hr></hr>
                </div>
            ))}
        </div>
    )
}