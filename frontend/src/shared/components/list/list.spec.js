import List from "./list";
import {fireEvent, render, screen} from "@testing-library/react";
import {videoMock} from "../../jest-mocks/video";

const setup = (props) => render(<List {...props}/>)

const mockCallback = jest.fn()

describe('List', () => {
  it('should render', () => {
    setup()
    expect(screen.getByTestId('list')).toBeVisible()
  })
  it('should render the list of items', () => {
    setup({items: [videoMock]})
    expect(screen.getByTestId('list')).toBeVisible()
    expect(screen.getAllByTestId('list-item')).toHaveLength(1)
  })
  it('should show title on each item', () => {
    setup({items: [videoMock]})
    expect(screen.getByText(new RegExp(videoMock.title, 'i'))).toBeVisible()
  })
  it('should call the callback on item click', () => {
    setup({items: [videoMock], onItemClick: mockCallback})
    fireEvent.click(screen.getAllByText(/view/i)[0])
    expect(mockCallback).toBeCalled()
  })
})
