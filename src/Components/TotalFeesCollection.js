import React from 'react'

import { useState, useEffect } from 'react'
import {TextField, Button, FormControlLabel,Typography,Grid,makeStyles, Paper, FormControl, FormLabel, RadioGroup, Radio,SearchBar} from '@material-ui/core'
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
  DOB: new Date() ,
  TotalFees: 0,
  FeesPaid:0,

}

/* const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
] */


function TotalFeesCollection() {
  const {
    values, setValues, handleInputChange
  } = UseForms(initialFValues)


    return (
      
        <Form>
          <h1>Total Fees collection</h1>
          <Grid container>
          <Grid item xs={12}>
          <Controls.Input
                    id="date"
                  label="Date"
                  type="date"
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              /> 

                   <Controls.Input
                    id="date"
                  label="Date"
                  type="date"
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              /> 
              </Grid>
            <Grid item xs={12}>
            <Controls.Input
                 name="regNo"
                 label="Reg. No. Required"
                 value={values.regNo}      
                 onChange={handleInputChange} 
                 required
              />   
            </Grid>
          
            {/* <Grid item xs={3}>
              <Controls.RadioGroup
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              /> */}
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
            {/* </Grid> */}
            {/* <Grid item xs={3}>
               <Controls.Input
                name="email"
                label="Email"
                value={values.email}      
                onChange={handleInputChange}   
              />
            </Grid> */}
            <Grid item xs={12}>
               <Controls.Input
                name=" Total Fees"
                label="Total Fees "
                value={values.TotalFees}      
                onChange={handleInputChange}   
                required
              />

<Controls.Input
                name="Fees Paid"
                label="Fees Paid"
                value={values.FeesPaid}      
                onChange={handleInputChange}   
                required
              />
            </Grid>

                   
            <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          // label="Submit"
          >Submit
            </Controls.Button>
       </Grid> 

          </Grid>
          <Grid container>  
            
            </Grid>
          
        </Form>
   
    )
}




export default TotalFeesCollection
