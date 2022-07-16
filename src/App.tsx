import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './layout';

const Home = lazy(() => import('./pages/home'));
const CardDetails = lazy(() => import('./pages/cardDetails'));

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="card-details/:cardId"
            element={
              <Suspense fallback={<>...</>}>
                <CardDetails />
              </Suspense>
            }
          />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
