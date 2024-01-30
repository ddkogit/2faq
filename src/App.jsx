
import { useState } from 'react'
import './App.css'
import Block from './components/Block'

const arr=[
  {
    "question": "q1 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
    "answer": "a1 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
  },
  {
    "question": "q2 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
    "answer": "a2 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
  },
  {
    "question": "q3 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
    "answer": "a3 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
  },
  {
    "question": "q4 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
    "answer": "a4 uisquam ipsam dolorum libero eum nisi amet ea, totam minus atsoluta ",
  },
]

function App() {

  

  return (
    <>
<div className='container'>

    <h2>Frequently Asked Questions</h2>

    {
      arr.map((item,i)=>(

        <Block key={i} question={item.question}
         answer={item.answer}
          />
      ))
    }
</div>


    </>
  )
}

export default App
