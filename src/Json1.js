import React from 'react'
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
        "order": 2,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 3,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      }
    ]
  }
  

const Json1 = () => {
  return (<div className='container'>
    <form className='form-outer-wrapper'>
     {
     <div>
            <label><h3>{data.fields[0].label}</h3></label>
            <input type={data.fields[0].type} key={data.fields[0].type}  
            isRequired={data.fields[0].isRequired} order={data.fields[0].order} 
            isReadonly={data.fields[0].isReadonly} />
                <br/><br/>
          <label><h3>{data.fields[1].label}</h3></label>
            <input type={data.fields[1].type}
            value={data.fields[1].items[0].value}
            key={data.fields[1].type}  
            isRequired={data.fields[1].isRequired} order={data.fields[1].order} 
            isReadonly={data.fields[1].isReadonly} />
              <br/><br/>

           <label><h3>{data.fields[2].label}</h3></label>
            <input type={data.fields[2].type} key={data.fields[2].type}  
            isRequired={data.fields[2].isRequired} order={data.fields[2].order} 
            isReadonly={data.fields[2].isReadonly} unit={data.fields[2].unit} />
            
     </div>
     }  
    </form>



  </div>
  )
}

export default Json1







  