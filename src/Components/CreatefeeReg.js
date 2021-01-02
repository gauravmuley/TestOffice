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
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {loginStatus,mnuOptSelect,loginText} from './GenContext'
import axios from 'axios'
// import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow:0.5,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
//   width: '100%',
  menuButton: {
    marginRight: theme.spacing(8),
  },
//   width: '100%',
  
  title: {
    flexGrow: 1,
  },
  label:{
    textTransform: 'none'
  }
}));

const initialFValues = {
  username: '',
  pwd:'',
  role: 'user',
  loginmsg: '',
  treatment:'',
  fees:'',
  selectTreatment:'',
  treatmentid:''
  // loginstatus: ''
}

const FeeItems = [
  {id: 'regfee', title: 'Reg Fees rs. 100'},
  {id: 'ift', title: 'ITF Rs. 60'},
  {id: 'swd', title: 'SWD Rs. 60'},
  {id: 'itt', title: 'ITT Rs. 60'},
  {id: 'te', title: 'TE Rs. 60'}
]
const usertreat = [
  {id: 'admin', title: 'Admin'},
  {id: 'user', title: 'User'}
]
 function CreatefeeReg() {
  const [loginStat,setLoginStat] = useContext(loginStatus)
  const [mnuOpt, setMnuOpt] = useContext(mnuOptSelect)
  const[loginTxt, setloginTxt] = useContext(loginText)
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
      alert(values.treatment+'  '+values.fees)  
      if(btnClick === "Add"){

         try{
          const response = await axios.post('http://192.168.43.66:8081/addtreat',{ 
          params: {
            // console.log("im inside")
            treatment: values.treatment,
            fees: values.fees,
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
          const response = await axios.put(`http://192.168.43.66:8081/fees/${values.selectTreatment}`,{ 
          params: {
              treatment: values.treatment,
              fees: values.fees,
              // userrole: values.role
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
        const response = await axios.get('http://192.168.43.66:8081/fees');   
       
        console.log(response.data)
        setTestdata(response.data)
       }catch (error) {
        alert("Error getting data")
        
       }
      }
      fetchData();
    },[updtestdata]) 

   const handleAddClick =() => {
      alert("ADD Clicked "+ values.treatmentid)
      setBtnClick("Add")
      setValues({
        ...values,
         treatment : '',
          fees: '' })
  }
  const handleModifyClick =() => {

      alert("Modify Clicked "+ values.selectTreatment)

      setBtnClick("Modify")
      const newtreat = findTreat(testdata, values.selectTreatment)
      
      alert(newtreat.treatment + '  ' + newtreat.fees)
      setValues({
        ...values,
         treatment : newtreat.treatment,
          fees : newtreat.fees })
      console.log(newtreat.treatment + '  ' + newtreat.fees)
    }

  const findTreat = (data, id) => {
    const utreat = data.find(utreat => utreat.treatmentid === id); 
    return utreat ;
  }

  const handleDeleteClick = async () => {
      alert("Delete Clicked")

      setBtnClick("Delete")
alert(values.selectTreatment)
      try{
        const response = await axios.delete(`http://192.168.43.66:8081/deltreat/${values.selectTreatment}`, 
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


  return (
    <Form classname={classes.root}>

<h1 style={{
               color: '#f38181',
               paddingTop: 4,
               fontSize: 40
           }}> Fee Register </h1>
       <Grid container spacing={1}>
      
               <Grid item xs={12}>
                   <Controls.Select
                       name="selectTreatment"
                       label="Treatment List"
                       value={values.selectTreatment}
                       onChange={handleInputChange}
                       options={testdata}
                       required
                   />
    
     </Grid>
               <Grid item xs={12}>
                     
     <Controls.Input
                   name="treatment"
                   label="Treatment"
                   value={values.treatment}      
                   onChange={handleInputChange} 
                   required />
                   

              
               <Controls.Input
                   name="fees"
                   label="fees"
                   value={values.fees}      
                   onChange={handleInputChange} 
                   required
                  //  type="password"
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

export default CreatefeeReg
