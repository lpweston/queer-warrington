const Dotenv = require('dotenv-webpack');

const fs = require('fs')
fs.writeFileSync('./.env', `calendarAddress=${process.env["calendarAddress"]}\ncalendarAPI=${process.env["calendarAPI"]}\n`)

module.exports = {
  plugins: [new Dotenv({systemvars: true})],
};