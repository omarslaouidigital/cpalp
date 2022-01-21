//imports
const fs = require('fs')

//variables
let rawdata = fs.readFileSync('db.json')
let db = JSON.parse(rawdata)
let niches = db.niches

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    let niche_id = req.body.id
    let niche = false
    niches.forEach(elt => {
        if(elt.id === niche_id) niche = elt
    })
    const index = niches.indexOf(niche)
    if (index > -1) db.niches.splice(index, 1)
    let data = JSON.stringify(db, null, 2)
    fs.writeFileSync('db.json', data, (err)=>{
        console.log('data deleted')
    })
    res.status(200).json({error: false})
}