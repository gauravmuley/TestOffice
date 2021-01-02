import React, {useState, useContext,setState,state, useStyles,useEffect} from 'react'
import {TextField, Button, FormControlLabel,Typography,Grid,makeStyles, Paper, FormControl, FormLabel, RadioGroup, Radio} from '@material-ui/core'
import { UseForms, Form } from './UseForms'
import Controls from './Controls'
import axios from 'axios'
import moment from 'moment'
import {chkTick} from './GenContext'
import Bar from './Bar'
const initialFValues = {
  //   regfee: 100,
  //  IFT: 60,
  //   SWD : 60,
  //   ITT: 60,
  //   TE: 60,
  // totamt: 0,
  // actamt: 0,
    // Fees: false,
    Totalamt: 0,
    Actualamt: 0,
    recdate: new Date(),
    recno: 0
  }
  
  const FeeItems = [
    {id: 'regfee', title: 'Reg Fees rs. 100',chk:true,fee:100},
    {id: 'itf', title: 'ITF Rs. 60',chk:false,fee:60},
    {id: 'swd', title: 'SWD Rs. 60',chk:false,fee:60},
    {id: 'itt', title: 'ITT Rs. 60',chk:false,fee:60},
    {id: 'te', title: 'TE Rs. 60',chk:false,fee:60}
  ]

 /*  const RemMe = [
    {id: 'remme', title: 'Remember Me'},
    
  ] */
  
// function Treatfees() {


    
const Treatfees = (props) => {
//  event.preventDefault()
  const {btnsubmit,regno,treatmentid} = props
  const [chkTickStatus, setChkTickStatus] = useContext(chkTick)
  const [maxid, setMaxid] = useState(0)


  const [testdata, setTestdata] = useState([])
  const [btnClick, setBtnClick] = useState('')
  const [updtestdata, setUpdTestdata ] = useState(false)
  const {
      values, setValues, handleInputChange
    } = UseForms(initialFValues)

  const handleSubmitClick =  async(event) => {
    event.preventDefault();
alert("Submit Clicked")    
    // console.log(values.date)
    // console.log (moment(values.date).format('DD/MM/YYYY'))
    console.log(values.regfee,values.itf,values.swd,values.itt,values.te)

     alert(values.recno+' '+values.regNo+'  '+values.Totalamt+'  '+values.Actualamt+'  '+values.recdate)  
    try{
      const response = await axios.post('http://192.168.43.66:8081/addchk',{ 
      params: {
          recno: values.recno,
          regno: regno,
          Totalamt: values.Totalamt,
          Actualamt: values.Actualamt,
          // recdate: moment(values.DOB).format('DD/MM/YYYY'),
          
      }});  
      console.log(response.data)
      alert("Record Inserted")
      
    } catch (error) {
      console.log(error)   
      alert("Record not inserted")      
    }

    const response = await axios.get(`http://192.168.43.66:8081/phid/${regno}`,{ 
    });  
     console.log(response.data[0].maxid)
     setMaxid(response.data[0].maxid)
     alert("Record Inserted")

//      FeeItems.forEach(item => {
            
//       if(item.chk){
//  // insert records in treathistory
//         const response =  axios.post('http://192.168.31.20:8081/addth',{ 
//           params: {
//             pathisid: maxid,
//             treatid: item.id 
        
//           }});  
//           console.log(response.data)

//       }
//   })
 
        
  //  FeeItems.forEach(item => {
         
  //  if(item.chk){
  //   const response = await axios.get(`http://192.168.31.20:8081/phid/${treatmentid}`,{ 
  //   });  
  //    console.log(response.data[0].maxid)
  //    setMaxid(response.data[0].maxid)
  //    alert("Record Inserted")

// insert records in treathistory
    //  maxid
    //  item.id
//    }
// })
    // if(btnClick === "Submit"){

        
    }
   /*  FeeItems.map(
      item => (item.id.checked? console.log("yes") : console.log("No"))) */
//  console.log(FeeItems[0].chk, FeeItems[1].chk,FeeItems[2].chk,FeeItems[3].chk,FeeItems[4].chk)
     
      // var tamt = 0
     
      // FeeItems.map(
      //   item => (item.chk? tamt = tamt + item.fee : tamt))
      // // alert(tamt)  

      // setValues({
      //   ...values,
      //    Totalamt : tamt })       
    // values.Totalamt = 0
    // if(values.regfee){
    //   values.Totalamt = values.Totalamt + FeeItems[0].fee
    // }
    // if(values.itf){
    //   values.Totalamt = values.Totalamt + FeeItems[1].fee
    // }
    // if(values.swd){
    //   values.Totalamt = values.Totalamt + FeeItems[2].fee
    // }
    // if(values.itt){
    //   values.Totalamt = values.Totalamt + FeeItems[3].fee
    // }
    // if(values.te){
    //   values.Totalamt = values.Totalamt + FeeItems[4].fee
    // }
    console.log(values.Totalamt)
    if(btnsubmit === "New"){
      // alert("Write new patient code")
      
    }
    if(btnsubmit === "Old"){
      alert("Write old patient code")
    }
    useEffect( () => {     
      alert("In useeffect " + chkTickStatus)
      async function fetchData(){
        console.log(FeeItems[0].chk, FeeItems[1].chk,FeeItems[2].chk,FeeItems[3].chk,FeeItems[4].chk)
        var tamt = 0
        FeeItems.map(
          item => (item.chk? tamt = tamt + item.fee : tamt))
        alert("tot amount" +tamt)  
  
        setValues({
          ...values,
           Totalamt : tamt,
           Actualamt: tamt })     
        }
        fetchData();
      },[chkTickStatus]) 
    
  // const classes = useStyles();
  // const [state, setState] = React.useState({
  //   regfee: true,
  //   ift: false,
  //   swd: false,
  //   itt: false,
  //   te: false
  // });

  // const handleChange = (event) => {
  //    setState({ ...state, [event.target.name]: event.target.checked });
  //  };

  //  const {regfee,ift,swd,itt,te } = state;
  //  const error = [regfee,ift,swd,itt,te].filter((v) => v).length !== 5;
  

  // const  handleSubmitClick = async (event) => {
  //   event.preventDefault();
  //   alert("Submit Clicked")    
  //   console.log(values.DOB)
  //   console.log (moment(values.date).format('DD/MM/YYYY'))
  //   alert(values.FeeItems+'  '+values.regno+'  '+values.Totalamt+'  '+values.Actualamt+'  '+values.date)  
  //   try{
  //     const response = await axios.post('http://192.168.43.66:8081/addchk',{ 
  //     params: {
  //          FeePtems:values.FeeItems,
  //         regno: values.regno,
  //         Totalamt: values.Totalamt,
  //         Actualamt: values.Actualamt,
  //         date: moment(values.DOB).format('DD/MM/YYYY')
         

  //     }});  
  //     console.log(response.data)
  //     alert("Record Inserted")
      
  //   } catch (error) {
  //     console.log(error)   
  //     alert("Record not inserted")      
  //   }
  //   // if(btnClick === "Submit"){

        
  //   }
  // const {
  //       values, setValues, handleInputChange
  //     } = UseForms(initialFValues)


  const [totrec, setTotrec] = useState([])
  const [isbtnClick, setIsBtnClick] = useState(false)

  useEffect( () => {
      async function fetchData(){
        try{
          const response = await axios.get(`http://192.168.43.66:8081/treatbarr`);   
                   
          setTotrec(response.data)    
          
         }catch (error) {
          alert("Error getting data")
          
         }                       
       
        }
        fetchData();
         
      },[]) 

  const handleClick = async(event) => {
    event.preventDefault();
    setIsBtnClick(!isbtnClick)
  }
   return (
        <Form>
             <h1>Treatment Cost Structure</h1>
          <Grid container>
            <Grid item xs={6}>
               {
                  FeeItems.map(
                      item => (
                        <Controls.CheckBox
                            // name={item.id}
                            // label={item.title}
                            // value={values.isFees}      
                            // onChange={handleInputChange} 
                            // options={FeeItems}
                            // {...item}

                            onChange={handleInputChange} 
                            options={FeeItems}
                            {...item}
                        />
                      )
                  )
              }  
              </Grid>
{/*                 
                <Grid item xs={12}>
               <Controls.MultiCheckBox
                value={values.FeeItems}
                onChange={handleInputChange}
                items={FeeItems}
                label=""
               /> */}

               <Grid item xs={6}>
                   <Controls.Input
                    name="recno"
                    label="Reg. No. Required"
                    value={values.recno}      
                    onChange={handleInputChange} 
                    required
                    />   

            </Grid>
<Grid>
               </Grid>
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
            <Grid item xs={6} ><Controls.Input required 
          name="Totalamt"
         label="Total Amount" 
        //  variant="outlined"
         value={values.Totalamt} 
         onChange={handleInputChange} 
       />
        </Grid>
        <Grid item xs={6} >
        <Controls.Input
          required name="Actualamt"
          label="Actual Amount"
          // variant="outlined"
          value={values.Actualamt}
          onChange={handleInputChange} 
             />

           {/* <Controls.Input
                    id="recdate"
                  label="Date"
                  type="date"
                  values={values.recdate}
                 defaultValue="2017-05-24"
                //  className={classes.textField}
                 InputLabelProps={{
                 shrink: true,
                  }}
              />    */}
        </Grid>
      
          <Grid xs={12}>
          <Controls.Button
           text="Save"
          type="Submit"
          onClick={handleSubmitClick}
          // label="Submit"
          >Submit
            </Controls.Button>
       </Grid> 
       </Grid>
       {/* <button onClick={handleClick}>Show Treat Sum Graph</button>
         {isbtnClick ? <TreatBar xvalue={totrec}/> : null}
        
         */}
         <Grid container>
         <Grid xs={12}>
         <Controls.Button
          //  text="Save"
           type="Submit"
          onClick={handleClick}
          // label="Submit"
          > Show BarGraph
            </Controls.Button>
            {isbtnClick ? <Bar xvalue={totrec}/> : null}
        </Grid>
          </Grid>  
        </Form>
         
        
    )
}

export default Treatfees
