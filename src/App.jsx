import './App.css'
import Darklight, { ThemeProvider } from './components/Darklight'
function App() {
  return (
    <>
      <ThemeProvider>
        <Darklight />
      </ThemeProvider>
    </>
  )
}

export default App
