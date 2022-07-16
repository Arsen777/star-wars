import { lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./pages/home'));
const CardDetails = lazy(() => import('./pages/cardDetails'));

function App() {
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="card-details" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
