const express = require('express')
const bodyParser = require('body-parser')
//const cors = require("cors");
const app = express()
const port = 8081
const db = require('./queries')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/users', db.getUsers)
app.get('/fees', db.getFees)
app.post('/addrec', db.createUser)
app.post('/addtreat', db.createTreatment)
app.get('/loginStat', db.getLoginUser)
app.delete('/delusers/:id', db.deleteUser)
app.delete('/deltreat/:id', db.deleteTreat)
// app.get('/fees', db.getFees)
app.put('/users/:id', db.updateUser)
app.get('/users/:id', db.getUserById)
app.put('/fees/:id', db.updateTreat)
app.get('/fees/:id', db.getTreatById)
app.post('/addptdata',db.createPatient)
app.post('/addchk', db.createChklist)
app.get('/phid/:regNo', db.getpathisid )
app.get('/opid/:regno', db.getOldPatByRegno)
app.get('/getallopid', db.getAllOldPat)
app.get('/feerpt', db.getFeeRpt)
app.get('/treatrpt', db.getTreatRpt)
app.put('/demo/:id', db.updateOld)
app.get('/demo/:id', db.getOld)
app.get('/demo', db.geOld)
app.post('/addnp', db.createNpt)
app.get('/bar',db.testbar)
 app.get('/treatbarr',db.sumtreat)
 app.get('/repbarr',db.sumrep) 
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })  