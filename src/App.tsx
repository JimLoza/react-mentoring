import './App.css'
import { PokemonProvider } from './contexts/PokemonContext';
import { UserProvider } from './contexts/UserContext';
import { RouterComponent } from './routes/Router';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <PokemonProvider>
        <RouterComponent />
      </PokemonProvider>
    </UserProvider>
  )
}

export default App
