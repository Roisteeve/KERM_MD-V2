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
global.sudo = process.env.SUDO || "50941469808";
global.owner = process.env.OWNER_NUMBER || "50941469808";
global.style = process.env.STYLE || "3"
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0RFMExWUytYSmxhYzdKK1RGekdITXNNK01lblhHenVZdlJBbFlDL1NuWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FKSVBSYW12OGVLbVN0TXJ6L2xxSDlIaEw3TEpFYUsvR3RpNTJLZ1p4az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyTkhSVEFtdXBlMkRoa3BtQnhNcEF1R2RUOG50eGdIS3NGMDM4VzJPSUdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZE1HZEtGRVIyTXFXRXlEUlVrNGRNRTJWVlJpby9kWWUvNk1uaW5vT3c4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNMkF2bytXU1hBODBFcTN3QnR5Wml5Z2htaXVaRE1pcFlScW04TW94M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJTdVVZbERzS2pYMU5jekxHWjRHRDdpU1Vub21lemZxT2FISHdrTEJSeTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY090WExFUlhEaTJNWC90SDlYUHg3Y0pFMUdDQi8zZXVEaGRYWWZvTkluVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHoxRGMxM3dIbUVaRkw4bEpoaERCOXhqTDFORk5jTkxXWFIzU1JyMTdoWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1TlR4NjFISW5meFc2OGh1dVpkYW5CYk5qL2NYeXdYK3VLSWZOZW9YSlBBY3E1VkJnZWR5NHV4ODMxM3l2Q0dNbG1hQkQvdmd4d3p0azRWZ282Nmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjM2LCJhZHZTZWNyZXRLZXkiOiJ2ZklBb2JBcERQMkdpMFUrZkFwN1RkaVVRaVlWUjJkQ3FHUjRpUTV3RTVnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQxNDY5ODA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkJEMjQxRkZBRDlEN0IxRkM2RDBGNkQ1NTU0M0NDQzcxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgwNzQ3NjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjUwOTQxNDY5ODA4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUwRTFGNEMwQjg4NTY1OTI0RTE2MzAxMDI0NzZGQ0NGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjgwNzQ3NjV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImxFXzBGLUJUUlNpRy1iQThnd0FCa2ciLCJwaG9uZUlkIjoiZWRlODlhOWMtOTA3NS00MzkzLThiZjktYjFjMWJiM2U1Mzg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5wMkF2ZEVSdklOaWNOUkJONjVUN1ZaVlVUND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzK2t5UzNYeUxWNFdpQ0Ixc0VBMGtoQVpSZWM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0EzVEdNMk0iLCJtZSI6eyJpZCI6IjUwOTQxNDY5ODA4OjE0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThILijaPig53wnZea8J2XovCdl5fwnYSf8J+Nt+Kcrs2i4omb4oOd8J2En/Cdmq0z8J2atPCdmrDwnZq78J2QkvCdkJTinK7ig53wn5GRIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKelMwbGdRKzZlQnVBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2L1lNa0RHSVM3NmJNLytBZXZQaE9NdmFnY1I3WlY2UGczRm04L3ZoQ2g0PSIsImFjY291bnRTaWduYXR1cmUiOiJKeGNOR3hCb3lPNW9HZWU2d0RCVWlreXlIQkgzM2JibWloVFhZSlM4NUJ1QysxZGFqTHFRaWVDNy9KNjBVdHE4L1BPcDRmN3B3a3lRRnVqanNKTXFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWDg4RzF1MUc5TldzelA1S1RubElGYkJkME5mTEhTSzFzOHJRdWl4RXpoS0ltdFBzSndQRGJsa1UwNEk4K1FPYWhWRXRiellnYStOV2FMV00wZytVaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDk0MTQ2OTgwODoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJldjJESkF4aUV1K216UC9nSHJ6NFRqTDJvSEVlMlZlajROeFp2UDc0UW9lIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI4MDc0NzYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5vUSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "~ ₉₀₀₃",
  packname: process.env.PACK_NAME || "𓄂⍣⃝𝗚𝗢𝗗𝄟🍷✮͢≛⃝𝄟𝚭3𝚴𝚰𝚻𝐒𝐔✮⃝👑",
  botname: process.env.BOT_NAME || "𓄂⍣⃝𝗚𝗢𝗗𝄟🍷✮͢≛⃝𝄟𝚭3𝚴𝚰𝚻𝐒𝐔✮⃝👑"
  ownername: process.env.OWNER_NAME || "𓄂⍣⃝𝗚𝗢𝗗𝄟🍷✮͢≛⃝𝄟𝚭3𝚴𝚰𝚻𝐒𝐔✮⃝👑'
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
