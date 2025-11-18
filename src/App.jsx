import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MorningGreeting, EveningGreeting} from './components/Greetings'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import ClickButton from './components/ClickButton'
import { ClickButtonClass } from './components/ClickButtonClass'
import { ClickButtonPar } from './components/ClickButtonPar'
import ClickButtonFunc from './components/ClickButtonFunc'
import { Calculadora } from './components/Calculadora'
import Calendario from './components/Calendario'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Calendario/>
      
    </div>
  )
}

export default App
