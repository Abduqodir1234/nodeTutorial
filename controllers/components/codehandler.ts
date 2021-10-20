import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID } from "./Variables";

let client = require("twilio")(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)



let codehandler = async (code:String,phone:String)=>{
    let ans =true;
    await client
          .verify
          .services(TWILIO_SERVICE_ID)
          .verificationChecks
          .create({
              to:phone,
              code:code
            })
          .then((response2:any)=>{
              ans=true;
            //   console.log(response2);
             
          })
          .catch((err:any)=>{
              ans=false;
            //   console.log(err);
              
              
          })

          return ans;
}
module.exports =codehandler;