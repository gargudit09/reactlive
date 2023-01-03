import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [name, setName]=useState('');
  const [sex , setSex]=useState('');
  const [rollno ,setRollno]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      name,
      sex,
      rollno
    }
    setbooks([...books,book]);
    setName('');
    setSex('');
    setRollno('');
  }

  

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <h1>Registration form</h1>
      <p>Fill Your Details In the Form</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setName(e.target.value)} value={name}></input>
            <br></br>
            <label>sex</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setSex(e.target.value)} value={sex}></input>
            <br></br>
            <label>rollno</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setRollno(e.target.value)} value={rollno}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>rollno</th>
                    <th>name</th>
                    <th>sex</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books}/>
                </tbody>
              </table>
            </div>
          </>}
          {books.length < 1 && <div>No details found !</div>}
        </div>

      </div>
    </div>
  )
}

export default App