import React from 'react'
import { TextField } from '@mui/material'
import Grid from '@mui/material'
import { Autocomplete } from '@mui/material'
import "./App.css"

const data = {
    "fields": [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Gestational Age",
        "key": "gestationalAge",
        "isRequired": true,
        "order": 3,
        "unit": "weeks",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 4,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Height",
        "key": "height",
        "isRequired": true,
        "order": 5,
        "unit": "cm",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 6,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "BMI",
        "key": "bmi",
        "order": 11,
        "unit": "kg/m²",
        "isReadonly": true,
        "type": "number"
      }
    ]
  }

const Json2 = () => {
  return (
    <form className='form-outer-wrapper'>
        {
            data.fields.map(a=> {return(<div><br/>
              {  a.type === "date"?
                <TextField fullwidth={true} variant='outlined' label={a.label} type={a.type} isRequired={a.isRequired} isReadonly={a.isReadonly}  />
               : a.type === "number"?
               <TextField fullwidth={true} variant='outlined' label={a.label} type={a.type} isRequired={a.isRequired} isReadonly={a.isReadonly}  />
               : a.type === "dropdown"?
               <Autocomplete 
               disablePortal
  id="combo-box-demo"
  options={a.items}
  getOptionLabel={(opt)=> opt.text}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label={a.label} />}
  />
               : ""
            }
                </div>)  
        })
        }
   </form>
   
  )
}

export default Json2