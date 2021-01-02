
import React, {useState, useEffect} from 'react'
import MaterialTable from 'material-table'
import axios from 'axios'
// import moment from 'moment'

const columns =[
  { field: 'treatment', title:  'Treatment', width: 130 },
  { field: 'fees', title: 'Fees', width: 70 },
  { field: 'regno', title: 'Rec.No', width: 70 }
      
  ]

function TreatWiseFeescol() {

    const [testdata, setTestdata] = useState([])

  useEffect( () => {
     
    async function fetchData(){
      try{
        const response = await axios.get(`http://192.168.43.66:8081/treatrpt`);   
       
        console.log(response.data)
        setTestdata(response.data)    
     
       }catch (error) {
        alert("Error getting data")
        
       }
      }
      fetchData();
    },[]) 

    return (
        <div>
            <MaterialTable title="Daily Collection Report"
                data={testdata}
                columns={columns}
                options={{
                    filtering: true,
                    exportButton: true
                }}
            />
        </div>
    )
}


export default TreatWiseFeescol
