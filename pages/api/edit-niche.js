//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    //variables
    let rawdata = fs.readFileSync('db.json')
    let db = JSON.parse(rawdata)
    let niches = db.niches
    let nicheToEdit = req.body.niche
    niches.forEach(elt => {
        if(elt.id === nicheToEdit.id){
            const index = niches.indexOf(elt);
            if (index > -1) db.niches.splice(index, 1)
            db.niches.push(nicheToEdit)
        }
    })
    let data = JSON.stringify(db, null, 2)
    fs.writeFileSync('db.json', data, (err)=>{
        console.log('data added')
    })
    res.status(200).json({error: false})
}