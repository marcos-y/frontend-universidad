import { useState, useEffect } from 'react';

//CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//AXIOS
import axios from 'axios'

//COMPONENTS
import DefaultTable from './Components/DefaultTable';

function App() {

  const [alumnos, setAlumnos] = useState([])

  useEffect(()=>{
    const getAlumnos = async () =>
    { 
     axios
      .get('http://localhost:8080/alumnos')
      .then(res=>{
        setAlumnos(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    getAlumnos()
  },[])
  
  return (
    <div style={{ padding: '50px', fontFamily:'roboto' }}>
      <h1>Alumnos</h1>
      <DefaultTable alumnos={alumnos} />
    </div>
  );
}

export default App;
