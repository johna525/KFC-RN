import AWS from 'aws-sdk';

const TallyDB = new AWS.DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
  region: 'eu-west-1',
  accessKeyId: 'AKIAIFTRWYFFOUPMYM2Q',
  secretAccessKey: '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'
});

const TALLY_TABLES = {
  points: 'PointsTally',
  recognitions: 'RecognitionTally',
  badges: 'BadgeTally',
};

const getTallyValue = async (employeeId, type) => {
  const params = {
    Key: {
      employeeId
    },
    TableName: TALLY_TABLES[type]
  };

  return new Promise((resolve) => {
    TallyDB.get(params, (err, data) => {
      if (err) resolve(0);
      resolve(
        data.Item
          ? { tally: data.Item.tally, ids: data.Item.ids }
          : { tally: 0, ids: [] }
      );
    });
  });
};

const updateTallyValue = async (employeeId, type, amount, id) => {
  const params = {
    Key: {
      employeeId
    },
    TableName: TALLY_TABLES[type],
    AttributeUpdates: {
      tally: {
        Action: 'ADD',
        Value: amount
      },
      ids: {
        Action: 'ADD',
        Value: [id]
      }
    }
  };

  return new Promise((resolve) => {
    TallyDB.update(params, (err) => {
      if (err) resolve(false);
      resolve(true);
    });
  });
};

const setTallyValue = async (employeeId, type, amount, id) => {
  const params = {
    Key: {
      employeeId
    },
    TableName: TALLY_TABLES[type],
    UpdateExpression: 'set tally = :t, ids=:i',
    ExpressionAttributeValues: {
      ':t': amount,
      ':i': [id],
    },
    ReturnValues: 'UPDATED_NEW'
  };

  return new Promise((resolve) => {
    TallyDB.update(params, (err) => {
      if (err) resolve(false);
      resolve(true);
    });
  });
};

export default {
  getTallyValue,
  updateTallyValue,
  setTallyValue
};
