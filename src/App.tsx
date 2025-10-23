import { useDebugValue, useState, type MouseEvent } from 'react';
import './App.css';
import Button from './components/Button/Button';

function App() {
  const [counter, setCounter] = useState<number>();

  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };

  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button>
    </>
  );
}

export default App;
