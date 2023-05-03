import './App.css'
import {Link, Route, Routes} from "react-router-dom"
import { Home } from './Pages/Home'
import { Videos } from './Pages/Videos'
import { LikedVideos } from './Pages/LikedVideos'
import { WatchLater } from './Pages/WatchLater'
import { ParticularVideo } from './Pages/ParticularVideo'
import { useContext } from 'react'
import { VideoContext } from './Context/VideoContextProvider'

function App() {
  const {likedVideo,watchLater} = useContext(VideoContext);

  return (
    <div>
      <nav className="Nav">
        <Link to="/">Home ||</Link>
        <Link to="/videos"> Videos ||</Link>
        <Link to="/likedvideos"> Liked Videos({likedVideo?.length}) ||</Link>
        <Link to="/watchlater"> Watch Later({watchLater?.length})</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/likedvideos" element={<LikedVideos/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/video/:videoId" element={<ParticularVideo/>}/>
      </Routes>
    </div>
  )
}

export default App
