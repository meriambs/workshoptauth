const mongoose = require('mongoose')

const connectdb=async ()=>{
    try{
   await  mongoose.connect('lien a remplacer avec ')
console.log('you are connected to the db ')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb