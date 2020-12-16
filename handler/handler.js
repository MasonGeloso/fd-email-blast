'use strict';

const connectToDatabase = require('./db.js');
const JobModel = require('./Job.js');

connectToDatabase();


module.exports.createJob = async (event, context, callback) => {
  return callback(null, 'Hello World!');
};


module.exports.getJob = async (event, context, callback) => {

  const newJob = new JobModel({
    subject: 'test input',
    body: 'here is a test body',
    exclude_emails: ['testUser@gmail.com'],
    api_key: 'l435jl2k3j4lkj524',
    domain: 'testdomain',
    email_config: 2309482
  });

  newJob.save((err) => {
    if (err){
      console.log(`Error in: ${err}`);
      return callback(null, {statusCode: 500, body:`Failed to write data ${err}`});
    }

    return callback(null, {statusCode: 201, body: newJob});
  });
};