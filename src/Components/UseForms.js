/* import React, {useState} from 'react'
import { makeStyles, Paper } from '@material-ui/core'

export function UseForms(initialFValues) {

    const [values, setValues] = useState(initialFValues)
  
    const handleInputChange = e => {
        const { name, value} = e.target
        setValues({
          ...values,
          [name]: value
        })
      
  
    return {
        values,
        setValues,
        handleInputChange
    }
  }
  
/* const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1)
      },
    paper: {
      margin: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3)
      },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
    }
  })) */
  /* const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1)
      },
    paper: {
      margin: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3)
      },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
    }
  }))
 */
/* const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '25ch',
      //   height:'5ch'
      },
      flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
    },
    button: {
      margin: theme.spacing(1),
    },
  
  }));
  
  
  export function Form(props) {
    const classes = useStyles()

      return (
        <Paper className={classes.pageContent} variant="outlined" elevation={3} >
          <form className={classes.root} autoComplete="off">
              {props.children}
          </form> 
        </Paper>
          
      )
  }
} */

//  export default UseForms

//  */

import React, {useState} from 'react'
import { makeStyles, Paper,CssBaseline,Container } from '@material-ui/core'

export function UseForms(initialFValues) {

  const [values, setValues] = useState(initialFValues)
  const [errors, setErrors] = useState({})
  const handleInputChange = e => {
      const { name, value} = e.target
      setValues({
        ...values,
        [name]: value
      })
    }

  return {
      values,
      setValues,
      errors,
      setErrors,
      handleInputChange
  }
}
const useStyles = makeStyles((theme) => ({
   
  root: {
      // '& .MuiTextField-root': {
      //   margin: theme.spacing(2),
      //   width: '25ch',
      // //   height:'5ch'
      
      // },
      flexGrow: 2,
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1)
      },
      '& .MuiFormGroup-root':{
        display: 'flex',
        // width: '25ch',
        // margin: theme.spacing(3),
      },
      formControl: {
        margin: theme.spacing(3),
      },
      paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '& > *': {
        margin: theme.spacing(3),
      },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
    },
    button: {
      margin: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    // pageContent: {
    //   margin: theme.spacing(5),
    //   padding: theme.spacing(3)
    // }
    
  }));


/* const useStyles = makeStyles(theme => ({
    root: {
      '& .MuiFormControl-root': {
        width: '80%',
        margin: theme.spacing(1)
      },
    paper: {
      margin: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3)
      },
    pageContent: {
      margin: theme.spacing(5),
      padding: theme.spacing(3)
    }
    }
  })) */

  
  export function Form(props) {
    const classes = useStyles()

      return (
        // <Paper className={classes.pageContent} variant="outlined" elevation={3} >
          // <form className={classes.root} autoComplete="off">
          //     {props.children}
          // </form> 
        // </Paper>
        <Container container justify="center" wrap="wrap">
        <CssBaseline />
        <div className={classes.paper}>
  
         
            <form className={classes.root} autoComplete="off">
              {props.children}
            </form>
         
        </div>
      </Container>
      )
  }
  
 
  
  

