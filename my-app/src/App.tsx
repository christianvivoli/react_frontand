import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

function App() {
  const [students, setStudents] = useState(data);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [studenteSelezionato, setStudenteSelezionato]=useState(null);
  

  function elimina(el: string) {

    setStudents(students.filter(obj => obj.name !== el));
  }

  function aggiungi() {
    if (studenteSelezionato) {
      const aggiornaStudenti = students.map((student) => {
        if (student == studenteSelezionato) {
          return {
            name: name,
            age: parseInt(age),
            gender: gender
          };
        }
        return student;
      });
  
      setStudents(aggiornaStudenti);
      setStudenteSelezionato(null);
    } else {
      students.push({ name: name, age: parseInt(age), gender: gender });
      setStudents(students);
    }
  
    bottone();
  }

  
  function bottone() {
    if (showForm) {
      setShowForm(false);
    } else {
      setShowForm(true);
    }

  }

  function modifica(student:any) {
    setStudenteSelezionato(student);
    bottone();
  }
  
  
  return (
    <div className="App">
      <br />
      <br />
      <center>
        <table className="bordo">
          <tr>
            <th className="bordo">Name</th>
            <th className="bordo">Age</th>
            <th className="bordo">Gender</th>
            <th className="bordo"></th>
          </tr>
          {students.map((val, key) => {
            return (
              <tr key={key}>
                <td className="bordo">{val.name}</td>
                <td className="bordo">{val.age}</td>
                <td className="bordo">{val.gender}</td>
                <td><button onClick={() => elimina(val.name)}>ELIMINA</button>
                <button onClick={() => modifica(val)}>MODIFICA</button></td>
              </tr>
            )
          })}
        </table>
        <br />
        
          <button value="inserisci" onClick={() => bottone()}>Inserisci</button>
        {showForm &&
        <form>
          <input type="text" name="name" onChange={(e) =>setName(e.target.value)}/>
          <br />
          <br />
          <input type="number" name="age" onChange={(e) =>setAge(e.target.value)}/>
          <br />
          <br />
          <select name="gender" onChange={(e) => setGender(e.target.value)}>
            <option value="nessuno">nessun sesso</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <br />
          <input type="submit" value="salva" name="salva" onClick={()=> aggiungi()}/>

        </form>
        }
        
      </center>
      
    <br />
    <br />
    </div>
  );
}
export default App;