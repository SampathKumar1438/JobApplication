// netlify/functions/jobs.js

const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const response = await fetch('http://13.203.221.63:5000/jobs');  // Replace with your EC2 Flask URL
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unable to fetch jobs' }),
    };
  }
};
