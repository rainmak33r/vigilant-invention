import VideoForm from "../../shared/components/video-form";
import useVideoApi from "../../shared/hooks/useVideoApi";
import {APP_URLS} from "../../routes/app.urls";
import {useHistory} from "react-router-dom";

const Create = () => {
  const history = useHistory()
  const {createVideo} = useVideoApi()

  const handleGoBack = () => {
    history.goBack()
  }

  const handleSaveVideo = (video) => {
    createVideo(video)
      .then((item) => {
        history.push(APP_URLS.videoDetails.replace(':id', item.id))
      })
  }
  return <div className="container mx-autp px-4 md:px-20">
    <div className="px-4 py-6">
      <VideoForm onSubmit={handleSaveVideo} onGoBack={handleGoBack}/>
    </div>
  </div>
}

export default Create
