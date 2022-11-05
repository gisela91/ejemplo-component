//import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
/*
interface User {
  name: string,
  age: number,
  email: boolean | string
}

const obj = {
  uno: 'uno',
  dos: 'dos',
  
};
*/
const App = (): JSX.Element => {

  /*const [count, setCount] = useState<number>(0);
  const [person, setPerson] = useState<User>({
    age: 20,
    email: '',
    name: '',
    
  });
  const [algo,setAlgo] = useState<{[key: string]: User}>({
    uno: {
      age: 20,
      email: '',
      name: 'Gisel'
    }
  });

  const sumar = (n: number) => {
    setCount(count + n);
  };
  */
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {/*<button onClick={() => sumar(2)}>Sumar</button>*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
