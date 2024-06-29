import fs from 'fs'
async function log(logData){
    const fsPromise=fs.promises;
    logData= new Date() .toISOString()+`\tLog Info-\t${logData} \n`;
    try{
    await fsPromise.appendFile('log.txt',logData)
    }catch(err){
        console.log('error in logging the data');
    }
}
export default async function loggerMiddleware(req,res,next){
    const logData=`URL- ${req.url}\tReq. Body ${JSON.stringify(req.body)}.`
   await log(logData);
   next();
}