import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
 import NewPatient from './Components/NewPatient';
import TestPatient from './Components/TestPatient';
import AppMenu from './Components/AppMenu';
import Login from './Components/Login'
import TestAppMenu from './Components/Login';
 import {loginStatus,mnuOptSelect,loginText,createUsr,createfeerg,TotalFeesCo,TreatWiseFeesCo, chkTick} from './Components/GenContext'
 import OldPatient from './Components/OldPatient';
 import CreateUser from './Components/CreateUser'
 import CreatefeeReg from './Components/CreatefeeReg'
import TreatWiseFeescol from './Components/TreatWiseFeescol'
import TotalCollFee from  './Components/TotalCollFee'
import MapBoxDemo from './Components/MapBoxDemo';
import styled, { createGlobalStyle, css } from 'styled-components';

//  import TreatWiseFeesCol from './Components/TreatWisefees'
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #9ad3bc, #eeeded);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;
  function App() {
  const[loginStat, setLoginStat] = useState(false)
  const[mnuOpt, setMnuOpt] = useState(0)
  const[loginTxt, setloginTxt] = useState("Login")
  const[crtUser, setcrtUser] = useState(false)
  const[crtfreg, setcrtfreg] = useState(false)
  const[treatWifeecols,settreatWifeecols] = useState(false)
  const[totalfescols,settotalfescols]  = useState(false)
  const [chkTickStatus, setChkTickStatus] = useState(false)
  
  let showComponent = null
  if(!loginStat){
    showComponent = <div><Login/></div>
  }else{ alert("in app.js "+loginStat+ '  '+ mnuOpt)
  if(mnuOpt === '2'){
     showComponent = <div><NewPatient /> </div>
  }
  if(mnuOpt === '3'){
    showComponent = <div><OldPatient /> </div>
 }
 if(mnuOpt === '4'){
  showComponent = <div><CreateUser /> </div>
}
if(mnuOpt === '5'){
  showComponent = <div><CreatefeeReg /> </div>
}

if(mnuOpt === '6'){
  showComponent = <div><TotalCollFee/></div>
}

if(mnuOpt === '7'){
  showComponent = <div><TreatWiseFeescol/>  </div>
}


if(mnuOpt === '8'){
  showComponent = <div><Login/>  </div>
}

if(mnuOpt === '9'){
  showComponent = <div><MapBoxDemo/>  </div>
}
}
  return (
    <div className="App">
          <GlobalStyle />
    <loginStatus.Provider value = {[loginStat, setLoginStat]}>
    <mnuOptSelect.Provider value ={[mnuOpt, setMnuOpt] }>
    <loginText.Provider value = {[loginTxt, setloginTxt]}>
    <createUsr.Provider value = {[crtUser, setcrtUser]}>
    <createfeerg.Provider value = {[crtfreg, setcrtfreg]}>
    <TreatWiseFeesCo.Provider value = {[treatWifeecols,settreatWifeecols]}>
    <TotalFeesCo.Provider value = {[totalfescols,settotalfescols]}>
    <chkTick.Provider value = {[chkTickStatus, setChkTickStatus]} >
       <AppMenu/>
       {/* <GenContext/> */}
       {/* <Login/> */}
       {/* <MapBoxDemo/> */}
         {showComponent}
         </chkTick.Provider>
         {/* <OldPatient/> */}
         </TotalFeesCo.Provider>
         </TreatWiseFeesCo.Provider>
         </createfeerg.Provider>
         </createUsr.Provider>
         </loginText.Provider>
         </mnuOptSelect.Provider>
      </loginStatus.Provider>
     
      {/* <NewPatient/> */}
      
     
    </div>
  );
}

export default App;
