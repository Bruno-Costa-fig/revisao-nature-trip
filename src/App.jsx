import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import Rotas from './routes/index'

function App() {

  return (
    <AuthContextProvider>
      <Rotas />
    </AuthContextProvider>
  )
}

export default App
