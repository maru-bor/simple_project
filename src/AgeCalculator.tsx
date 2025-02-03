import { useState } from 'react';
import calcAge from './utils.ts';

export default function AgeCalculator() {
  const [age, setAge] = useState<number | null>(0);
  const [birthYear, setBirthYear] = useState<number | null>(0);

  const handleChange = (e: any) => {
    const value = e.target.value;
    setBirthYear(value);
    if (value && !isNaN(value)) {
      setAge(calcAge(parseInt(value, 10)));
    } else {
      setAge(null);
    }
  };

  return (
    <div>
      <label>
        Zadej rok narození:
        <input type='number' value={birthYear ?? 0} onChange={handleChange} />
      </label>
      {age !== null && <p>Tvůj věk je: {age}</p>}
    </div>
  );
}
