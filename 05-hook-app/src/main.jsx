import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { HooksApp } from './HooksApp'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>
  // <HooksApp />  
  // <CounterApp />
  // <CounterWithCustomHook />
  //<FormWithCustomHook />
  //<SimpleForm />
  //<MultipleCustomHooks />
  //<FocusScreen />
  //<Layout />
  //<Memorize />
  <MemoHook />
)
