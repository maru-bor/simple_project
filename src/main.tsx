import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import Counter from './Counter.tsx';
import BgColor from './BgColor.tsx';
import AgeCalculator from './AgeCalculator.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Counter />
    <Counter />
    <AgeCalculator />
    <BgColor />
  </StrictMode>,
);
