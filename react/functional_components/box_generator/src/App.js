import './App.css';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

function App() {
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    setBoxes(boxes => [...boxes, box]);
  }

  return (
    <div className="App">
      <BoxForm onNewBox={ addBox }/>
      <div>
        <BoxDisplay drawBoxes={ boxes } />
      </div>
    </div>
  );
}

export default App;
