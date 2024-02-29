import { useState } from 'react'

const Display = ({value,text}) => {
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Button = ({handleClick,text}) =>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticsLines =({text,value})=>{
  return(<div>
    {text}:{value}
  </div>)
}

const All = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <tr>
      <td>Total:</td>
      <td>{total}</td>
    </tr>
  );
};


const Average = ({good,neutral,bad}) =>{
  const pointNeutral = neutral*0;
  const pointBad = bad*-1;
  const Sum = good+pointNeutral+pointBad;
  const total =  good+neutral+bad;
  const prom = (Sum/total).toFixed(1);
  return(<tr>
      <td>Average:</td>
      <td>{prom}</td>
    </tr>
)
}

const PositiveAverage= ({good,neutral,bad}) =>{
  const total =  good+neutral+bad;
  const positive = ((good/total)*100).toFixed(1);
  return(
    <tr><td>Positive:</td>
    <td>{positive}</td>
  </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  if(good > 0 || neutral > 0 || bad > 0 ){return(
    <table>
      <tbody>
        <Display text="Good" value={good} />
        <Display text="Neutral" value={neutral} />
        <Display text="Bad" value={bad} />
  
        <All good={good} neutral={neutral} bad={bad}/>
        <Average good={good} neutral={neutral} bad={bad}/>
        <PositiveAverage good={good} neutral={neutral} bad={bad}/>
      </tbody>
    </table>
  )  
  }
  return(<p>No feedback give</p>)
}


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App