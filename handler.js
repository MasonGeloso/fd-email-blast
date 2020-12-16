'use strict';

import mongoose from 'mongoose';
const assert = require('assert');

const DB = 'fd_blast_email'
const URL = 'mongodb://35.153.194.95:27017/fd_blast_email';



module.exports.createJob = async event => {

  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  });

  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.getJob = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};