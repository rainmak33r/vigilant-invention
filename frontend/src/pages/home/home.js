import List from "../../shared/components/list";
import {useEffect, useState} from "react";
import {APP_URLS} from "../../routes/app.urls";
import {useHistory} from "react-router-dom";
import useVideoApi from "../../shared/hooks/useVideoApi";

const Home = () => {
  const [videos, setVideos] = useState([])
  const history = useHistory()
  const {fetchVideos} = useVideoApi()

  useEffect(() => {
    fetchVideos().then(setVideos)
  }, [fetchVideos])

  const onCardClick = (id) => {
    history.push(APP_URLS.videoDetails.replace(':id', id))
  }

  const onNewClick = () => {
    history.push(APP_URLS.newVideo)
  }

  return <div className="container">
    <div className="my-2">
      <button onClick={onNewClick} className="mx-0.5 bg-green-700 rounded text-white px-4 py-2 focus:outline-none">Create</button>
    </div>
    <List items={videos} onItemClick={onCardClick}/>
  </div>
}
export default Home
