import React from 'react'

const loginStatus = React.createContext(false)
const mnuOptSelect = React.createContext(0)
const loginText = React.createContext('Login')
const createUsr = React.createContext(false)
const createfeerg = React.createContext(false)
const TotalFeesCo = React.createContext(false)
const TreatWiseFeesCo = React.createContext(false)
const chkTick = React.createContext(false)


export {loginStatus,mnuOptSelect,loginText,createUsr,createfeerg,TotalFeesCo,TreatWiseFeesCo,chkTick}
