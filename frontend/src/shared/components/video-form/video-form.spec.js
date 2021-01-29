import {fireEvent, render, screen} from "@testing-library/react";
import {videoMock} from "../../jest-mocks/video";
import VideoForm from "./video-form";

const setup = (props) => render(<VideoForm {...props}/>)

const mockCallback = jest.fn()

describe('VideoForm', () => {
  it('should render', () => {
    setup()
    expect(screen.getByTestId('video-form')).toBeVisible()
  })
  it('should render the form', () => {
    setup()
    expect(screen.getByLabelText('Title')).toBeVisible()
    expect(screen.getByLabelText('Slug')).toBeVisible()
    expect(screen.getByLabelText('URL')).toBeVisible()
    expect(screen.getByLabelText('Public')).toBeVisible()
    expect(screen.getByText(/cancel/i)).toBeVisible()
    expect(screen.getByText(/create/i)).toBeVisible()
  })
  it('should show save button if video prop passed', () => {
    setup({video: videoMock})
    expect(screen.getByText(/save/i)).toBeVisible()
  })
  it('should call the submit function with form data from new video', () => {
    const submitMock = jest.fn()
    setup({onSubmit: submitMock})
    fireEvent.change(screen.getByLabelText(/title/i), {target: {value: videoMock.title, name: 'title'}})
    fireEvent.change(screen.getByLabelText(/slug/i), {target: {value: videoMock.slug, name: 'slug'}})
    fireEvent.change(screen.getByLabelText(/url/i), {target: {value: videoMock.url, name: 'url'}})
    fireEvent.click(screen.getByLabelText(/public/i))
    fireEvent.click(screen.getByText(/create/i))
    expect(submitMock).toBeCalledWith({
      title: videoMock.title,
      slug: videoMock.slug,
      url: videoMock.url,
      isPublic: true
    })
  })
  it('should call the submit function with updated video', () => {
    const submitMock = jest.fn()
    setup({video: videoMock, onSubmit: submitMock})
    const update = {
      title: 'updatedTitle'
    }
    fireEvent.change(screen.getByLabelText(/title/i), {target: {value: update.title, name: 'title'}})
    fireEvent.click(screen.getByText(/save/i))
    expect(submitMock).toBeCalledWith({...videoMock, ...update})
  })
})
