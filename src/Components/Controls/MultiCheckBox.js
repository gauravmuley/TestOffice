
import React from 'react'
import {FormControl, FormControlLabel, Checkbox as MuiCheckBox,FormGroup, FormLabel, ListItemSecondaryAction } from '@material-ui/core'

function Checkbox(props) {
    const {name, label, value, onChange, items} = props

    const handleClickEvent = (name,value) => ({
        target: {name,value}
    })

    return (
        <FormControl>
            <FormLabel>
                <h3>{label}</h3>
                <FormGroup>
                    {items.map(
                        item => (
                            <FormControlLabel
                            control={<MuiCheckBox
                            name={item.id}
                            checked={value}
                            onChange={e => onChange(handleClickEvent(name,e.target.checked))}
                            color="primary"
                            />
                    }
                        label={item.title}
                />
                        )
                    )

                    }

                </FormGroup>

            </FormLabel>
        </FormControl>
       
    )
}

export default Checkbox