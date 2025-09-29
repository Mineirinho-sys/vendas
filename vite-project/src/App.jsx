import './App.css'
import Routes from './Router'
import Header from './components/Header'

function App() {

  return (
    <div>

      <header>
        <Header/>
      </header>
      <main>
        <Routes />
      </main>
    </div>
  )
}

export default App
