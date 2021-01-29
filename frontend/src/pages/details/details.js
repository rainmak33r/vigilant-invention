import {Link, useHistory, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {APP_URLS} from "../../routes/app.urls";
import useVideoApi from "../../shared/hooks/useVideoApi";

const Details = () => {
  let {id} = useParams();
  const [data, setData] = useState({})
  const history = useHistory()
  const {fetchVideoById} = useVideoApi()

  useEffect(() => {
    fetchVideoById(id).then(setData)
  }, [fetchVideoById, id])

  const handleEditClick = () => {
    history.push(APP_URLS.edit.replace(':id', id))
  }

  return <div className="container mx-autp px-4 md:px-20">
    <div className="px-4 py-6">
      <div className="flex sm:flex-col justify-between mb-3">
        <div>
          <h1 className="text-indigo-900 text-3xl sm:text-2xl">{data.title}</h1>
          <Link to={APP_URLS.home} className="text-blue-500 underline">Go back</Link>
        </div>
        <div>
          <button type="button" onClick={handleEditClick} className="bg-green-500 rounded hover:bg-green-700 px-4 py-2 focus:outline-none">Edit</button>
        </div>
      </div>
      <div id="responsiveVideoWrapper" className="relative h-0 pb-fluid-video">
        <iframe
          title={data.title}
          className="absolute top-0 left-0 w-full h-full"
          src={`${data.url}?autoplay=1&controls=0&rel=0&modestbranding=1&loop=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          allowFullScreen
        />
      </div>
    </div>
  </div>
}

export default Details
