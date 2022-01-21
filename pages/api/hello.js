// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const fs = require('fs')

//let rawdata = fs.readFileSync('db.json')

let student = { 
  name: 'Mike',
  age: 23, 
  gender: 'Male',
  department: 'English',
  car: 'Honda' 
}

export default function handler(req, res) {
  let data = JSON.stringify(student);
  fs.writeFileSync('db.json', data)
  res.status(200).send('done')
}
