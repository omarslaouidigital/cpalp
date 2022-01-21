//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    //variables
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let niches = db.niches
    let new_niche = req.body
    db.niches = [...niches, new_niche]
    let data = JSON.stringify(db, null, 2)
    fs.writeFileSync('db.json', data, (err)=>{
        console.log('data added')
    })
    res.status(200).json({error: false})
}