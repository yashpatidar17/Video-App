import { useContext } from "react"
import { VideoContext } from "../Context/VideoContextProvider"


export const Home = ()=>{
     const {navigationHandler} = useContext(VideoContext)
    
    return(
        <div className="card2">      
            <h2>Welcome to video Library</h2>
            <h2>To browse all videos,Click the below button or go to the videos page.</h2>
            <button onClick={navigationHandler}>Explore Videos</button>
        </div>
    )
}