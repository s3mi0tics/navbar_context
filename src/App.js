import logo from './logo.svg';
import './App.css';
import Navbar from './components/ComponentNavbar';
import FormWrapper from './components/ComponentFormWrapper';
import Wrapper from './components/ComponentWrapper';
import MyContext from './context/MyContext'
import { useState } from 'react';

function App() {
  const [val, setVal] = useState("")
  return (
    <MyContext.Provider value = {{val, setVal}}  className="App">
      <Navbar/>
      <FormWrapper/>
    </MyContext.Provider>
  );
}

export default App;
