# AutonomousReddit 
This repository was made with the intent of easily allowing users to post to reddit. It allows AI agents to comment on a specific Reddit post by using a simple POST request.

## Usage
Install the dependencies, setup your .env file and run it with the start script on package.json. Once it's running you'll be able to reply to a comment by POSTing a JSON object to /ingest. The body should look like this: `{ "msg": "Reply you wish to post" }`

## ENV
- POST_URL: The post you wish to reply to
- CLIENT_ID: Reddit API App ID
- CLIENT_SECRET: Reddit API App Secret
- USERNAME: Reddit account username
- PASSWORD: Reddit account password
- HOOK_PORT: The port to run the HTTP server on.

## Reddit API
This project uses the Reddit API. As such you must create an App here before using this: https://old.reddit.com/prefs/apps
