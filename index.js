'use strict';

module.exports.user = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false;
    const response =  {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            "Access-Control-Allow-Methods": "'OPTIONS,POST,GET'",
            "Access-Control-Allow-Headers":"'Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Forwarded-For'"
        },
        body: "User details updated successfully"
    };
   
    return response;    
}