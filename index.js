const bedrock = require('bedrock-protocol');
const http = require('http');

// 1. CHOOSE YOUR SERVER SETTINGS
const options = {
  host: 'Blablqblacksheep.enderman.cloud',          // Replace with your FreeMcServer IP (e.g., 'xyz.freemcserver.net')
  port: 45880,                         // Replace with your FreeMcServer Port (usually 19132)
  username: 'pianoguesses@outlook.com', // Your secondary Microsoft account email
  offline: false                       // Must be false to log into official Microsoft accounts
};

// 2. THE WEBSERVER (Keeps the script alive 24/7)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bot Status: Active and Running');
});

server.listen(10000, () => {
  console.log('✅ Web server is live! Ready for UptimeRobot monitoring.');
});

// 3. THE MINECRAFT BEDROCK BOT LOGIC
function createBot() {
  console.log("Connecting bot to the Minecraft server...");
  const client = bedrock.createClient(options);

  client.on('join', () => {
    console.log("🎉 SUCCESS: The account has logged into the server!");
    
    setInterval(() => {
      if (client.status === 2) { 
        client.queue('text', {
          type: 'chat',
          needs_translation: false,
          source_name: client.username,
          xuid: '',
          platform_chat_id: '',
          message: '/ping' 
        });
        console.log("Sent anti-AFK heartbeat ping.");
      }
    }, 60000);
  });

  client.on('error', (err) => {
    console.error("⚠️ Error encountered: ", err.message);
  });

  client.on('close', () => {
    console.log("❌ Bot disconnected or kicked. Reconnecting in 15 seconds...");
    setTimeout(createBot, 15000); 
  });
}

createBot();
