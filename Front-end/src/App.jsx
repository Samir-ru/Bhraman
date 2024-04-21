// App.jsx
import { useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Card from './Card.jsx';
import Detailed from './Detailed.jsx';

export const cardContext = createContext();

function App() {
  
  const [oneData, setOneData] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <>
<cardContext.Provider value = {[oneData, setOneData]}>
<Router>
<NavBar setSearch={setSearch} />
      <div className='container'>
        <Routes>
          <Route path="/" element ={<Card search={search} />}/>
          <Route path="/detailed/:id" element ={<Detailed />}/>
        </Routes>
      </div>
    </Router>
</cardContext.Provider>
</>

  );
}

export default App;
