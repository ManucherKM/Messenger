const List = ({ mass, render }) => {
	return <>{mass.map(render)}</>
}

export default List
