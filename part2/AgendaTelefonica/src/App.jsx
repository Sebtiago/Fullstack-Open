import { useState,useEffect } from 'react'
import Filter from '../src/Components/Filter'
import Forms from '../src/Components/Forms'
import Persons from '../src/Components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(()=>{

    axios.get('http://localhost:3001/persons')
    .then(response =>{
      console.log('Promise sucessful')
      setPersons(response.data)
    })



  },[]);



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
        <Filter value={newFilter} onChange={handleFilter}/>
        <Forms addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumber={handleNumber} />
      <h2>Numbers</h2>
      <Persons persons={filterPhonebook}/>
    </div>
  );
};

export default App;