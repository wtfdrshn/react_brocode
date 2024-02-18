import PropTypes from "prop-types";
function List(props) {

    const list = props.items;
    const category = props.category;

    // fruits.sort((a,b ) => a.name.localeCompare(b.name)); /// sort by name - ascending
    // fruits.sort((a,b ) => b.name.localeCompare(a.name)); /// sort by name - descending
    // fruits.sort((a,b ) => a.calories - b.calories); /// sort by calories - ascending
    // fruits.sort((a, b) => b.calories - a.calories); /// sort by calories - descending

    // const f = fruits.filter(fruit => fruit.calories < 100); /// filter by calories < 100
    // const f = fruits.filter(fruit => fruit.calories >= 100); /// filter by calories >= 100

    const listItems = list.map(l => <li key={l.id}>{l.name}: &nbsp; <b>{l.calories}</b></li>);

    return (<>
            <h3>{category}</h3>
            <ol> {listItems} </ol>
            </>)
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
    category: PropTypes.string

}

List.defaultProps = {
    items: [],
    category: 'No category'
}

export default List;