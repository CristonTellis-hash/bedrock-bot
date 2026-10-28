# Minecraft Bedrock 24/7 AFK Bot

A lightweight, headless Node.js bot designed to keep a Minecraft Bedrock server online 24/7 by bypassing inactivity timers. Built using the `bedrock-protocol` library, it runs entirely in the cloud, meaning your personal devices can remain powered off.

## Features
- **Headless Client:** Text-only connection that uses minimal system resources.
- **Anti-AFK Heartbeat:** Automatically sends a `/ping` command every 60 seconds to reset host inactivity shutdowns.
- **Auto-Reconnect:** Safely reconnects to the server within 15 seconds if kicked or disconnected.
- **24/7 Web Server:** Includes a built-in HTTP listener on port 3000 to remain awake via external uptime monitoring tools.

## File Structure
- `index.js`: Core logic for the Bedrock client connection, events, and the HTTP status server.
- `package.json`: Project metadata and required dependency management (`bedrock-protocol`).
- `README.md`: Project documentation and setup instructions.

## Deployment Notes
1. Turn your Minecraft server **ON** before deploying.
2. Monitor the hosting platform's live logs during the first startup.
3. Locate the official Microsoft device authentication link and the unique 8-digit token.
4. Navigate to `://microsoft.com` on any device, enter the token, and log into your secondary account.
