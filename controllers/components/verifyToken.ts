import { accessTokenSecret } from "./Variables";

const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req:any, res:any, next:any) => {
  if(req.url !== "/api/user/login" && req.url !== "/api/user/verify/code" && req.url !== "/api/user/verify" && req.url !== "/api/user/register"){
    const token = req?.body?.token || req?.query?.token || req?.headers["x-access-token"] || req?.headers["authorization"]?.split(" ")[1];
    
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }

    try {
      const decoded = jwt.verify(token, accessTokenSecret);
      req.user = decoded;
    } 

    catch (err) {
      console.log(err);
      return res.status(401).send("Invalid Token");
    }

  }
  return next();
}

module.exports = verifyToken;
