//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let db_login = db.admin
    if(db_login.login !== req.body.login || db_login.password !== req.body.password) return res.json({incorrect: true})
    res.json({incorrect: false})
}