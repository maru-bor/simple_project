import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {useState} from 'react';
import PasswordInput from "simple_project/PasswordInput.tsx";
import PasswordStrength from "simple_project/PasswordStrength.tsx";

function App() {
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
       <div>
            <h3>Password Checker</h3>
            <PasswordInput setPassword={setPassword} />
            <PasswordStrength password={password}/>
        </div>
    </>
  );
}

export default App;
