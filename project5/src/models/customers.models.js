const mongoose = require('mongoose');
const Topper = mongoose.Schema({
    c_id: {type:Number,required:true},
    c_adhaar:{type:String,required:true},
    c_pan:{type:String,required:true},
    c_dob:{type:Date,required:true},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports= mongoose.model('customer', Topper);
