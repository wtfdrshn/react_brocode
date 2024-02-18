import List from "./List"

function App() {

  const fruits = [
    {id: 1, name: 'apple', calories: 95},
    {id: 2, name: 'banana', calories: 45},
    {id: 3, name: 'orange', calories: 115},
    {id: 4, name: 'grape', calories: 105},
    {id: 5, name: 'melon', calories: 25}
  ];

  const vegetables = [
    {id: 1, name: 'tomato', calories: 20},
    {id: 2, name: 'potato', calories: 105},
    {id: 3, name: 'onion', calories: 25},
    {id: 4, name: 'carrot', calories: 45},
    {id: 5, name: 'cucumber', calories: 15}
  ];

  return (
    <>
      {/* if the array is empty, using the ternary it shows the paragraph else render the list */}
      { fruits.length > 0 ? <List items={fruits} category='Fruits' /> : <p>No fruits</p>} 
      { vegetables.length > 0 ? <List items={vegetables} category='Vegetables' /> : <p>No vegetables</p>}
    </>
  )
}

export default App
