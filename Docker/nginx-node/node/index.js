const express = require('express');
const axios = require('axios').default;
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb'
};


app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);
  insertPeopleName(res, connection);
});

app.listen(PORT, () => {
  console.log('STARTED AT ' + PORT);
});

async function getPersonName() {
    const RANDOM = Math.floor(Math.random() * 10);
  const response = await axios.get('https://swapi.dev/api/people');

  personName = response.data.results;

  return personName[RANDOM].name;
}

async function insertPeopleName(res, connection) {
  const name = await getPersonName();

  const sql = `INSERT INTO people(name) values('${name}')`;

  connection.query(sql);
  console.log(`${name} inserido no banco!`);

  getPeople(res, connection);
}

function getPeople(res, connection) {
  const sql = `SELECT id, name FROM people`;

  connection.query(sql, (error, results, fields) => {
    if (error) {
      throw error
    };

    let table = []
    table.push('<table border>');
    table.push('<tr><th>#</th><th>Name</th></tr>');
    for(let people of results) {
      table.push(`<tr align="center"><td>${people.id}</td><td>${people.name}</td></tr>`);
    }

    table.push('</table>');
    res.send('<h1>Full Cycle Rocks!</h1>' + table.join(""));
  });

  connection.end();
}
