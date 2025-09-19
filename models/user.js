const mongoose=require('mongoose');

const userschema= new mongoose.Schema(
    {
        first_name:String,
        last_name:String,
        dob:Date,
        ph_no:String,
        email:{type:String,unique:true},
        aadhar_no:String,
        address:String
    });
module.exports=mongoose.model('User',userschema);