const List = ({items, onItemClick}) => {

  const handleClick = id => () => onItemClick(id)

  return <div className="flex flex-col items-center" data-testid="list">
    {items?.map((item) => (
      <div key={item.id} data-testid="list-item" onClick={handleClick(item.id)} className="bg-green-600 w-1/2 rounded px-6 cursor-pointer mb-1.5">
        <div className="border-l-4 border-indigo-700 -ml-6 pl-6 flex items-center justify-between my-4">
          <div className="font-semibold text-gray-800">{item.title}</div>
          <div className="text-gray-50">View</div>
        </div>
      </div>))}
  </div>
}

export default List
