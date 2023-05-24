import logo from './logo.svg';
import './App.css';
import First from './components/First';
import Narnia from './components/Narnia';
import StateBasics from './components/StateBasics';
import Statex from './components/Statex';
import Table1 from './components/Table1';
import { Route, Routes } from 'react-router-dom';
import ApiGet from './components/ApiGet';

function App() {
 <ApiGet/>
 
  return (
    
    <div className="App">
      <Routes>
        <Route path='/' element={<StateBasics/>}/>
        <Route path='/first' element={<First/>}/>
        <Route path='/table'element={<Table1/>}/>
        <Route path='statex' element={<Statex/>}/>
        <Route path='narnia' element={<Narnia/>}/>
        <Route path='/axios' element={<ApiGet/>}/>
      </Routes>
    </div>
  );
}

export default App;
