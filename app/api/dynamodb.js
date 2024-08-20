const AWS = require('aws-sdk');

// Configure AWS SDK with appropriate credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-10-17' });

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Adjust as needed for your data size
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email } = req.body;

      // Validate data if necessary (optional)
      // if (!name || !email) {
      //   return res.status(400).json({ message: 'Please enter both name and email' });
      // }

      const params = {
        TableName: process.env.DYNAMODB_TABLE_NAME, // Replace with your actual table name
        Item: {
          id: { S: Math.random().toString(36).substring(2, 15) }, // Generate a unique ID
          name: { S: name },
          email: { S: email },
        },
      };

      await dynamodb.putItem(params).promise();

      res.status(200).json({ message: 'Data submitted successfully!' });
    } catch (error) {
      console.error('Error submitting data:', error);
      res.status(500).json({ message: 'An error occurred' }); // Customize error message if needed
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}