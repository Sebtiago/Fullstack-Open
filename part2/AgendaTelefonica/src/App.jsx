import { useState,useEffect } from 'react'
import Filter from '../src/Components/Filter'
import Forms from '../src/Components/Forms'
import Persons from '../src/Components/Persons'
import axios from 'axios'
import numberService from './services/numero'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(()=>{

    numberService.getAll().then(datos => {
      setPersons(datos)
    })
  }, []);



  const handleNameChange = (event) =>{
    setNewName(event.target.value) 
  }
  const handleNumber = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id);
    const confirmation = window.confirm(`Delete ${personToDelete.name}?`);
  
    if (confirmation) {
      numberService.eliminate(id)
        .then(() => {
          console.log('Person deleted successfully');
          setPersons(persons.filter(person => person.id !== id));
        })
        .catch(error => {
          console.error('Error deleting person:', error);
        });
    }
  };


    

  const addPerson = (event) => {
    event.preventDefault();
    const nameExist = persons.find(person => person.name === newName);
  
    if (nameExist) {
      const confirmation = window.confirm(`${newName} is already added to the phonebook. Replace the old number with the new one?`);
  
      if (confirmation) {
        const updatedPerson = { ...nameExist, number: newNumber };
  
        numberService.update(nameExist.id, updatedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(person =>
              person.id !== updatedPerson.id ? person : updatedPerson
            ));
            setNewName('');
            setNewNumber('');
          })
          .catch(error => {
            console.error('Error updating person:', error);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      numberService.create(newPerson)
        .then(newEnter => {
          setPersons([...persons, newEnter]);
          setNewName('');
          setNewNumber('');
        })
        .catch(error => {
          console.error('Error creating person:', error);
        });
    }
  };
  

  
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
      <Persons persons={filterPhonebook} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;