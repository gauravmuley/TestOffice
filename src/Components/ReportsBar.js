import React, { useState, useEffect} from 'react'
import echarts from 'echarts'
import ReactEchart from 'echarts-for-react'
import axios from 'axios'

const ReportsBar = (props) => {

    console.log(props.xvalue)
 
    const {xvalue} = props
    console.log(xvalue)
  
   
    const [recdt, setRecdt] = useState([])
    const [recamt, setRecamt] = useState([])
   /*  const testdata = ["Mon","Tue","Wed","Thr","Fri","Sat","Sun"]
    const ydata = [820, 932, 901, 934, 1290, 1330, 1320] */

    xvalue.forEach(item => {
        recdt.push(item.recdate)
        recamt.push(parseInt(item.totalamount))
    })
    console.log(recdt)
    console.log(recamt)

 
    return (
             
        <ReactEchart        
            option={{
                title: {
                    text: 'Treatment Collection Report'
                },
                tooltip: {},
                legend: {
                    data:['Collection']
                },
                xAxis: {
                    type: "category",
                    data: recdt 
                },
                yAxis: {
                    type: "value"
                },
                series: [{
                    name: 'Collection',
                    data: recamt,
                    type: "bar"
                }]
            }} 
        />    
        
        )
}

export default ReportsBar