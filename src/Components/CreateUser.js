import React , {useState, useEffect, useContext} from 'react';
import { makeStyles,Button,Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import loginStatusContext from './GenContext'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import Select from '@material-ui/core/Select';
import axios from 'axios'

import {loginStatus,mnuOptSelect,loginText,createUsr,createfeerg} from './GenContext'

// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
//   s
}));

const initialFValues = {
  username: '',
  pwd:'',
  userrole: 'user',
  loginmsg: '',
  userid:'',
  selectname:''
  // loginstatus: ''
}

const userRole = [
  {id: 'admin', title: 'Admin'},
  {id: 'user', title: 'User'}
]

const users = [
    { title: 'Admin'},
    { title: 'User'}
  ]
 function CreateUser() {
  const [loginStat,setLoginStat] = useContext(loginStatus)
  const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
  const[loginTxt, setloginTxt] = useContext(loginText)
  const[crtUser, setcrtUser] = useState(false)
  const[crtfreg, setcrtfreg] = useState(false)
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [testdata, setTestdata] = useState([])
  const [btnClick, setBtnClick] = useState('')
  const [updtestdata, setUpdTestdata ] = useState(false)

  const {
      values, setValues, handleInputChange
    } = UseForms(initialFValues)

    const  handleSubmitClick = async (event) => {
      event.preventDefault();
      alert("Submit Clicked")    
      alert(values.username+'  '+values.pwd+'  '+values.role)  
      if(btnClick === "Add"){

         try{
          const response = await axios.post('http://192.168.43.66:8081/addrec',{ 
          params: {
              username: values.username,
              password: values.pwd,
              userrole: values.userrole
          }});  
          console.log(response.data)
          alert("Record Inserted")
          
        } catch (error) {
          console.log(error)   
          alert("Record not inserted")      
        }   
      }
      if(btnClick === "Modify") {
        // write update query
        alert("Modifying record")
        try{
          const response = await axios.put(`http://192.168.43.66:8081/users/${values.selectname}`,{ 
          params: {
              username: values.username,
              password: values.pwd,
              userrole: values.role
          }});  
          console.log(response.data)
          alert("Record Updated")
          
        } catch (error) {
          console.log(error)   
          alert("Record not Updated")      
        }   
      }

      
      setBtnClick("")
      setUpdTestdata(!updtestdata)
    }

  useEffect( () => {     
    async function fetchData(){
      try{
        const response = await axios.get('http://192.168.43.66:8081/users');   
       
        console.log(response.data)
        setTestdata(response.data)
       }catch (error) {
        alert("Error getting data")
        
       }
      }
      fetchData();
    },[updtestdata]) 

   const handleAddClick =() => {
      alert("ADD Clicked "+ values.userid)
      setBtnClick("Add")
      setValues({
        ...values,
         username : '',
          pwd : '' })
  }
  const handleModifyClick =() => {

      alert("Modify Clicked "+ values.selectname)

      setBtnClick("Modify")
      const newwname = findName(testdata, values.selectname)
      
      alert(newwname.username + '  ' + newwname.pwd)
      setValues({
        ...values,
         username : newwname.username,
          pwd : newwname.pwd })
      console.log(newwname.username + '  ' + newwname.pwd)
    }

  const findName = (data, id) => {
    const uname = data.find(uname => uname.userid === id); 
    return uname ;
  }

  const handleDeleteClick = async () => {
      alert("Delete Clicked")

      setBtnClick("Delete")

      try{
        const response = await axios.delete(`http://192.168.43.66:8081/delusers/${values.selectname}`, 
         {
            headers: {
              'Access-Control-Allow-Origin': true,
            }
          });  
        console.log(response.data)
        alert("Record Deleted")
        
      } catch (error) {
        console.log(error)   
        alert("Record not Deleted")      
      }   
      setUpdTestdata(!updtestdata)
  }

//   const {
//       values, setValues, handleInputChange
//     } = UseForms(initialFValues)

//   const handleChange = (event) => {
//     setAuth(event.target.checked);
//   };

//   const handleMenu = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

  
//   const  handleSubmitClick = async (event) => {
//     event.preventDefault();
//     alert("Submit Clicked")    
//     alert(values.username+'  '+values.pwd+'  '+values.role)  
  
//       try{
//         const response = await axios.post('http://192.168.43.66:8081/addrec',{ 
//         params: {
//             username: values.username,
//             password: values.pwd,
//             userrole: values.role
//         }});  
//         console.log(response.data)
//         alert("Record Inserted")
        
//       } catch (error) {
//         console.log(error)   
//         alert("Record not inserted")      
//       }   
//   }

// useEffect( () => {     
//   async function fetchData(){
//     try{
//       const response = await axios.get('http://192.168.43.66:8081/users');   
     
//       console.log(response.data)
//       setTestdata(response.data)
//      }catch (error) {
//       alert("Error getting data")
      
//      }
//     }
//     fetchData();
//   },[]) 

//  const handleAddClick =() => {
//     alert("ADD Clicked "+ values.userid)
//     setValues({
//       ...values,
//        username : '',
//         pwd : '' })
// }
// const handleModifyClick =() => {
//     alert("Modify Clicked "+ values.selectname)
  
//     const newwname = findName(testdata, values.selectname)
    
//     alert(newwname.username + '  ' + newwname.pwd)
//     setValues({
//       ...values,
//        username : newwname.username,
//         pwd : newwname.pwd })
//     console.log(newwname.username + '  ' + newwname.pwd)
//   }

// const findName = (data, id) => {
//   const uname = data.find(uname => uname.userid === id); 
//   return uname ;
// }

// const handleDeleteClick = async () => {
//     alert("Delete Clicked")
//     try{
//       const response = await axios.post('http://192.168.43.66:8081/delusers',{ 
//       params: {
//           userid: values.userid}
//         },
//         {
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
// }



//   const handleLoginClick = () => {
//     alert(loginStat)
//       if(values.username==="konverge" && values.pwd==="123"){
//           alert("Login Successful") 
//           setloginTxt("Logout")
//           setLoginStat(true)   
//           setcrtUser("welcome user")       
//           setcrtfreg("WelcomeFee Reg") 
//         }else{
//           alert("Invalid Login")
//           setLoginStat(false)
//         }
    
// }
// const handleLoginClick = async (event) => {
//     event.preventDefault();
//     alert(values.username)
//     try{
//       const response = await axios.get('http://192.168.43.66:8081/users',{ 
//       params: {
//           username:values.username,
//           // password:values.pwd,
//           // Role:values.Role
//       }});  
//       console.log(response.data)
//   // alert(loginStat)
//     // if(values.username==="konverge" && values.pwd==="123"){
//         // alert("Login Successful") 
//         setloginTxt("Logout")
//         setLoginStat(true)           
//       // }else{
//       //   alert("Invalid Login")
//       //   setLoginStat(false)
//       }
//       catch (error) {
//         alert("Invalid Login")
//         setLoginStat(false)
//       } 
// }  

  return (
     <Form classname={classes.root}>

<h1 style={{
                color: '#2d4059',
                paddingTop: 4,
                fontSize: 40
            }}> User Management </h1>
        {/* <Grid container  justify = 'Center' spacing={1}>
       
                <Grid item xs={12}>
                    <Controls.SelectOne
                        name="selectname"
                        label="User List"
                        value={values.selectname}
                        onChange={handleInputChange}
                        options={testdata}
                        required
                    /> */}
                    <Grid container justify="center" wrap="wrap">
                <Grid item xs={9}>
                    <Controls.SelectOne
                        name="selectname"
                        label="User List"
                        value={values.selectname}
                        onChange={handleInputChange}
                        options={testdata}
                        required
                    />
      </Grid>
                <Grid item xs={11}>
                      
      <Controls.Input
                    name="username"
                    label="user Name"
                    value={values.username}      
                    onChange={handleInputChange} 
                    required />
                    </Grid>

                <Grid item xs={11}>
                <Controls.Input
                    name="pwd"
                    label="Password"
                    value={values.pwd}      
                    onChange={handleInputChange} 
                    required
                    type="password"
                />   
                </Grid>
                <Grid item xs={2}>
                 <Controls.RadioGroup
                name="role"
                label="Role"
                value={values.role}
                onChange={handleInputChange}
                items={userRole}
              />
              </Grid> 
              <Grid item xs={12}>
              <Controls.Button
                text="Add"
                // type="submit"
                onClick={handleAddClick}
                size= "Large"
                // label='Add'
              >Add</Controls.Button>

            <Controls.Button
                text="Modify"
                // type="submit"
                onClick={handleModifyClick}
                size= "Large"
                // label='Modify'
              >Modify</Controls.Button>

            <Controls.Button
                text="Delete"
                // type="submit"
                onClick={handleDeleteClick}
                size= "Large"
                // label='Submit'
              >Delete</Controls.Button>

            <Controls.Button
                text="Submit"
                // type="submit"
                onClick={handleSubmitClick}
                size= "Large"
                // label='Submit'
              >Submit</Controls.Button>
               </Grid>
                   </Grid>
          </Form>
  
  );
}

// import React , {useState, useEffect, useContext} from 'react';
// import { makeStyles,Button,Grid} from '@material-ui/core';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import loginStatusContext from './GenContext'
// import { UseForms, Form } from './UseForms'
// import Controls from './Controls'
// import Select from '@material-ui/core/Select';
// import axios from 'axios'

// import {loginStatus,mnuOptSelect,loginText,createUsr,createfeerg} from './GenContext'
// // const useStyles = makeStyles((theme) => ({
// //     root: {
// //       flexGrow:0.5,
// //     },
// //     formControl: {
// //       margin: theme.spacing(1),
// //       minWidth: 150,
// //     },
// //     selectEmpty: {
// //       marginTop: theme.spacing(2),
// //     },
// //   //   width: '100%',
// //     menuButton: {
// //       marginRight: theme.spacing(10),
// //     },
// //     title: {
// //       flexGrow: 1,
// //     },
// //     label:{
// //       textTransform: 'none'
// //     }
// //   }));
  
//   const initialFValues = {
//     username: '',
//     pwd:'',
//     role: 'user',
//     loginmsg: '',
//     // loginstatus: ''
//   }
  
//   const userRole = [
//     {id: 'admin', title: 'Admin'},
//     {id: 'user', title: 'User'}
//   ]
  
//   const users = [
//       { title: 'Admin'},
//       { title: 'User'}
//     ]
// // import Typography from '@material-ui/core/Typography';

// function CreateUser() {
//   const [loginStat,setLoginStat] = useContext(loginStatus)
//  const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
// const[loginTxt, setloginTxt] = useContext(loginText)
//   const [testdata, setTestdata] = useState([])

//   const {
//       values, setValues, handleInputChange
//     } = UseForms(initialFValues)

//     const  handleSubmitClick = async (event) => {
//       event.preventDefault();
//       alert("Submit Clicked")    
//       alert(values.username+'  '+values.pwd+'  '+values.role)  
    
//         try{
//           const response = await axios.post('http://192.168.31.20:8081/addrec',{ 
//           params: {
//               username: values.username,
//               password: values.pwd,
//               userrole: values.role
//           }});  
//           console.log(response.data)
//           alert("Record Inserted")
          
//         } catch (error) {
//           console.log(error)   
//           alert("Record not inserted")      
//         }   
//     }

//   useEffect( () => {     
//     async function fetchData(){
//       try{
//         const response = await axios.get('http://192.168.31.20:8081/users');   
       
//         console.log(response.data)
//         setTestdata(response.data)
//        }catch (error) {
//         alert("Error getting data")
        
//        }
//       }
//       fetchData();
//     },[]) 

//    const handleAddClick =() => {
//       alert("ADD Clicked "+ values.userid)
//       setValues({
//         ...values,
//          username : '',
//           pwd : '' })
//   }
//   const handleModifyClick =() => {
//       alert("Modify Clicked "+ values.selectname)
    
//       const newwname = findName(testdata, values.selectname)
      
//       alert(newwname.username + '  ' + newwname.pwd)
//       setValues({
//         ...values,
//          username : newwname.username,
//           pwd : newwname.pwd })
//       console.log(newwname.username + '  ' + newwname.pwd)
//     }

//   const findName = (data, id) => {
//     const uname = data.find(uname => uname.userid === id); 
//     return uname ;
//   }

//   const handleDeleteClick = async () => {
//       alert("Delete Clicked")
//       try{
//         const response = await axios.post('http://192.168.31.20:8081/delusers',{ 
//         params: {
//             userid: values.userid}
//           },
//           {
//             headers: {
//               'Access-Control-Allow-Origin': true,
//             }
//           });  
//         console.log(response.data)
//         alert("Record Deleted")
        
//       } catch (error) {
//         console.log(error)   
//         alert("Record not Deleted")      
//       }   
//   }

//   return (
//       <Form alignItems="center">
//       <h1>User Management </h1>
//       <Grid container style={{justifyContent: 'center'}}>
//           <Grid item xs={4}>
//           </Grid>  
//           <Grid item xs={2}>
//             <Controls.Select
//                 name="selectname"
//                 label="User List"
//                 value={values.selectname}
//                 onChange={handleInputChange}
//                 options={testdata}                
//               />  
//               <Controls.Input
//                   name="username"
//                   label="user Name"
//                   value={values.username}      
//                   onChange={handleInputChange} 
//                   required
//               />   
//               <Controls.Input
//                   name="pwd"
//                   label="Password"
//                   value={values.pwd}      
//                   onChange={handleInputChange} 
//                   required
//                   type="password"
//               />   
//                <Controls.RadioGroup
//               name="role"
//               label="Role"
//               value={values.role}
//               onChange={handleInputChange}
//               items={userRole}
//             />
//             </Grid>   
//           <Grid item xs={6}>
//           </Grid>  
//           <Grid item xs={2}>
//               <Controls.Button
//                   text="Add" 
//                   onClick={handleAddClick}
//               />Add
//           </Grid>
//           <Grid item xs={2}>
//               <Controls.Button
//                   text="Modify" 
//                   onClick={handleModifyClick}
//               />
//           </Grid>
//           <Grid item xs={2}>
//               <Controls.Button
//                   text="Delete" 
//                   onClick={handleDeleteClick}
//               />
//           </Grid>
//           <Grid item xs={2}>
//               <Controls.Button
//                   type="submit"
//                   text="Submit" 
//                   onClick={handleSubmitClick}
//               />
//           </Grid>
//       </Grid>  
//  </Form>
//   )
// }


export default CreateUser
