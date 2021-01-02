import * as React from 'react'

import { useState, useEffect } from 'react'
import {TextField, Button, FormControlLabel,Typography,Grid,makeStyles, Paper, FormControl, FormLabel, RadioGroup, Radio,SearchBar} from '@material-ui/core'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import Treatfees from './Treatfees'
import { TreatWiseFeesCol } from './GenContext'
import { DataGrid } from '@material-ui/data-grid'
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

// const columns = [
//   { field:'datee',headerName: 'Date',width: 150, type:'number'},
//   { field:'regno',headerName: 'Reg.No',width: 130, type:'number'},
//   { field:'recno',headerName: 'Rec.No',width: 130 },
//   { field:'fees',headerName: 'Fees',width: 130 },
//   // {
//   //   field: 'fullName',
//   //   headerName: 'Full name',
//   //   description: 'This column has a value getter and is not sortable.',
//   //   sortable: false,
//   //   width: 160,
//   //   valueGetter: (params) =>
//   //     `${params.getValue('regno') || ''} ${
//   //       params.getValue('recno') || ''
//   //     }`,
//   // },
// ];

// const rows = [
//   { datee: 10, regno: 1, recno: 'abc', fees: 35 },
//   { datee: 9, regno: 2, recno: 'abc', fees: 42 },
//   { datee: 38, regno: 3, recno: 'cde', fees: 45 },
//   { datee: 417, regno: 4, recno: 'erf', fees: 16 },
//   { datee: 58, regno: 5, recno: 'er', fees: 12 },
//   { datee: 16, regno: 6, recno: 'rty', fees: 150 },
//   { datee: 15, regno: 7, recno: 'tyu', fees: 44 },
//   { datee: 802, regno: 8, recno: 'ini', fees: 36 },
//   { datee: 8, regno: 9, recno: 'vey', fees: 65 },
// ];


const columns = [
  { field: 'id', headerName:'Id', width: 100 },
  { field: 'date', headerName:'Date', width: 200 },
  { field: 'regno', headerName:'Regno', width: 200 },
  {
    field: 'recno',
    headerName: 'Rec.no',
    type: 'number',
    width: 200,
  },
  {
    field: 'fees',
    headerName: 'Fees',
    type: 'number',
    width: 150,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${
//         params.getValue('lastName') || ''
//       }`,
//   },
 ];

const rows = [
  { id: 1, date: 1, regno: 'Jon', recno: 35 ,fees:100},
  { id: 2, date: 22, regno: 'Cersei', recno: 42,fees:100  },
  { id: 3, date: 33, regno: 'Jaime', recno: 45,fees:100 },
  { id: 4, date: 44, regno: 'Arya', recno: 16,fees:100},
  { id: 5, date: 5555, regno: 'Daenerys', recno:18,fees:100 },
  { id: 6, date: 6666666, regno: 'dada', recno: 150,fees:100 },
  { id: 7, date: 88, regno: 'Ferrara', recno: 44,fees:100},
  { id: 8, date: 99, regno: 'Rossini', recno: 36,fees:100 },
  { id: 9, date: 1000, regno: 'Harvey', recno: 65 ,fees:100},
];


function TotalfeesCol() {
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

<Grid item xs={12}>
        <FormControl >
        <InputLabel id="demo-simple-select-label" >User </InputLabel>
        <Select
        //   variant="contained"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={values.users}
          onChange={handleChange}
          items={userRole}
        >
          {/*  <MenuItem value={tittle}></MenuItem>
          <MenuItem value={tittle}></MenuItem> */}
          
        </Select>
      
        
      </FormControl>
      <Controls.Button
           text="Save"
          type="Submit"
          // label="Submit"
          >Submit
            </Controls.Button>
      </Grid>

               
              </Grid>
           
            <div style={{ height: 400, width: '100%' }}>
            
           <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
           </div>
          
                   
            <Grid xs={12}>
        
       </Grid> 

          
        
      
          </Grid>
        </Form>
   
    )
}






export default TotalfeesCol
