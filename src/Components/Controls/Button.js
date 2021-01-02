import React from 'react';
import { makeStyles,Button as MuiButton } from '@material-ui/core';
 


  function Button(props) {
    // const classes = useStyles();
    const {color,size,text,onClick,variant,label,...other} = props
    return (
      <MuiButton
       variant="contained"
       color={color || "Primary"}  
       onClick={onClick}
       size={size || "Large"}
       label={label}
       {...other}
       text={text}
  >
  </MuiButton> 
)
}
    
  export default Button
  