import { useState } from 'react';


export default function PasswordInput(){
  const [password, setPassword] = useState<string | null>("password");

  return (
    <div>
      <label>
        Zadej heslo:
      </label>
      <input type="password" value={password ?? ""} onChange={() => setPassword}/>
    </div>

  )

}