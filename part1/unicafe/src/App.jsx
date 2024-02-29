import { useState } from 'react'

const Display = ({value,text}) => {
  return(
    <div>{text}:{value}</div>
  )
}

const Button = (props) =>{
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const All = ({good,neutral,bad}) =>{
  const total =    good+neutral+bad;

  return(      <p>Total:{total}</p>     )
}

const Average = ({good,neutral,bad}) =>{
  const pointNeutral = neutral*0;
  const pointBad = bad*-1;
  const Sum = good+pointNeutral+pointBad;
  const total =  good+neutral+bad;
  const prom = Sum/total;
  return(<p>Average:{prom}</p>)
}

const PositiveAverage= ({good,neutral,bad}) =>{
  const total =  good+neutral+bad;
  const positive = (good/total)*100;
  return(<p>Positive reviews:{positive}%</p>)
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)

  return (
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/>

      <h2>Statistics</h2>
      <Display text="Good" value={good} />
      <Display text="Neutral" value={neutral} />
      <Display text="Bad" value={bad} />

      <All good={good} neutral={neutral} bad={bad}/>
      <Average good={good} neutral={neutral} bad={bad}/>
      <PositiveAverage good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App