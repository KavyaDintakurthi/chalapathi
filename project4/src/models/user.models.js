const mongoose = require('mongoose');
const Topper = mongoose.Schema({
    t_id: {type:Number,required:true},
    t_age: {type:Number,required:true},
    t_name: {type:String,required:true},
    t_address:{type:String,required:true},
    t_email:{type:String,required:true},
    t_phone:{type:String,required:true},
    t_dob:{type:Date,required:true},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports= mongoose.model('topper', Topper);
