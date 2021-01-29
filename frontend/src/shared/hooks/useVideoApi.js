import {useCallback} from "react";

const useVideoApi = () => {

  const updateById = useCallback((id, video) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/videos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video)
    }).then(res => res.json())
  }, [])

  const create = useCallback((video) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video)
    }).then(res => res.json())
  }, [])

  const fetchList = useCallback(() => {
    return fetch(`${process.env.REACT_APP_API_HOST}/videos`).then(res => res.json())
  }, [])

  const fetchById = useCallback((id) => {
    return fetch(`${process.env.REACT_APP_API_HOST}/videos/${id}`).then(res => res.json())
  }, [])


  return {
    fetchVideos: fetchList,
    fetchVideoById: fetchById,
    updateVideoById: updateById,
    createVideo: create
  }
}

export default useVideoApi
