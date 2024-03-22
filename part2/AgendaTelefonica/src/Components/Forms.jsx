const Forms = ({addPerson,newName,handleNameChange,newNumber,handleNumber}) =>{
    return(
    <form onSubmit={addPerson }>

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
    )
}

export default Forms;