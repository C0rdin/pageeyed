import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/shared/Layout';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Cookies from './pages/Cookies';
import PaymentSuccess from './pages/PaymentSuccess';
import OrderForm from './pages/OrderForm';
import { ScrollToTop } from './components/shared/ScrollToTop';
import { PrivateRoute } from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route 
            path="/payment-success" 
            element={
              <PrivateRoute>
                <PaymentSuccess />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/order" 
            element={
              <PrivateRoute>
                <OrderForm />
              </PrivateRoute>
            } 
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;