const mongoose = require('mongoose');
const user = mongoose.Schema({
    u_name:{type:String,required:true},
    d_id: Object. assign(target, objectID);
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

module.exports= mongoose.model('user', user);
