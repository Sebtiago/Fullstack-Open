import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) =>{
    setNewName(event.target.value) 
  }
  const handleNumber = (event) =>{
    setNewNumber(event.target.value)
  }


  const addPerson = (event)=>{
    event.preventDefault();
    const nameExist = persons.some(person => person.name === newName)

    if(nameExist){
      alert(`${newName} is already added to the phonebook`);
    } else{
      const newPerson = {name: newName, number:newNumber , id: persons.length+1 };
      setPersons(persons.concat(newPerson));
      setNewName('')
      setNewNumber('')
    }
  }

  
  const handleFilter = (event) =>{
    setNewFilter(event.target.value)
  }

  const filterPhonebook = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson }>
        <div>
          filter shown with <input value={newFilter} onChange={handleFilter} />
        </div>
      <h2>Add a new</h2>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
       
        {filterPhonebook.map((person,index) => (
          <div key={index}>{person.name} {person.number}</div>
        ))}
      </div>
    </div>
  );
};

export default App;