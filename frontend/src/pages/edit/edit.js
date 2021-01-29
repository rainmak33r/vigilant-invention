import useVideoApi from "../../shared/hooks/useVideoApi";
import {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {APP_URLS} from "../../routes/app.urls";
import VideoEditForm from "../../shared/components/forms/video-edit-form";

const Edit = () => {
  let {id} = useParams();
  const [data, setData] = useState({})
  const history = useHistory()
  const {fetchVideoById, updateVideoById} = useVideoApi()

  useEffect(() => {
    fetchVideoById(id).then(setData)
  }, [fetchVideoById, id])

  const handleGoBack = () => {
    history.goBack()
  }

  const handleSaveVideo = (video) => {
    updateVideoById(id, video)
      .then(() => {
        history.push(APP_URLS.home)
      })
  }


  return <div className="container mx-autp px-4 md:px-5 px-20">
    <div className="px-4 py-6">
      <VideoEditForm video={data} onSubmit={handleSaveVideo} onGoBack={handleGoBack}/>
    </div>
  </div>
}

export default Edit
