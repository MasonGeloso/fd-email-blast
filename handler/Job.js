const mongoose = require('mongoose');


const model = mongoose.model('Job', {
        subject: String,
        body: String,
        exclude_emails: Array,
        api_key: String,
        domain: String,
        email_config: Number
    }
);


module.exports = model;