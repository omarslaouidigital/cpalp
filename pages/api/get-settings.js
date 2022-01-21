//imports
const fs = require('fs')

export default function handler(req, res) {
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let settings = db.settings
    res.status(200).json(settings)
}