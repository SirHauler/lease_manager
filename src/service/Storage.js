import * as AWS from 'aws-sdk'; 

const docClient = new AWS.DynamoDB.DocumentClient(); 

AWS.config.update({region: 'us-west-1'});

export const fetchData = () => {
    var params = {
        TableName: 'UserAndPropertyTable-staging'
    }
    console.log('we got this far doc'); 
    docClient.scan(params, function(err, data) {
        console.log('this far?'); 
        if (!err) {
            console.log('here???'); 
            console.log(data);
        } else {
            console.log(err); 
        }
    })
}