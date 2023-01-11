import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './components/CustomerList/CustomerList';
import CustomerForm from './components/CustomerForm/CustomerForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerList />}>
        </Route>
        <Route path='form' element={<CustomerForm />}>
        </Route>
        <Route path='form/:customerName' element={<CustomerForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
