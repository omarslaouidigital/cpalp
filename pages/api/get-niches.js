//imports
const fs = require('fs')

export default function handler(req, res) {
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let niches = db.niches
    res.status(200).json(niches)
}