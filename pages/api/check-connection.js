//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    //variables
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let db_connection_id = db.admin.connection_id
    let client_connection_id = req.body.id
    
    if(db_connection_id !== client_connection_id) return res.json({connected: false})
    res.status(200).json({connected: true})
}