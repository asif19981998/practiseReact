import logo from './logo.svg';
import './App.css';
import React from 'react'
import { ToastProvider } from 'react-toast-notifications';

import DoctorList from './components/doctor/DoctorList/doctorList';
import MailCreate from './components/mailSender/MailCreate/MailCreate';
import Navbar from './components/navbar/navBar';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import MailSender from './components/mailSender/MailSenderModel';
import UseMemo from './components/useMemo';
import UseReducer from './components/useReducer';
import ComA from './components/practiseContext/comA';
import ComC from './components/practiseContext/comC';


export const UserContext = React.createContext("");

function App() {
  return (
    <div className="App">
      {/* <ToastProvider>
       <DoctorList/>
      
       <MailCreate/>
    
    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<DoctorList />}/>
        <Route path="/mailSender" element={<MailCreate />}>
       
        </Route>
      </Routes>
    </BrowserRouter>
      </ToastProvider> */}
      {/* <UseMemo/> */}
      <UseReducer/>
  <UserContext.Provider value='Asif'>
      <ComA/>
      <ComC/>
  </UserContext.Provider>
     
     
    </div>
  );
}

export default App;
