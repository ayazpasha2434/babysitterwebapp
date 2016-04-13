/**
 * Created by ayaz on 12/9/15.
 */

var mongoose = require('mongoose');

var blobSchema = new mongoose.Schema({
    _id: String,
    name: String,
    address: String,
    contact: String,
    mobile: String,
    isVerified: { type: Boolean, default: false },
    YOE: { type: Date, default: '01/01/1975' },
    dateEnrolled: { type: Date, default: Date.now },
    city: String
});

mongoose.model('Blob', blobSchema, 'babysitters');