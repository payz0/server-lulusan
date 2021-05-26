let express = require('express')
let db  = require('./database.js')
let app = express()
let tabel;

function params(tab){
    switch(tab){
        case 'siswa':
            tabel = db.siswa;
            break;
        case 'admin':
            tabel = db.admin;
            break;
        default:
            break;
    }
}


app.get("/:tabel",(req,res)=>{
    params(req.params.tabel);
    tabel.find({},(err,doc)=>{
        if(err) throw err;
        res.json(doc)
    })
    // res.send("hallo "+process.env.PORT)
})

app.post("/:tabel",(req,res)=>{
    params(req.params.tabel);
    tabel.create(req.body,(err,doc)=>{
        if(err) throw err;
        res.json(doc)
        //  console.log(req.body)
    })
})

app.post("/cari/:tabel",(req,res)=>{
    params(req.params.tabel);
    tabel.find(req.body,(err,doc)=>{
        if(err) throw err;
        res.json(doc)
         console.log(doc)
    })
})

app.put("/:tabel",(req,res)=>{
    params(req.params.tabel);
    tabel.findOneAndUpdate({_id:req.body._id},{$set:req.body},{new:true},(err,docs)=>{
        if(err){
            console.log('gagal update')
            res.json({'sukses':false})
        }else{
            console.log('sukses update ')
            res.json(Object.assign({'sukses':true},docs))
        }
    })
})

app.delete("/:tabel/:id",(req,res)=>{
    params(req.params.tabel);
    tabel.findOneAndDelete({_id:req.params.id},async(err,docs)=>{
        obj = await Object.assign({'sukses':true},docs)
        if(err){
            await res.json({'sukses':false})
        }else{
            await res.json(obj)
        }
    })
})

module.exports =  app