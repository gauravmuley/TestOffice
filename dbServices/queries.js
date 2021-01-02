const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Ptopd',
  password: 'Gaurav@05',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM usermaster', (error, results) => {
//  pool.query('SELECT * FROM drlist', (error, results) => {
      
      if (error) {
     //   throw error
     response.status(404)
      }
     response.json(results.rows)
    //  response.json({ info: 'Connection Successful' })
    })
  }

  const getFees = (request, response) => {
    console.log('heyyy')
    pool.query('SELECT * FROM feeregister', (error, results) => {
        
        if (error) {
       //   throw error
       response.status(404)
        }
       response.json(results.rows)
   //    response.json({ info: 'Connection Successful' })
      })
    }
  const createUser = (request, response) => {
    const { username, password, userrole } = request.body.params
 //   response.send('Into createuser')
 console.log(request.body,parseInt(password))
//  console.log(request.body,parseInt(age))
 console.log(request.body.params,username,password,userrole)
    pool.query('INSERT INTO usermaster (username,pwd,userrole) VALUES ($1, $2,$3)', [username, password,userrole], (error, results) => {
      if (error) {
     //   throw error
        response.status(404).send('Cannot Insert Record')
      }
      response.status(201).send('Record Inserted')
    })
  }


  const createTreatment = (request, response) => {
    const { treatment,fees} = request.body.params
 //   response.send('Into createuser')
 console.log(request.body.params,treatment,fees)
    pool.query('INSERT INTO feeregister (treatment,fees) VALUES ($1, $2)', [treatment,fees], (error, results) => {
      if (error) {
     //   throw error
        response.status(404).send('Cannot Insert Record')
      }
      response.status(201).send('Record Inserted')
    })
  }

  const createPatient = (request, response) => {
    const { regno,firstname,lastname,address,city,pin,mobile,email,gender,age,DOB } = request.body.params
 //   response.send('Into createuser')
 console.log(request.body,parseInt(age))
//  console.log(request.body.params,regno,firstname,lastname,address,city,pin,mobile,email,gender,age)
    pool.query('INSERT INTO patientmaster (regno,firstname,lastname,address,city,pin,mobile,email,gender,age,DOB) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [regno,firstname,lastname,address,city,pin,mobile,email,gender,age,DOB], (error, results) => {
      if (error) {
     //   throw error
        response.status(404).send('Cannot Insert Record')
      }
      response.status(201).send('Record Inserted')
    })
  }

//   const createChklist = (request, response) => {
//     const { regNo,Totalamt,Actualamt,recdate } = request.body.params
//  //   response.send('Into createuser')
// //  console.log(request.body,parseInt(age))
//   console.log(request.body.params,regNo,Totalamt,Actualamt,recdate)
    

// // pool.query('INSERT INTO PatientTreatment (regNo,Totalamt,Actualamt,date) VALUES ($1, $2,$3,$4)', [regNo,Totalamt,Actualamt,date], (error, results) => {
  
// pool.query('INSERT INTO PatientTreatment (regNo,Totalamt,Actualamt,date) VALUES ($1, $2,$3,$4)', [regNo,Totalamt,Actualamt,date], (error, results) => {
//       if (error) {
//      //   throw error
//         response.status(404).send('Cannot Insert Record')
//       }
//       response.status(201).send('Record Inserted')
//     })
//   }
const createChklist = (request, response) => {
const { regNo,Totalamt,Actualamt,recno } = request.body.params
      console.log(request.body.params,regNo,Totalamt,Actualamt,recno)
      pool.query('INSERT INTO patienttreatment (regNo,Totalamt,Actualamt,recno ) VALUES ($1, $2, $3, $4)', 
      [regNo,Totalamt,Actualamt,recno ], (error, results) => {
        if (error) {
          // throw error
         response.status(404).send('Cannot Insert Record')
        }
        
response.status(201).send('Record Inserted')
      })
    }

  const getLoginUser = (request, response) => {
    const { username,password} = request.query
    console.log(request.query,username,password)
    pool.query('SELECT * FROM usermaster WHERE username = $1 AND pwd=$2', [username, password],
     (error, results) => {
       
        if (error) {
      //    throw error
       response.status(404).send('Invalid username, password')
        }
       response.status(201).send('Valid Login')
  
      })
    }
  
    const deleteUser = (request, response) => {
      const  id = request.query
     // const id = parseInt(request.params.id)
      console.log(id, request.query)
      pool.query('DELETE FROM usermaster WHERE userid = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
      })
    }

    const deleteTreat = (request, response) => {
      const  id = request.query
     const treatmentid = parseInt(request.params.id)
      console.log(id, request.query)
      pool.query('DELETE FROM feeregister WHERE treatmentid = $1', [treatmentid], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User deleted with ID: ${id}`)
      })
    }

    
    const updateUser = (request, response) => {
      const {id} = request.params
      const userid = parseInt(id)
      const { username, password, userrole } = request.body.params
      console.log(id, userid, request.params, request.body.params,username,password,userrole)
      pool.query(
        'UPDATE usermaster SET username = $1, pwd = $2, userrole = $3 WHERE userid = $4',
        [username, password, userrole, userid],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`User modified`)
        }
      )
    }


    const updateOld = (request, response) => {
      const {id} = request.params
      const regno = parseInt(id)
      const {firstname,lastname,mobile,city,address,pin } = request.body.params
      console.log(id, regno, request.params, request.body.params,firstname,lastname,mobile,city,address,pin)
      pool.query(
        'UPDATE patientmaster SET firstname = $1, lastname= $2, mobile = $3,city=$4, address=$5, pin=$6 WHERE regno = $7',
        [firstname,lastname,mobile,city,address,pin,regno],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`User modified`)
        }
      )
    }




    const updateTreat = (request, response) => {
      const {id} = request.params
      const treatmentid = parseInt(id)
      const { treatment,fees } = request.body.params
      console.log(id, treatmentid, request.params, request.body.params,treatment,fees)
      pool.query(
        'UPDATE feeregister SET treatment = $1, fees = $2 WHERE treatmentid = $3',
        [treatment,fees, treatmentid],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`User modified`)
        }
      )
    }
    

    const getUserById = (request, response) => {
      const id = parseInt(request.params.id)
    
      pool.query('SELECT * FROM usermaster WHERE userid = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }



    const getOld = (request, response) => {
      const id = parseInt(request.params.id)
      const mobile=BigInt(request.params.mobile)
    
      pool.query('SELECT * FROM patientmaster WHERE regno = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }

    const geOld = (request, response) => {
      //  const id = parseInt(request.params.id)
      //  const mobile=BigInt(request.params.mobile)
      pool.query('SELECT * FROM patientmaster',  (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }

    const getTreatById = (request, response) => {
      const id = parseInt(request.params.id)
    
      pool.query('SELECT * FROM feeregister WHERE treatmentid = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }
    const getpathisid = (request, response) => {
      const regno = parseInt(request.params.regNo)
    
      pool.query('SELECT max(patienttreatment) AS maxid FROM patienttreatment WHERE regno = $1', [regNo], (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).json(results.rows)
      })
    }

    const getOldPatByRegno = (req, res) => {
      const regno = parseInt(req.params.regno)
      // const mobile = parseInt(mobile)
      console.log(regno)
      pool.query('SELECT firstname,lastname,address, city, pin, mobile, email from patientmaster WHERE regno=$1', [regno], (error, results) => {
          if (error) {
              res.status(404).send("Invalid data")
          }
          res.status(201).json(results.rows)
      })
  }

  const getAllOldPat = (req, res) => {
    pool.query('SELECT * from patientmaster ', (error, results) => {
        if (error) {
            res.status(404).send("Invalid data")
        }
        res.status(201).json(results.rows)
    })
}

const getFeeRpt = (request, response) => {
  // pool.query("SELECT regno,recno,to_char(recdate,'dd/mm/yyyy') as recdate,Totalamt,Actualamt FROM patienthistory", (error, results) => {
    // console.log(request.body,recno,recdate,Totalamt,Actualamt)  
 pool.query ("SELECT regno,recno,to_char(recdate,'dd/mm/yyyy') as recdate,totalamount,actualamount FROM patienthistory", (error, results) => {
      if (error) {
     //   throw error
     response.status(404)
      }
     response.json(results.rows)
 //    response.json({ info: 'Connection Successful' })
    })
  }

const getTreatRpt = (request, response) => {
  pool.query('select * from treatfees order by treatment', (error, results) => {
      
      if (error) {
        // throw error
     response.status(404)
      }
     response.json(results.rows)
 //    response.json({ info: 'Connection Successful' })
    })
  }  


const createNpt = (request, response) => {
  const { regno,firstname,lastname,address,city,pin,mobile,email,age,dob,gender } = request.body.params
  const ageint =  parseInt(age)
  // const mobileint = parseInt(mobile)
  // const dobchar=  to_char(DOB,'dd/mm/yyyy')
  console.log(request.body.params)
  // pool.query('INSERT INTO patientmaster (regno,firstname,lastname,address,city,pin,mobile,email,age,dob,gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
  pool.query('INSERT INTO patientmaster (regno,firstname,lastname,address,city,pin,mobile,email,age,dob,gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10,$11)', 
  [regno,firstname,lastname,address,city,pin,mobile,email,ageint,dob,gender], (error, results) => {
    if (error) {
      throw error
  //    response.status(404)
    }
    response.status(201).json('Record Inserted')
  })
}

const testbar = (request, response) => {
  // const id = parseInt(request.params.id)
  // console.log(totalamount,recdate)
  pool.query("select to_char(recdate,'dd/mm/yyyy') as recdate, sum(totalamount)as totalamount from patienthistory group by recdate order by recdate  ", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}



const sumtreat = (request, response) => {
  // const id = parseInt(request.params.id)
  // console.log(totalamount,recdate)
  pool.query("select treatment,sum(fees) as treatfees from feeregister, treatmenthistory where feeregister.treatmentid = treatmenthistory.treatmentid group by treatment", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const sumrep = (request, response) => {
  // const id = parseInt(request.params.id)
  // console.log(totalamount,recdate)
  pool.query("SELECT to_char(recdate,'dd/mm/yyyy') as recdate,totalamount FROM patienthistory", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}
  module.exports = {
    getUsers,
    createUser,
    getLoginUser,
    deleteUser,
    getFees,
    updateUser,
    getUserById,
    deleteTreat,
    updateTreat,
    getTreatById,
    createTreatment,
    createPatient,
    createChklist,
    getpathisid,
    getOldPatByRegno,
    getAllOldPat,
    getFeeRpt,
    getTreatRpt,
    updateOld,
    getOld,
    geOld,
    createNpt,
    testbar,
    sumtreat,
    sumrep
  }
