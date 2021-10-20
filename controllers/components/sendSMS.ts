import { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_SERVICE_ID } from "./Variables";

let client = require("twilio")(TWILIO_ACCOUNT_SID,TWILIO_AUTH_TOKEN)

let sendSMS = async(phone:String)=>{
    let ans = true
    await client
          .verify
          .services(TWILIO_SERVICE_ID)
          .verifications
          .create({
              to:phone,
              channel:"sms"
            })
          .then(async(res:any)=>{
              console.log(res);
               ans = true
          })
          .catch((err:any)=>{
              console.log("Error",err);
              ans = false
          })
    return ans

   
}
module.exports = sendSMS