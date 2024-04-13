import './App.css'
//import { Button } from './components/Button'
import { WapperList } from './components/WrapperList';
import { List } from './components/List';
function App() {

  //const buttonText = "count : ";

  return (
    <>
      <WapperList>
        <List/>
      </WapperList>
    </>
  )
  
  /*return (
    <>
      <h1>SEMINARIO DE SISTEMAS</h1>
      <Button text={buttonText}/>
    </>
  )*/
}

export default App
