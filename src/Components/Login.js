 import React , {useState, useEffect, useContext} from 'react';
import { makeStyles,Button,Grid} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import loginStatusContext from './GenContext'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import axios from 'axios'
import {loginStatus,mnuOptSelect,loginText} from './GenContext'

// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:0.5,

  },
//   width: '100%',
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  label:{
    textTransform: 'none'
  }
}));

const initialFValues = {
  username: '',
  pwd: '',
  role: 'user',
  loginmsg: '',
  // loginstatus: ''
}

const userRole = [
  {id: 'admin', title: 'Admin'},
  {id: 'user', title: 'User'}
]
 function Login() {
  const [loginStat,setLoginStat] = useContext(loginStatus)
  const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
  const[loginTxt, setloginTxt] = useContext(loginText)
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const {
      values, setValues, handleInputChange
    } = UseForms(initialFValues)

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLoginClick = async (event) => {
    event.preventDefault();
      alert(values.username+'  '+values.pwd)
      try{
        const response = await axios.get('http://192.168.43.66:8081/loginStat',{ 
        params: {
            username:values.username,
            password:values.pwd,
            // Role:values.Role
        }});  
        console.log(response.data)
    // alert(loginStat)
      // if(values.username==="konverge" && values.pwd==="123"){
          alert("Login Successful") 
          setloginTxt("Logout")
          setLoginStat(true)           
        // }else{
        //   alert("Invalid Login")
        //   setLoginStat(false)
        }
        catch (error) {
          alert("Invalid Login")
          setLoginStat(false)
        } 
}  

  return (
//   
     <Form>

        <h1>Login</h1>
        <Grid container spacing={1} justify = 'center' >
            <Grid item xs={4}>
                <Controls.Input
                    name="username"
                    label="UserName"
                    value={values.username}      
                    onChange={handleInputChange} 
                    required
                />   
               
             
                <Controls.Input
                    name="pwd"
                    label="Password"
                    value={values.pwd}      
                    onChange={handleInputChange} 
                    required
                    type="password"
                />   
             
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
                text="Submit"
                type="submit"
                onClick={handleLoginClick}
                size= "Large"
                label='Login'
              >Login</Controls.Button>
               </Grid>
                   </Grid>
          </Form>
  
  );
}
export default Login
