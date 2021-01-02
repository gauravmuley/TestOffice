// import react from 'react'
// import {Textfield,Button} from '@material-ui/code'
import React ,{useState,useEffect} from 'react';
import {TextField, RadioGroup, Button,Checkbox, FormHelperText ,Typography,Grid,makeStyles, Paper, FormControl,FormControlLabel, FormLabel, Radio} from '@material-ui/core'
// import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
/* import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'; */
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import display from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
// import SaveIcon from '@material-ui/icons/Save';
import {UseForms} from './UseForms'
import {Form} from './UseForms'
/* import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel'; */
import DialpadSharpIcon from '@material-ui/icons/DialpadSharp';
// import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import Treatfees from './Treatfees'
import axios from 'axios'
import moment from 'moment'

const initialFValues = {
  regno: '',
  firstname: '',
  lastname: '',
  address: '',
  city: '',
  pin: '',
  mobile: '',
  email: '',
  gender: 'male',
  recdate: new Date(),
  age: 0,
  dob: new Date() ,
  Fees:'Reg Fees',
  Recno: '',
  Totalamount:'',
  Actualamount:''
}
/* 
const feesItems = [
  {id: 'fes', title: 'Reg Fees'},
  // {id: 'female', title: 'Female'},
  // {id: 'other', title: 'Other'}
]

const feesItemone = [
  {id: 'fes', title: 'IFT Fees'},
  // {id: 'female', title: 'Female'},
  // {id: 'other', title: 'Other'}
]

const feesItemtwo = [
  {id: 'fes', title: 'SWD Fees'},
  // {id: 'female', title: 'Female'},
  // {id: 'other', title: 'Other'}
]

const feesItemthree = [
  {id: 'fes', title: 'ITI Fees'},
  // {id: 'female', title: 'Female'},
  // {id: 'other', title: 'Other'}
]

const feesItemfour = [
  {id: 'fes', title: 'TE Fees'},
  // {id: 'female', title: 'Female'},
  // {id: 'other', title: 'Other'}
] */

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
]
 function NewPatient() {
  const validate = () => {
    let temp = {}
    temp.regno = values.regno ? "" : "Enter Reg. No"
    temp.firstname = values.firstname ? "" : "Enter First name"
    temp.lastname = values.lastname ? "" : "Enter Last name"
 //   temp.email =  (/$^|.+@.+..+/).test(values.email) ? "" : "Invalid email"
     temp.mobile = values.mobile.length >9 ? "" : "Enter valid Mobile No"

    setErrors({
      ...temp
    })
   
    return Object.values(temp).every(x => x === "")
  }
  const {
    values, setValues, errors, setErrors, handleInputChange
  } = UseForms(initialFValues)
  const [testdata, setTestdata] = useState([])
  const [btnClick, setBtnClick] = useState('')
  const [updtestdata, setUpdTestdata] = useState(false)
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-12-18T21:11:54'));
  var [hasError, setHasError] = useState(false);
  const handleSubmit = async (event) => {

    event.preventDefault();

    if(validate()){
      alert("valid Data " )
    }else{
      alert("Invalid data")
      return
    }
    console.log(values.dob)
    console.log(moment(values.dob).format('DD/MM/YYYY'))

    try{    
      const response = await axios.post('http://192.168.43.66:8081/addnp',{ 
      params: {
        regno: values.regno,
        firstname: values.firstname,
        lastname: values.lastname,
        address: values.address,
        city: values.city,
        pin: values.pin,
         mobile: values.mobile,
        email: values.email,
        age: values.age,
        dob: moment(values.dob).format('DD/MM/YYYY'),
        gender: values.gender
      }});  
      console.log(response.data)
      alert("Record Inserted")
      
    } catch (error) {
      console.log(error)   
      alert("Record not inserted")      
    }   
  }


//   const validate = () => {
//     let temp = {}
//     temp.regno = values.regno ? "" : "Enter Reg. No"
//     temp.firstName = values.firstName ? "" : "Enter First name"
//     temp.lastName = values.lastName ? "" : "Enter Last name"
//  //   temp.email =  (/$^|.+@.+..+/).test(values.email) ? "" : "Invalid email"
//     temp.mobile = values.mobile.length >9 ? "" : "Enter valid Mobile No"

//     setErrors({
//       ...temp
//     })
   
//     return Object.values(temp).every(x => x === "")
//   }
//   // const classes = useStyles();
//   const {
//     values, setValues, handleInputChange,errors, setErrors
//   } = UseForms(initialFValues)
  

//   const [testdata, setTestdata] = useState([])
//   const [btnClick, setBtnClick] = useState('')
//   const [updtestdata, setUpdTestdata ] = useState(false)

//   const  handleSubmitClick = async (event) => {
//     event.preventDefault();
//     alert("Submit Clicked")    
//     console.log(values.DOB)
//     console.log (moment(values.DOB).format('DD/MM/YYYY'))
//     alert(values.regno+'  '+values.firstname+'  '+values.lastname+'  '+values.address+'  '+values.city+'  '+values.pin+'  '+values.mobile+'  '+values.email+'  '+values.gender+'  '+values.age+'  '+moment(values.DOB).format('DD/MM/YYYY'))  
//     try{
//       const response = await axios.post('http://192.168.43.66:8081/addptdata',{ 
//       params: {
//           regno: values.regno,
//           firstname: values.firstname,
//           lastname: values.lastname,
//           address: values.address,
//           city: values.city,
//           pin: values.pin,
//           mobile:  values.mobile,
//           email: values.email,
//           gender: values.gender,
//           age: values.age,
//           DOB:moment(values.DOB).format('DD/MM/YYYY')

//       }});  
//       console.log(response.data)
//       alert("Record Inserted")
      
//     } catch (error) {
//       console.log(error)   
//       alert("Record not inserted")      
//     }
//     // if(btnClick === "Submit"){

        
//     }
    // setBtnClick("")
      // setUpdTestdata(!updtestdata)
    // }
  //  const Treatfees = (props) => {
  //   const{btnsubmit} = props
    
  //   // const {
  //   //       values, setValues, handleInputChange
  //   //     } = UseForms(initialFValues)
  
  
  //       const handleSubmitClick=()=>{
  //         if (btnsubmit=="New"){
  //           alert("new patient code")
  //         }
  
  //         if (btnsubmit=="Old"){
  //           alert("old patient code")
  //         }
  //       }
  //     }

  return (
    <Form>

            <h1>  People's  Hospital   </h1>
<Grid container spacing={1} justify='center'>
      

<Grid item xs={8} ><Controls.Input
       name="regno"
       label="Enter Registration Number"
       Required
      //  variant="outlined" 
       value={values.regno} 
       onChange={handleInputChange} 
        error={errors.regno}
       />
         </Grid>
       
     {/*    <Paper className={classes.paper}>
       </Paper> */}
      
       <Grid item xs={6} >
     <Controls.Input required 
          name="firstname"
         label="Enter First Name" 
        //  variant="outlined"
         value={values.firstname} 
         onChange={handleInputChange}
         error={errors.firstname} 
       />
        
        <Controls.Input
          required name="lastname"
          label="Enter Last Name"
          // variant="outlined"
          value={values.lastname}
          onChange={handleInputChange} 
          error={errors.lastName}
             />
       </Grid>
       <Grid item xs={6} >
      <Controls.Input 
       required name="address"
       label="Enter Your Address"
       value={values.address}
       onChange={handleInputChange}
       multiline/>
     
  
    
     {/*    <Paper className={classes.paper}>
       </Paper> */}
      

        <Controls.Input required 
          name="city"
         label="Enter Your City"
        //  variant="outlined" 
        value={values.city}
         onChange={handleInputChange} 
          />
        </Grid>
        <Grid item xs={6} >
        <Controls.Input
          required name="pin"
          label="Enter Pin" 
          // variant="outlined"
          value={values.pin}  
          onChange={handleInputChange} 
           />
           <Controls.DatePicker
                name="dob"
                label="DOB Required"
                value={values.dob}    
               
                onChange={handleInputChange}
                required   
              />
            </Grid>
        
        <Grid item xs={6} ><Controls.Input required 
        name="email"
       label="Enter Email-Id"
      //  variant="outlined"
      value={values.email}
       onChange={handleInputChange}  
        />
        
        <Controls.Input
          required 
          name="mobile"
          label="Enter Mobile Number" 
          // variant="outlined"
          value={values.mobile}  
          onChange={handleInputChange} 
          error={errors.mobile}
           />
       </Grid>
      

      
{/*       
      <Controls.Input required 
        //  name="DOB"
        //  label="Enter DOB " 
        //  value={values.DOB} 
        // //  variant="outlined"
        //  onChange={handleInputChange} 
        //   />
         
                  label="Enter DOB"
                  type="date"
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}/> */}

                  <Grid item xs={6} justify='center' >
        <Controls.Input
          required
           name="age"
          label="Enter Your Age"
          // variant="outlined" 
          value={values.age}
          onChange={handleInputChange}   
          
          />
          </Grid>
        
          <Grid item xs={6} justify='center'>
        
              <Controls.RadioGroup
                name="gender"
                // label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
      </Grid>

     {/*  <Grid item xs={12}>
              <Controls.CheckBox
                name="Fees"
                label="Fees Details"
                value={values.Fees}
                onChange={handleInputChange}
                items={feesItems}
              />
      <Controls.Input
          required name=""
          label="Date" 
          // variant="outlined"
          value={values.recDate}  
          onChange={handleInputChange} 
           />

      </Grid>           
                
      <Grid item xs={12}>
              <Controls.CheckBox
                name="Fees"
                label=""
                value={values.Fees}
                onChange={handleInputChange}
                items={feesItemone}
              />
               <Controls.Input
          required name=""
          label="RceNo" 
          // variant="outlined"
          value={values.Recno}  
          onChange={handleInputChange} 
           />

      </Grid>
                   
      <Grid item xs={12} >
              <Controls.CheckBox
                name="Fees"
                label=""
                value={values.Fees}
                onChange={handleInputChange}
                items={feesItemtwo}
              />
           
      </Grid>

      <Grid item xs={12}>
              <Controls.CheckBox
                name="Fees"
                label=""
                value={values.Fees}
                onChange={handleInputChange}
                items={feesItemthree}
              />
      </Grid>

      <Grid item xs={12}>
              <Controls.CheckBox
                name="Fees"
                label=""
                value={values.Fees}
                onChange={handleInputChange}
                items={feesItemfour}
              />
      </Grid> */}

      {/* 
      <Grid item xs={12} ><Controls.Input required 
          name=""
         label="Total Amount" 
        //  variant="outlined"
         value={values.Totalamount} 
         onChange={handleInputChange} 
       />
        
        <Controls.Input
          required name=""
          label="Actual Amount"
          // variant="outlined"
          value={values.ActualAmount}
          onChange={handleInputChange} 
             />
        </Grid>

          {/*    */}
         {/*  <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          >
            </Controls.Button>
       </Grid>   */}
       </Grid>
    
    
     
          
       {/* <Controls.Input
                    id="DOB"
                  label="Date"
                  type="date"
                  values={values.DOB}
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              />   
        </Grid>  */}
    <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          
          onClick={handleSubmit}
          // label="Submit"
          >Save Value
            </Controls.Button>
       </Grid>
      
    <Treatfees btnsubmit="New" regno={values.regno}/>
          {/* <Grid item xs={12} ><Controls.Input required 
          name="Totalamt"
         label="Total Amount" 
        //  variant="outlined"
         value={values.Totalamount} 
         onChange={handleInputChange} 
       />
        
        <Controls.Input
          required name="Actualamt"
          label="Actual Amount"
          // variant="outlined"
          value={values.ActualAmount}
          onChange={handleInputChange} 
             />

           {/* <Controls.Input
                    id="date"
                  label="Date"
                  type="date"
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              />   
        </Grid> */}
      
          {/* <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          // label="Submit"
          >Submit
            </Controls.Button>
       </Grid>  */} 
    </Form>
  );
}
export default NewPatient