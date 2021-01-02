import React from 'react'
import { FormControl, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value,onChange, options } = props;

    return (
        
        <FormControl variant="outlined">        
            <InputLabel>{label}</InputLabel>
            <MuiSelect
                label={label}
                name={name}
                value={value}
                onChange={onChange}>
                <MenuItem value="">None</MenuItem>
                {
                  

                    options.map(
                        /*item => (<MenuItem key={item.userid} value={item.userid}>{item.username}</MenuItem>)*/  
                        item => (<MenuItem key={item.treatmentid} value={item.treatmentid}>{item.treatment}</MenuItem>)  
                    )
                }
                
            </MuiSelect>
            <FormHelperText></FormHelperText>
        </FormControl>
    )
}