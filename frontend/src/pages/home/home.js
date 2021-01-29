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
    history.push(APP_URLS.video.replace(':id', id))
  }

  return <div className="container">
    <List items={videos} onItemClick={onCardClick}/>
  </div>
}
export default Home
