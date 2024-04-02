const Persons =( {persons,handleDelete})=>{
    return(
        <div>
       
            {persons.map((person,index) => (
            <div key={index}>{person.name} {person.number} 
                      <button onClick={() => handleDelete(person.id)}>Delete</button>

            </div>
            ))}
      </div>
    )
}

export default Persons;