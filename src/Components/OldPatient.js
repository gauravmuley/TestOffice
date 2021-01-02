import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
 import IconButton from '@material-ui/icons/Search';
import { useState, useEffect } from 'react'
import {TextField, Button, FormControlLabel,Typography,Grid,makeStyles, Paper, FormControl, FormLabel, RadioGroup, Radio} from '@material-ui/core'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import Treatfees from './Treatfees'
import SearchBar from "material-ui-search-bar";
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
  DOB: new Date() ,
  RecptNo: 0,
  selectregno:''

}

/* const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
] */


function OldPatient() {
  const {
    values, setValues, errors, setErrors, handleInputChange
  } = UseForms(initialFValues)
  const [testdata, setTestdata] = useState([])
  const [btnClick, setBtnClick] = useState('')
  const [updtestdata, setUpdTestdata] = useState(false)


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

  useEffect(() => {
      async function fetchdata() {
          try {
              const response = await axios.get(`http://192.168.43.66:8081/getallopid`)
              console.log(response.data)
              setTestdata(response.data)
          } catch (error) {
              alert('Getting Error While Data fetching.')
          }
      }
      fetchdata()

  }, [updtestdata])



  const handleSearch = async (event) => {
      event.preventDefault();
      alert("Search Clicked" + values.regno)
      // setBtnClick("Search")
      try {
          const response = await axios.get(`http://192.168.43.66:8081/opid/${values.regno}`);
          console.log(response.data)
          setValues({
              ...values,
              firstname: response.data[0].firstname,
              lastname: response.data[0].lastname,
              city: response.data[0].city,
              pin: response.data[0].pin,
              // age: response.data[0].age,
              // gender: response.data[0].gender,
              email: response.data[0].email,
              mobile: response.data[0].mobile,
              address: response.data[0].address,
              // DOB: response.data[0].DOB
          })
          alert("Record Recieved")
      }
      catch (error) {
          alert("Error getting data")
      }

  }

  // const handleSaveClick = async (event) => {
  //     alert("Save clicked")
  //     event.preventDefault();

  //     if(btnClick === "Save") {
  //       // write update query
  //       alert("saving record")
  //       try{
  //         const response = await axios.put(`http://192.168.43.66:8081/demo/${values.regno}`,{ 
  //         params: {
  //             firstname: values.firstname,
  //             lastname: values.lastname,
  //             mobile: values.mobile,
  //             city: values.city,
  //             address: values.address,
  //             pin: values.pin
  //         }});  
  //         console.log(response.data)
  //         alert("Record Saved")
          
  //       } catch (error) {
  //         console.log(error)   
  //         alert("Record not Saved")      
  //       }   
  //     }

  //     setBtnClick("")
  //     setUpdTestdata(!updtestdata)
  //   }

  //   useEffect( () => {     
  //     async function fetchData(){
  //       try{
  //         const response = await axios.get('http://192.168.43.66:8081/demo');   
         
  //         console.log(response.data)
  //         setTestdata(response.data)
  //        }catch (error) {
  //         alert("Error getting data")
          
  //        }
  //       }
  //       fetchData();
  //     },[updtestdata])

       const handleUpdateClick = async(event) => {
         event.preventDefault()
        alert("Update Clicked "+ values.regno)
  
        setBtnClick("Update")
        const uname = findReg(testdata,parseInt( values.regno))
        
         alert(uname.firstname )
        setValues({
          ...values,
           firstname : uname.firstname,
          //  firstname: newwname.firstname,
              lastname: uname.lastname,
              mobile: uname.mobile,
              city: uname.city,
              address: uname.address,
              pin: uname.pin
             })
        console.log(uname.firstname + '  ' + uname.lastname+ '  ' + uname.mobile+ '  ' + uname.city+ '  ' + uname.address+ '  ' + uname.pin)
      //  add put query // 
      // const response = await axios.put(`http://192.168.43.66:8081/demo/${values.regno}`, 
      if(btnClick === "Update") {
        // write update query
        alert("Updating record")
        try{
          const response = await axios.put(`http://192.168.43.66:8081/demo/${values.regno}`,{ 
          params: {
            firstname: values.firstname,
                        lastname: values.lastname,
                        mobile: values.mobile,
                        city: values.city,
                        address: values.address,
                        pin: values.pin
          }});  
          console.log(response.data)
          alert("Record Updated")
          
        } catch (error) {
          console.log(error)   
          alert("Record not Updated")      
        }   
      
    
      
      setBtnClick("")
      setUpdTestdata(!updtestdata)
    
    }
        }
      
    const findReg = (data, id) => {
      const uname = data.find(uname => uname.regno === id); 
      console.log(data,id)
      return uname ;
    }
  
//   if(btnClick === "Modify") {
//     // write update query
//     alert("Modifying record")
//     try{
//       const response = await axios.put(`http://192.168.43.66:8081/demo/${values.regno}`,{ 
//       params: {
//           username: values.username,
//           password: values.pwd,
//           userrole: values.role
//       }});  
//       console.log(response.data)
//       alert("Record Updated")
      
//     } catch (error) {
//       console.log(error)   
//       alert("Record not Updated")      
//     }   
  

  
//   setBtnClick("")
//   setUpdTestdata(!updtestdata)

// }
  

  //   const handleDeleteClick = async () => {
  //     alert("Delete Clicked")

  //     setBtnClick("Delete")

  //     try{
  //       const response = await axios.delete(`http://192.168.43.66:8081/delusers/${values.regno}`, 
  //        {
  //           headers: {
  //             'Access-Control-Allow-Origin': true,
  //           }
  //         });  
  //       console.log(response.data)
  //       alert("Record Deleted")
        
  //     } catch (error) {
  //       console.log(error)   
  //       alert("Record not Deleted")      
  //     }   
  //     setUpdTestdata(!updtestdata)
  // }

  

      // if (btnClick === "update") {
      //     try {
      //         const response = await axios.put(`http://172.20.10.14:8081//${values.regno}`);
      //         console.log(response.data)
      //         params: {
      //           username: values.username,
      //           password: values.pwd,
      //           userrole: values.role
      //       }  
      //       console.log(response.data)
      //       alert("Record Updated")
            
      //     } catch (error) {
      //       console.log(error)   
      //       alert("Record not Updated")      
      //     }   
      //   }
  
            //   params: {
            //     username: values.username,
            //     password: values.pwd,
            //     userrole: values.role
            // }});
              // setValues({
              //     ...values,
              //     firstname: response.data[0].firstname,
              //     lastname: response.data[0].lastname,
              //     city: response.data[0].city,
              //     pin: response.data[0].pin,
              //     age: response.data[0].age,
              //     gender: response.data[0].gender,
              //     email: response.data[0].email,
              //     mobile: response.data[0].mobile,
            
      //         alert('Record Got')
      //     }
      //     catch (error) {
      //         alert("Error getting data")

      //     }
      // }
  

    return (
      
        <Form>
          {/* <h1>Old Patients</h1> */}
          <h1 style={{ color: '#2d4059', paddingTop: 4, fontSize: 40 }}>Old Patient Form </h1>
          <Grid container spacing={0} justify='center'>
          {/* <Grid container item xs={12} > */}
                        <Grid item xs={8} justify='center'>
                            <Controls.Input
                                name="regno"
                                label="Reg no"
                                value={values.regno}
                                onChange={handleInputChange}
                                error={errors.regno}
                                required
                            />
                        {/* </Grid> */}
                        {/* <Grid container spacing={0} > */}
                            <IconButton aria-label="search" onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                    {/* </Grid> */}

                            {/* <Grid item xs={12}>
            <Controls.Input
                name="mobile"
                label="Mobile Required"
                value={values.mobile}      
                onChange={handleInputChange} 
                error={errors.mobile}  
                required
              />
              
             </Grid> */}
{/* 
             <Grid item xs={12}>
             <SearchBar
                onClick={(handleSearch) => console.log('onClick')}
                onRequestSearch={() => console.log('onRequestSearch')}
                style={{
                  margin: '0 auto',
                  maxWidth: 130
                }}
              /> 
              </Grid> */}

           
           <Grid item xs={6}>
              <Controls.Input
                name="firstname"
                label="First Name Required"          
                value={values.firstname}
                onChange={handleInputChange}
                error={errors.firstname} 
          //       InputProps={{
          //   readOnly: true,
          // }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <Controls.Input
                name="lastname"
                label="Last Name Required"          
                value={values.lastname}
                onChange={handleInputChange}
                error={errors.lastName}
          //       InputProps={{
          //   readOnly: true,
          // }}
                required
              />
            </Grid>
           
                    <Grid item xs={6}>
                   
                        <Controls.Input
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleInputChange}
                            required
                        />
</Grid>

<Grid item xs={6}>
<Controls.Input
                name="mobile"
                label="Mobile Required"
                value={values.mobile}      
                onChange={handleInputChange} 
                error={errors.mobile}  
                required
              />
                    </Grid>
                    <Grid item xs={6} >
                  
                   
                        <Controls.Input
                            name="city"
                            label="City"
                            value={values.city}
                            onChange={handleInputChange}
                            required
                        />
                        </Grid>
                        <Grid item xs={6} >
                        <Controls.Input
                            name="pin"
                            label="Pin"
                            value={values.pin}
                            onChange={handleInputChange}
                            required
                        />
                    {/* <Controls.Input
                    name="address"
                    label="Reg. No. Required"
                    value={values.address}      
                    onChange={handleInputChange} 
                    required
                    />    */}
                        
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
            {/* <Grid item xs={12}>
               
            </Grid> */}

                   
          </Grid>
          {/* <Grid container>   */}
          
            
            {/* </Grid> */}
            {/* <Form> */}
                           {/* <h1>Treatment Cost Structure</h1>
          <Grid container>
            <Grid item xs={12}>
             {/*  {
                  FeeItems.map(
                      item => (
                        <Controls.CheckBox
                            name={item.id}
                            label={item.title}
                            value={values.isFees}      
                            onChange={handleInputChange} 
                        />
                      )
                  )
              }  
                */}
{/*               
                <Grid item xs={12}>
                   <Controls.Input
                    name="regNo"
                    label="Reg. No. Required"
                    value={values.regNo}      
                    onChange={handleInputChange} 
                    required
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
            </Grid> */}

               {/* </Grid> */}
            {/*  <Controls.MultiCheckBox
                value={values.isFees}
                onChange={handleInputChange}
                items={RemMe}
                label="remember"
               />
 */}               
            {/* <Grid item xs={12}>
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
            </Grid> */}
          {/*   <Grid item xs={12} ><Controls.Input required 
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
        </Grid>
       */}
          {/* <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          // label="Submit"
          >Submit
            </Controls.Button>
       </Grid>  */}

          {/* </Grid>   */}
         {/* </Form> */}
         {/* <Grid xs={12}>
          <Controls.Input
                    id="recdate"
                  label="Reciept Date"
                  type="date"
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              />   

                  <Controls.Input required 
                  name="Recptno"
                label="RecptNo" 
                //  variant="outlined"
                value={values.RecptNo} 
                onChange={handleInputChange} />
                      </Grid> */}
         
          <Grid xs={12}>
          <Controls.Button
           text="Update"
          type="Submit"
          onClick={handleUpdateClick}
          // label="Submit"
          >Update
            </Controls.Button>
            {/* <Controls.Button
           text="Save"
          type="Submit"
          onClick={handleSaveClick}
          // label="Submit"
          >Save
            </Controls.Button> */}


       </Grid>

          <Treatfees/>
        
 
        </Form>
   
    )
}

export default OldPatient
