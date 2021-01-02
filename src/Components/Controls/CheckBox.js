// import React ,{useContext}from 'react';
// import { makeStyles , FormLabel,FormControl, FormGroup,FormControlLabel,FormHelperText ,Checkbox as MuiCheckBox} from '@material-ui/core';
// import {chkTick} from '../GenContext'

// function CheckBox(props) {

//   const {name, label, value, onChange, options} = props
//   const [chkTickStatus, setChkTickStatus] = useContext(chkTick)

//   const handleClickEvent = (name,value) => ({
//       target: {name,value}
//   })

//   const handleCheck = (event) => {
//    //   alert("in handle check "+ event.target.value)
      
//       options.forEach(item => {
          
//           if(item.title === event.target.value){

//      //         alert("yes it is equal "+ event.target.checked)
//               item.chk = event.target.checked
//               setChkTickStatus(!chkTickStatus)
//               alert("In chkbox " + chkTickStatus)
//        //       alert(item.chk)
//           }
//       })
//   }


//   //   const {name, label, value, onChange, items,options} = props

//   //   const handleClickEvent = (name,value) => ({
//   //     target: {name,value}
//   // })
  
//   //   const handleCheck = (event) => {
//   //     alert("in handle check "+ event.target.value)
      
//   //     options.forEach(item => {
          
//   //         if(item.title === event.target.value){

//   //             alert("yes it is equal "+ event.target.checked)
//   //             item.chk = event.target.checked
//   //             alert(item.chk)
//   //         }
//   //     })
//   // }


    
   
//     return (
//         <FormControl>
//         <FormControlLabel
//          control={<MuiCheckBox
//                 name={props.id}
//                 checked={props.chk}
//                 onChange={e => onChange(handleClickEvent(name,e.target.checked))}
//                 color="primary"
//                 value={props.title}
//                 onClick={handleCheck}
//           />
//       //       control={<MuiCheckBox
//       //       name={name}
//       //       checked={value}
//       //       onChange={e => onChange(handleClickEvent(name,e.target.checked))}
//       //       color="primary"
//       // />
//     //   <FormControl>
//     //   <FormControlLabel
//     //       control={<MuiCheckBox
//     //       name={props.id}
//     //       checked={props.chk}
//     //       onChange={e => onChange(handleClickEvent(name,e.target.checked))}
//     //       color="primary"
//     //       // value={props.title}
//     //       // onClick={handleCheck}
//     // />
//     }
//     label={label}
//   />
//     </FormControl>
   
// )
// }
// export default CheckBox

import React, {useContext} from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckBox } from '@material-ui/core'
import {chkTick} from '../GenContext'

function Checkbox(props) {
    const {name, label, value, onChange, options} = props
    const [chkTickStatus, setChkTickStatus] = useContext(chkTick)

    const handleClickEvent = (name,value) => ({
        target: {name,value}
    })

    const handleCheck = (event) => {
     //   alert("in handle check "+ event.target.value)
        
        options.forEach(item => {
            
            if(item.title === event.target.value){

       //         alert("yes it is equal "+ event.target.checked)
                item.chk = event.target.checked
                setChkTickStatus(!chkTickStatus)
                alert("In chkbox " + chkTickStatus)
         //       alert(item.chk)
            }
        })
    }

    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckBox
                name={props.id}
                checked={props.chk}
                onChange={e => onChange(handleClickEvent(name,e.target.checked))}
                color="primary"
                value={props.title}
                onClick={handleCheck}
          />
        }
        label={props.title}
      />
        </FormControl>
       
    )
}

export default Checkbox