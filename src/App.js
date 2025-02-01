import { useState } from 'react';
import './App.css';
import RichTextEditor from './Components/RichTextEditor';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <div className="heading">Rich Text Editor</div>

      <div className='content'>
        <div>
        <RichTextEditor setValue={setValue} /></div></div>
      <div className="result">{value}</div>
    </div>
  );
}

export default App;
