let mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/lulusDB",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    (err)=>{
        if(err){
            console.log("database not running")
        }else{
            console.log("database connected");
        }
    }
)
let tabSiswa = mongoose.Schema({
    nisn:String,
    nis:String,
    nama:String,
    ttl:String,
    kelas:String,
    tahunAjaran:String,
    status:String
})
let tabAdmin = mongoose.Schema({
    username:String,
    password:String,
    tempat:String,
    tanggal:String,
    kepsek:String,
    nip:String
})

let siswa = mongoose.model("tabelSiswa",tabSiswa,"tabelSiswa");
let admin = mongoose.model("tabelAdmin",tabAdmin,"tabelAdmin");

module.exports =  {siswa, mongoose, admin}