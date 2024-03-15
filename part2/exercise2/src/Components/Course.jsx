
const Course = ({ course }) => {
    return(
        <div>
            <Header course={course}/>
            <Content parts={course.parts}/>
        </div>
    )
}

const Header = ({course}) =>{
    return(
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ parts }) => {

    const SumTotal = parts.reduce((s,p) => s + p.exercises,0);
   
   
    return (
      <>
        {parts.map(part =>
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
        <p><strong>Total of {SumTotal} exercises</strong></p>
      </>
    );
  };
  
  const Part = ({name, exercises}) =>{
    return <p>{name}{exercises}</p>
  }

export default Course;