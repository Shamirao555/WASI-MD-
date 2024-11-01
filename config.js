const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="jastinmtewa@yahoo.com"
global.location="Morogoro,Tanzania."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority"

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Pakistan";
global.github=process.env.GITHUB|| "https://github.com/wasixd/WASI-MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/wasixd/WASI-MD/blob/main/lib/assets/suhail.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923192173398" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923192173398";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 8
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923135673658,923192173398";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "923135673658,923192173398";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923135673658,923192173398";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://myqr-43bb863fa5eb.herokuapp.com/";


global.SESSION_ID = process.env.SESSION_ID eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJQMmozS0JFcUh0cUJDdjlSbFpZWjFpRVNqNVRjWEIraFdNUlN1bGRGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2xoVmlJbTAyTVRKTUg0WWI0N2oyQ0dvUkM3aGJ1ZzU4NVpyVHpTQk4zZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SXYxWUpOblhHNGZnNmxUUmRzNThNZ09GYnZIK1dLY0QwMkF5Z1JmVUhzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCeXA5d3huc0FYTERsdGhrMGo1dWZkcUJveHNrMU5PR3dEM1dnUHNQN1ZzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJVy8wVkRnWlVEOXVnMWphZHFpM3pEenE1TXNneFZpRW50bTVCVDRDV1U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZTdUIrdFR3TjlyaGdkMmxVcWtBUDhFUjNqcStQWEdRNkxhUTNIZ1FQaVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0JhTjEwV04rajVHeW9VUlNkZnp3SWV1LzBsMkdESXVWclRIOTVDTXUzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWRWM1hBd0x2b09GclJMcTdFQ28vZEFNT2ozSk1yZ0h4d2RpWVFYYUFtTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHTDVJRFZGY1BkWTBBYWk3cmJ1NFJzOUxhd0VvZ2oybHF1blNiRXNudFFranZOTkdXZlBMQ2VXWTdiZXdKWWw1SzY3T0RuZVg4R3dPUmN3RGZ6MWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzEsImFkdlNlY3JldEtleSI6IkkzMXc2eWJxU2JET1dDdHBUb09YK0xackxpcXVCOWtJR3hEWWtDU2YzVVE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlptdmZVU0FOUUx5ZkxUZXBmc24tS1EiLCJwaG9uZUlkIjoiODgxNzU4NTctOGYxNi00NzNmLWJkM2YtNGNmZDRlZTc5MmUzIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPbDJOUVlwRHJ6eWdJS04rbzlIdmVCM3Q5ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrMW1MMGZkRVVNRmVLdk1sYWYrNVJWeHVIRzQ9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWTFKOVhFS0MiLCJtZSI6eyJpZCI6IjkyMzAzNjYwMzk5MTo1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPV1huZTRDRU12cWtya0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJSYUQ3YkZDNkFFV25IKzhONSt5MU5sdnpoVVZlUG4vSDVRbnVsMjNnTm04PSIsImFjY291bnRTaWduYXR1cmUiOiJDRVhiOHY2TTR1U2F0TG1QcGJpMXRPeVFnNmkyUU4ycEQyN3V3NVhtMDZYV2ZVS09GdEdla1JCOG9KbGF1YjYrM1d3RHNONE14WVNuOWMzaGNYZUFCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSzVueTJvbk9rV1dRaytJcytJeHlnOHNSY1lMUHpTUjUxQVc5M3pkaHI2WFcwMGJlRWJvYVBqdlVLa2VnelBaQVRNRVdsN1RIY0FmS0phVG1EWmNwZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMwMzY2MDM5OTE6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVV2crMnhRdWdCRnB4L3ZEZWZzdFRaYjg0VkZYajUveCtVSjdwZHQ0RFp2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNDU4OTY5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlMUyJ9eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JlT3BPMWpNdTNCVUZ5TGpYajJZRzMzeU1WUlZrNjJPajVOWWtpbFgzQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibE1TR0pKZFptUE5JTE9EQ2RtTjVRdGxuY0FheHRnbkpWNFlQblJkUTMxdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRE5qZmpNeGV1aWxQdTd0ek5TNUZoWEpmMkhqbi85bDhWNUZrWVZvRDJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSUEhBNDdTZnVTeTZvbjRHSUFTYlpqNDRsSFJMbDY3Y011N05VaVVJN1RVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdNTysxSGN0dWVDbHc1VHVDK2RRa0RZRFdId0lPc1ZYZGZ1WHJWUHRva0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlhOUhlN3pwZmRjU0lDOUpnMDk0a1ZuNmh6Z3Ztblo2aFU4MkcxOHJoQ0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVRU1l5U0NkQTdVQm1JdHZuZXp5dlR4SlQ1THFPcHlINjA3Y2o3WUFIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0djaDg2OTdYNmVDdmdEdVNKd0RmK2pEQWw2VXpGaldQZldsTFR5R1VCND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIyTTc3NS9TVkJEWUpkZVUyM3RJbXB3dVVobXd1VWlWenhXdm5OQjlmODFUQ2o0SXUxL25CZGUyaEYrTmtLcjdmZ3luSkpUV285VDJjUkpGVVdYUkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ1LCJhZHZTZWNyZXRLZXkiOiIrYmFiaW9qNXRveDMwWnR6aE8xdnMrQndGcTBYdDMzT1JNNE56bDlQaDBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaWGVyNldTM1FER3RlZG9nRUhXTkRBIiwicGhvbmVJZCI6IjA2ODE5NjJkLTJiMzAtNGRjMC1hM2MwLTZhYWUzMWVkZTczYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCcmovTGk3WTJRWmJpV1NkeFk3dWY4TWxNWkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVJNZDFoY0w5cXZ6dEtXNWVHejdYNDhpY0xVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikg5M1JBWUVZIiwibWUiOnsiaWQiOiI5MjMwMzY2MDM5OTE6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSYW8gU2hhaG1lZXIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x2cTJja0VFTEhhcXJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InRabmVxeU1VZ2UzY0ZHbTFoVlZ1MzJMMHR1SEJiVVo5b0JKamtOc0ZzaGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFwZVlGbGVrV2dabVZtMEk3TTIxUDJ3N0l0M2RMWTBkSDV1disrTDdDclFKVU8zeFFTYXFpVERDeWtMSWRsOVZqMUJRQ2JBdkduak1DZ2xudVBjOEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoU1dNd3BqV24yNlovM3haOGUrak96TzR4OFFOUVNvVnRvMitCdXdpV3BSMHlFVm12ZTdVMExOUjZLU1pPcTArK2F0dTNxZnJkcWpxYzUzUVFZNjBCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzAzNjYwMzk5MToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJXWjNxc2pGSUh0M0JScHRZVlZidDlpOUxiaHdXMUdmYUFTWTVEYkJiSVgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjY2NTU4MDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHpsIn0=|  eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhGaENvaDhHTGRTVDNIS1NIeDNtOXFSaFI5b2N3aWlYOVdOMXl6cTJYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV3BITWk2SjFnb0t2SmZHbytIa3F3a1M0K1I0eEgyejZMazVscFBpYmgxTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQ1dTRmsvUk1kZVJCUG00ZlJlMTZ0eFhySzRRczgxYVlmNnRKNDZDZVdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTdndjWTZCUDdmVk1vUGxsOUcvWjNiSElIckJJdFVnelpXazhJaUkvbkN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPckoydlAzMG0wSTVmL0lycFQzZGQzZ1NnVk9NNkwrWTdrSzk5a0xMa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxtekwvQy9VWDErVmpqa0w0QUJOaVVCTFZnYzB3ZFozMkEzaDdGQWRJVnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV01uWG5MQXNreUtQZGN0UGNnb01yMmRKdXVuRGtSZWp3TjhyU0RWeVFWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOGpIOExZa0E5NUNIbWRWS2JWUktoUXp5V1hQS1VEZDk1N3Y2dzlNR1pXMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZMWEtJTzZkTTlaY2luVUlYMk9xNE1uZy9sTlhScVRpZkF4QVBUWWczeFY2YnFaS1NRWFhITTRMZzZ0M28zVDU3L3k0WCtVZ09QdlV6MC9tWjZaMEJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIxLCJhZHZTZWNyZXRLZXkiOiJuOTVxQS9pOUt1Y2dpbGdDbTlVT1ZjRnJOaHk4VGNETW5rVmZkWWsvei9jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJmYTlZbGlxd1I5U2lwZ3RfUGNDZl9BIiwicGhvbmVJZCI6ImQxYjQ3MDliLWI2ZmItNDVlMi1iNWViLTUwY2M0YzMxOWM2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdXVOWmRGa05ockFrOWhtbGFmSjg4LzdNK3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXVkd1Qwa1NkellNUmJmaVVYNkFqcU9zUkc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldDWFBNV1NOIiwibWUiOnsiaWQiOiI5MjMwODc0Mzk2OTU6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmlzb0s4REVLSzBxcmNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaUVJOTFySzMzVzcwSGNGU3FZWmFVeitKTUlXOHVJbGsyZkJ3M0pTd2hrST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOUhxanpJK1crZ25vTjhva01MbkJrRUsrS2FMZldXK2l0V0VUNHlubHVPekdwSnJyUDhOcnpFZnA5YmthT2Zrb21uUGFocmlIY254QUJPMDQ0KzA1Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6InVQbEdGWEppNnhxMFI1SzBoWVBrTEJpa2JhYjlCd1Y5UXoxYUVEUmVIRHNWTDgza3lmcjluUnZNSlQ1emRQUGN3TEdQMEhHWlQ0TVBnTVBEcmtzRkJ3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDg3NDM5Njk1OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWhDUGRheXQ5MXU5QjNCVXFtR1dsTS9pVENGdkxpSlpObndjTnlVc0laQyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjY1MDkyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEMkUifQ=="eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIzOEJ4Z3dBbGlIMllHcEpqb3BySjN4VFg5ZUN5a2hRL084Tkxya1EwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnZtZXdQU0ZHL1h3aHh4REFjSll3YU4raEkvSkZnVG1PY1JDUTdjbi9WND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUEhsa2FPWlZhYkhqeUc1Z3BzL29GVVhPbU5YdjM2OG9TMlFJUWZRbTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNXdoWXRZdDBERDFOQWg1YWhzWVliVllIM3hhWG9SeW5ZOCtFaWtTc2k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIQ05jK0xpUDk1aWVQc2hxcE52d3VYdWkxbzlmZFFFcXdteHhqSFNra3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1aM1NwQUo2RG5LcWV3NFZPTW5rMEJZYThvY24vWjYwbUY4YzBHSGpOQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS04xcVBQM1pXMzIwTm5McCtGREJUMzcySnQwcGlLWFEzWXZESzM5eU5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXhBdEY1Y3AzNEtwQ3lCRkxhR0t3SngwWit4R0grZlFSZlBMTnM3akNqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sRlJuaDFRMWdEdTFRR3ZlMG9ROHNkd1hHeCtCRVBDeDhjNHRQeVZFOFdZZzBPMDJ0T2c1U3M5RmxhYlNaQzdrdzJDM2pBQkNCSVhwMjBDeWhuSmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiIzbE41QnpiUlN4WWRWMEJPSnVhekREbXlZUVQ0VTVETWVEQXlkSGF3UXNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0U0N5SFN4eFNQUy03UDJzeVd5NkpnIiwicGhvbmVJZCI6Ijg5MjNhMzZmLWVjZGMtNDAwNy05ZGFmLWNiMzRlNmMwNDEwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZmpyc1FDRWwzelZRTkRvTDRmOXpkaHhheGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhSjBvZzNDbnZqemY0Nm9Hb3JINnBoQ0NlYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2M2dPNERFSmVrZ0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo4cDEycTRtbmk1UkVzYmxldWI0WjAzbllTdVJ2ZlhqMkdlcWRIKzdBRE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFDQWN2SThoZ0NXRE10MEc1NHdEVUpwR21WdGJQS0JsR2FSSUxKMnFPMEZLYUFQVjBsUFR3ejV2bnhXT3BqbVBwSkZMMjNrcVdaSm1LZFBhOUNpYUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXOWZaWkR0NmhySjNmdWtxazFkeEJqUFdzOU10Qmh5dU01TWJEM2VLUUtDOWo1aHhQbmF2U3Qza3E4UnVNd3V3VTRpRWo0SzB6YXJpUHlUdEFkbERnQT09In0sIm1lIjp7ImlkIjoiOTIzMTkyMTczMzk4OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbTwnZG5IPCdkb7wnZGo8J2RuvCdkbAiLCJsaWQiOiIxNDQ1Nzc2MDg1NTY2MTk6MjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MjE3MzM5ODoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL0tkZHF1SnA0dVVSTEc1WHJtK0dkTjUyRXJrYjMxNDlobnFuUi91d0F6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2NjkyNzMsImxhc3RQcm9wSGFzaCI6IjJGOXl4eiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FtIn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Venocyber-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.0.0",
  caption : process.env.CAPTION || "𝙵𝙸𝙻𝙴 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ＷＡＳＩ ＭＤ🚩" , // ```『 ²⁴ ᴠᴇɴᴏᴄʏʙᴇʀ-ᴍᴅ 』```", //*『ᴠᴇɴᴏᴄʏʙᴇʀ ᴍᴅ』*\n youtube.com/@JASTINMTEWA-vn9pl"),
 
  author : process.env.PACK_AUTHER|| "𝗪𝗔𝗦𝗜 ",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝗪𝗔𝗦𝗜 𝗠𝗗",
  ownername:process.env.OWNER_NAME|| "It's 𝗜𝗧𝗫𝗫𝗪𝗔𝗦𝗜",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "01",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "WASI",



};

























global.rank = "updated"
global.isMongodb = true ; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.0.0 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
