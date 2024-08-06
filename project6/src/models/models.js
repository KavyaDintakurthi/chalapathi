const mongoose = require('mongoose');
const dept = mongoose.Schema({
    d_name:{type:String,required:true},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports= mongoose.model('dept', dept);
