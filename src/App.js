import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [ chiste, setChiste] = useState([]);
  const otro= ()=> {
    const url = 'http://api.icndb.com/jokes';
    const peticion = fetch(url);
    peticion
    .then((dato)=> dato.json())
    .then((lectura)=> lectura.value.map((chistes)=>{
      setChiste((e)=> [...e, <div className='ch' key={chistes.id}>{chistes.id} {chistes.joke}</div>])
    }) )
    .catch(()=> console.log('Se produjo un error'))   
  }
  useEffect (()=> {
    otro()
  },[])
  return (
    <>
      {chiste}
      
    </>
  );
}

export default App;
