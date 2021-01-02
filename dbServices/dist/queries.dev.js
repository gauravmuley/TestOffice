"use strict";

var Pool = require('pg').Pool;

var pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Ptopd',
  password: 'Gaurav@05',
  port: 5432
});

var getUsers = function getUsers(request, response) {
  pool.query('SELECT * FROM usermaster', function (error, results) {
    //  pool.query('SELECT * FROM drlist', (error, results) => {
    if (error) {
      //   throw error
      response.status(404);
    }

    response.json(results.rows); //  response.json({ info: 'Connection Successful' })
  });
};

var getFees = function getFees(request, response) {
  console.log('heyyy');
  pool.query('SELECT * FROM feeregister', function (error, results) {
    if (error) {
      //   throw error
      response.status(404);
    }

    response.json(results.rows); //    response.json({ info: 'Connection Successful' })
  });
};

var createUser = function createUser(request, response) {
  var _request$body$params = request.body.params,
      username = _request$body$params.username,
      password = _request$body$params.password,
      userrole = _request$body$params.userrole; //   response.send('Into createuser')

  console.log(request.body.params, username, password, userrole);
  pool.query('INSERT INTO usermaster (username,pwd,userrole) VALUES ($1, $2,$3)', [username, password, userrole], function (error, results) {
    if (error) {
      //   throw error
      response.status(404).send('Cannot Insert Record');
    }

    response.status(201).send('Record Inserted');
  });
};

var createTreatment = function createTreatment(request, response) {
  var _request$body$params2 = request.body.params,
      treatment = _request$body$params2.treatment,
      fees = _request$body$params2.fees; //   response.send('Into createuser')

  console.log(request.body.params, treatment, fees);
  pool.query('INSERT INTO feeregister (treatment,fees) VALUES ($1, $2)', [treatment, fees], function (error, results) {
    if (error) {
      //   throw error
      response.status(404).send('Cannot Insert Record');
    }

    response.status(201).send('Record Inserted');
  });
};

var createPatient = function createPatient(request, response) {
  var _request$body$params3 = request.body.params,
      regno = _request$body$params3.regno,
      firstname = _request$body$params3.firstname,
      lastname = _request$body$params3.lastname,
      address = _request$body$params3.address,
      city = _request$body$params3.city,
      pin = _request$body$params3.pin,
      mobile = _request$body$params3.mobile,
      email = _request$body$params3.email,
      gender = _request$body$params3.gender,
      age = _request$body$params3.age,
      DOB = _request$body$params3.DOB; //   response.send('Into createuser')

  console.log(request.body, parseInt(age)); //  console.log(request.body.params,regno,firstname,lastname,address,city,pin,mobile,email,gender,age)

  pool.query('INSERT INTO patientmaster (regno,firstname,lastname,address,city,pin,mobile,email,gender,age,DOB) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [regno, firstname, lastname, address, city, pin, mobile, email, gender, age, DOB], function (error, results) {
    if (error) {
      //   throw error
      response.status(404).send('Cannot Insert Record');
    }

    response.status(201).send('Record Inserted');
  });
};

var createChklist = function createChklist(request, response) {
  var _request$body$params4 = request.body.params,
      regno = _request$body$params4.regno,
      date = _request$body$params4.date,
      Totalamt = _request$body$params4.Totalamt,
      Actualamt = _request$body$params4.Actualamt,
      FeeItems = _request$body$params4.FeeItems; //   response.send('Into createuser')
  //  console.log(request.body,parseInt(age))
  //  console.log(request.body.params,regno,firstname,lastname,address,city,pin,mobile,email,gender,age)

  pool.query('INSERT INTO patientmaster (regno,date,Totalamt,Actualamt,FeeItems) VALUES ($1, $2,$3,$4,$5)', [regno, date, Totalamt, Actualamt, FeeItems], function (error, results) {
    if (error) {
      //   throw error
      response.status(404).send('Cannot Insert Record');
    }

    response.status(201).send('Record Inserted');
  });
};

var getLoginUser = function getLoginUser(request, response) {
  var _request$query = request.query,
      username = _request$query.username,
      password = _request$query.password;
  console.log(request.query, username, password);
  pool.query('SELECT * FROM usermaster WHERE username = $1 AND pwd=$2', [username, password], function (error, results) {
    if (error) {
      //    throw error
      response.status(404).send('Invalid username, password');
    }

    response.status(201).send('Valid Login');
  });
};

var deleteUser = function deleteUser(request, response) {
  var id = request.query; // const id = parseInt(request.params.id)

  console.log(id, request.query);
  pool.query('DELETE FROM usermaster WHERE userid = $1', [id], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).send("User deleted with ID: ".concat(id));
  });
};

var deleteTreat = function deleteTreat(request, response) {
  var id = request.query;
  var treatmentid = parseInt(request.params.id);
  console.log(id, request.query);
  pool.query('DELETE FROM feeregister WHERE treatmentid = $1', [treatmentid], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).send("User deleted with ID: ".concat(id));
  });
};

var updateUser = function updateUser(request, response) {
  var id = request.params.id;
  var userid = parseInt(id);
  var _request$body$params5 = request.body.params,
      username = _request$body$params5.username,
      password = _request$body$params5.password,
      userrole = _request$body$params5.userrole;
  console.log(id, userid, request.params, request.body.params, username, password, userrole);
  pool.query('UPDATE usermaster SET username = $1, pwd = $2, userrole = $3 WHERE userid = $4', [username, password, userrole, userid], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).send("User modified");
  });
};

var updateTreat = function updateTreat(request, response) {
  var id = request.params.id;
  var treatmentid = parseInt(id);
  var _request$body$params6 = request.body.params,
      treatment = _request$body$params6.treatment,
      fees = _request$body$params6.fees;
  console.log(id, treatmentid, request.params, request.body.params, treatment, fees);
  pool.query('UPDATE feeregister SET treatment = $1, fees = $2 WHERE treatmentid = $3', [treatment, fees, treatmentid], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).send("User modified");
  });
};

var getUserById = function getUserById(request, response) {
  var id = parseInt(request.params.id);
  pool.query('SELECT * FROM usermaster WHERE userid = $1', [id], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

var getTreatById = function getTreatById(request, response) {
  var id = parseInt(request.params.id);
  pool.query('SELECT * FROM feeregister WHERE treatmentid = $1', [id], function (error, results) {
    if (error) {
      throw error;
    }

    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  getLoginUser: getLoginUser,
  deleteUser: deleteUser,
  getFees: getFees,
  updateUser: updateUser,
  getUserById: getUserById,
  deleteTreat: deleteTreat,
  updateTreat: updateTreat,
  getTreatById: getTreatById,
  createTreatment: createTreatment,
  createPatient: createPatient,
  createChklist: createChklist
};