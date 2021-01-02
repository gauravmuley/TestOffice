import React, { useState, useEffect } from 'react'
import {TextField, Button, FormControlLabel,Typography,Grid,makeStyles, Paper, FormControl, FormLabel, RadioGroup, Radio} from '@material-ui/core'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import Treatfees from './Treatfees'
const initialFValues = {
  regNo: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  pin: '',
  mobile: '',
  email: '',
  gender: 'male',
  recDate: new Date(),
  age: 0,
  DOB: new Date() 

}

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
]


function TestPatient() {
  const {
    values, setValues, handleInputChange
  } = UseForms(initialFValues)


    return (
      
        <Form>
          <h1>New Patients</h1>
          <Grid container>
            <Grid item xs={3}>
            <Controls.Input
                 name="regNo"
                 label="Reg. No. Required"
                 value={values.regNo}      
                 onChange={handleInputChange} 
                 required
              />   
            </Grid>
           <Grid item xs={3}>
              <Controls.Input
                name="firstName"
                label="First Name Required"          
                value={values.firstName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Controls.Input
                name="lasttName"
                label="Last Name Required"          
                value={values.lasttName}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={3}>
              <Controls.RadioGroup
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
            {/* <FormControl>
               <FormLabel>Gender</FormLabel>
               <RadioGroup row
                name="gender"
                value={values.gender}
                onChange={handleInputChange}>
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
               </RadioGroup>
             </FormControl> */}
            </Grid>
            <Grid item xs={3}>
               <Controls.Input
                name="email"
                label="Email"
                value={values.email}      
                onChange={handleInputChange}   
              />
            </Grid>
            <Grid item xs={3}>
               <TextField
                name="mobile"
                label="Mobile Required"
                value={values.mobile}      
                onChange={handleInputChange}   
                required
              />
            </Grid>
          </Grid>
          <Grid container>  
           <Grid item xs={3}>
            
            </Grid>
            
          </Grid>
          <Treatfees/>
        </Form>
   
    )
}

export default TestPatient
