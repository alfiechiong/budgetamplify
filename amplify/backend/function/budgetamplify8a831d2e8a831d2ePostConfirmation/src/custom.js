var aws = require('aws-sdk')
var ddb = new aws.DynamoDB()

exports.handler = async (event, context) => {
  
  let date = new Date()

  if(event.request.userAttributes.sub){
    let params = {
      Item:{
        'id':{S:event.request.userAttributes.sub},
        '__typename':{S:'User'},
        'username':{S: event.userName},
        'email': {S: event.request.userAttributes.email},
        'createdAt': {S:date.toISOString()},
        'updateAt':{S:date.toISOString()},
      },
      TableName: process.env.USERTABLE
    }

    try{
      await ddb.putItem(params).promise()
      console.log("Success Inserting to USER table")
    }catch(e){
      console.log(e)
    }

    context.done(null, event)
  }else{
    console.log("Error: Nothing was writtern to dynamoDB")
    context.done(null, event)
  }

};
