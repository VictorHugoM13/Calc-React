import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MorningGreeting, EveningGreeting} from './components/Greetings'
import Counter from './components/Counter'
import CounterClass from './components/CounterClass'
import ClickButton from './components/ClickButton'
import { ClickButtonClass } from './components/ClickButtonClass'
import { Calculadora } from './components/Calculadora'
import { ClickButtonPar } from './components/ClickButtonPar'
import IncDec from './components/IncDec'
import ToggleTexto from './components/ToggleTexto'
import InputControlado from './components/InputControlado'
import MudaCor from './components/MudaCor'
import ListaDeTarefas from './components/ListaDeTarefas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ListaDeTarefas/>
      
    </div>
  )
}

export default App
