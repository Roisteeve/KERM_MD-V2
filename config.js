//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "lionelsteevensverdier@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/50937042801 , https://wa.me/50944731128";
global.sudo = process.env.SUDO || "50944731128";
global.owner = process.env.OWNER_NUMBER || "50937042801";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "truee";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BFNnVjc2FhSVVEWm9IanNzTHhLY3B1THNiak9lUVlrbHZJRlFUaDhrcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRERjak92U2xlcmlZOHhxODBWc0srTDF2T1RsQmpOUGRyc0hjdDl1K3NIZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrREtTWCtKcTBuWW9xK2tqQ1NVSmdIcDRxVDludUw1emsxOHptdTZLVDBJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsYlcvRGF3SUNSUjRodmR1cmpvTEJsdEVkelhyRFdlYys3SHFNekpPUEEwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhKNFN3am4wa0xVc09YcEg1R24vVWxOamxQNDhBV1FJMkVkbk5PeThmbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpQWWhFMDYvS0c0K3NYQjkyVDl3TE56dXIxZmp2alBFTGVTcGI2NERkZ0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0o1WENqUGJmRmlCQk85Njc1ODdPTHJDU3VRU3JVdWtURUxQNyt4aHBVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3NRalltT1JscCtFM1V6Rmx1QTFxUStCaEdtZTV3ekdVVk5wOE8rbnBpUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitjWDZMQmo1eFJRa0hDZ3AySHNoWWR3TTZRcHpnTlhqVTZvRXBUUStSQjdoYzdBa2ZnQlFnVzYyL0xqRlk2c3duTVZjN3lEUW12TWRpMGZiTTArbER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6Im5HMmw2OXlMejMvNVF3TnBrOE9MbDlqL0psTW14YjJhQU45aXVJNWQrc3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im9ndmlMLTdCUm0tRW55TFpoOHVuSmciLCJwaG9uZUlkIjoiMmM0NDNkOWMtYzY1Zi00ZTk5LWEwM2YtMzUxOTQzZjg5NDZkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNWREZFN0Y1K1pueThoaTA5UmY1c0dKcUltUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiS1ZWb3hnN2RraHpCSGRSRFB4V2pBU2ozRWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUFFEU1ZSSkIiLCJtZSI6eyJpZCI6IjUwOTM3MDQyODAxOjk3QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQV2tzWDRRa2ZLQXVBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6RXVoYWk1eW1xNDBsUUZvWEc5Y1hpcHU4cUhYNzlJeWhSOXRMbEYxRWtJPSIsImFjY291bnRTaWduYXR1cmUiOiI5ZkcrczhEOXFCMU90anMvNlVTWlRPNGJGVW5FMVE1ei82OXhWeldtQnkwMG00Tk91cUN3L3lROXgzUGtCZDdYeER1Kzc4Qm42OGR3Q1BDM3dwVFBBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQW9pTzg1NW55NUQzVjZMNlVtNmY4OGxCd0djMWQ0dVVGblNwMzFQUFJzdEZMYlhNY0grdGZOVFlxV0tRZ3FkVW8vZlZ0MkVwUzg5NlZJWG9BUEJkQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNzA0MjgwMTo5N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjeExvV291Y3BxdU5KVUJhRnh2WEY0cWJ2S2gxKy9TTW9VZmJTNVJkUkpDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MDY3ODcxfQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "~ ₉₀₀₃",
  packname: process.env.PACK_NAME || "~ ₉₀₀₃",
  botname: process.env.BOT_NAME || "~ ₉₀₀₃",
  ownername: process.env.OWNER_NAME || "~ ₉₀₀₃",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
