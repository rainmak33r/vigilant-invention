import {useEffect, useReducer, useState} from "react";

const ACTIONS = {
  EDIT: 'EDIT'
}

const INITIAL_STATE = {
  slug: '',
  url: '',
  title: '',
  isPublic: false
}

const formReducer = (state, action) => {
  if (action.type === ACTIONS.EDIT) {
    return {...state, ...action.payload}
  }
}

const VideoForm = ({video, onSubmit, onGoBack}) => {
  const [changed, setChanged] = useState(false)
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE)

  useEffect(() => {
    if(video) {
      dispatch({type: ACTIONS.EDIT, payload: {...video}})
    }
  }, [video])

  const handleInputChange = (event) => {
    dispatch({type: ACTIONS.EDIT, payload: {[event.target.name]: event.target?.value}})
  }

  const handleCheckboxUpdate = (event) => {
    dispatch({type: ACTIONS.EDIT, payload: {isPublic: event.target?.checked}})
  }

  useEffect(() => {
    setChanged(true)
  }, [state])

  const handleSubmit = (event) => {
    event.preventDefault()
    if(changed) {
      onSubmit({...video, ...state})
    } else {
      onGoBack()

    }
  }

  return <form onSubmit={handleSubmit} data-testid="video-form">
    <div className="flex md:flex-col flex-wrap" >
      <div className="md:w-full w-1/2 flex justify-start">
        <div className="flex flex-col md:w-full">
          <label htmlFor="title">Title</label>
          <input className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 border-2" type="text"
                 id="title" name="title" value={state.title} placeholder="Title" onChange={handleInputChange}/>
        </div>
      </div>
      <div className="md:w-full w-1/2 flex justify-start">
        <div className="flex flex-col md:w-full">
          <label htmlFor="slug">Slug</label>
          <input className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 border-2" type="text"
                 id="slug" name="slug" value={state.slug} placeholder="Slug" onChange={handleInputChange}/>
        </div>
      </div>
      <div className="md:w-full w-1/2 flex justify-start">
        <div className="flex flex-col md:w-full">
          <label htmlFor="url">URL</label>
          <input className="w-full mt-2 mb-6 px-6 py-3 border rounded-lg text-lg text-gray-700 border-2" type="text"
                 id="url" name="url" value={state.url} placeholder="URL" onChange={handleInputChange}/>
        </div>
      </div>
      <div className="md:w-full w-1/2 flex justify-start">
        <div className="flex flex-col md:w-full">
          <label htmlFor="isPublic">Public</label>
          <input type="checkbox" className="h-6 w-6 text-gray-700 border rounded mr-2" id="isPublic"
                 checked={state.isPublic} onChange={handleCheckboxUpdate}/>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mx-0.5">

        <button type="button" className="bg-red-500 rounded hover:bg-red-600 px-4 py-2 focus:outline-none"
                onClick={onGoBack}>Cancel
        </button>
      </div>
      <div className="mx-0.5">
        <button type="submit"
                className="mx-0.5 bg-green-500 rounded hover:bg-green-700 px-4 py-2 focus:outline-none">
          {video ? 'Save' : 'Create'}
        </button>
      </div>
    </div>
  </form>
}

export default VideoForm
