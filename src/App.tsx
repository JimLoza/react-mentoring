import './App.css'
import { PokemonProvider } from './contexts/PokemonContext';
import { RouterComponent } from './routes/Router';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <PokemonProvider>
      <RouterComponent />
    </PokemonProvider>
  )
}

export default App
