import './App.css';
import { useState } from 'react';
import RenderTabs from './components/RenderTabs'

function App() {
  const [tabs, setTabs] = useState([
    {name:"Tab 1", content:"This is content for Tab 1"}, 
    {name:"Tab 2", content:"This is content for Tab 2"},
    {name:"Tab 3", content:"This is content for Tab 3"}
  ]);

  return (
    <div className="App">
      <RenderTabs tabs={ tabs } />
    </div>
  );
}

export default App;
