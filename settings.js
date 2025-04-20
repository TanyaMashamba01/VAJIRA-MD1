const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=0PlDxBYL#RyAN-qLAbhvC9Pui8mfX3OkK4CvhH-gIeuYg4n0RR2A' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '263716729222' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '/' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'nonbutton' : process.env.MODE,
STATUS_REPLY_MESSAGE: '𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐉𝐔𝐒𝐓 𝐍𝐎𝐖 𝐁𝐘 𝗡𝗲𝘁𝗞𝗶𝗻𝗴 𝐌𝐃 ✅',    
ALIVE:  process.env.ALIVE  || '> 𝗝𝗼𝘀𝗵𝘂𝗮𝗺𝗮𝗺𝗯𝗼𝟭 𝗡𝗲𝘁𝗞𝗶𝗻𝗴❤️‍🔥'🫡  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
