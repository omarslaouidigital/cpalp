//imports
const fs = require('fs')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    //variables
    let rawdata = fs.readFileSync('analytics.json')
    let db = JSON.parse(rawdata)
    let analytics = db.analytics
    let new_analytic = req.body
    new_analytic.date = new Date()
    db.analytics = [...analytics, new_analytic]
    let data = JSON.stringify(db, null, 2)
    fs.writeFileSync('analytics.json', data, (err)=>{
        console.log('data added')
    })
    res.status(200).json({error: false})
}