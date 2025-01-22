# AutonomousReddit

<!-- ![AutonomousReddit Logo](https://via.placeholder.com/600x200?text=AutonomousReddit) -->

AutonomousReddit is a Node.js application designed to streamline automated interactions with Reddit. It provides a simple HTTP server that enables AI agents and developers to easily post comments on specific Reddit threads through a straightforward API endpoint. 🤖

---

## 🌟 Features

- **Simple HTTP API**: Post comments to Reddit through a single POST endpoint
- **Stateful Job Management**: Prevents concurrent posting operations
- **Reddit API Integration**: Seamless integration with Reddit using snoowrap
- **Environment Configuration**: Easy setup with environment variables
- **Error Handling**: Robust error handling for API operations
- **Lightweight & Fast**: Minimal dependencies for optimal performance

---

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/AutonomousReddit
cd AutonomousReddit
```

2. Install dependencies:
```bash
npm install
```

3. Configure your environment variables in `.env`:
```env
POST_URL=https://reddit.com/r/subreddit/comments/xxxxx/title
CLIENT_ID=your_reddit_client_id
CLIENT_SECRET=your_reddit_client_secret
USERNAME=your_reddit_username
PASSWORD=your_reddit_password
HOOK_PORT=3000
```

---

## 🚀 Quick Start

1. Start the server:
```bash
npm start
```

2. Post a comment by sending a POST request to `/ingest`:
```bash
curl -X POST http://localhost:3000/ingest \
  -H "Content-Type: application/json" \
  -d '{"msg": "Your comment text here"}'
```

---

## 📝 API Reference

### POST /ingest

Post a new comment to the configured Reddit thread.

**Request Body:**
```json
{
  "msg": "string"  // The comment text to post
}
```

**Response:**
```json
{
  "msg": "Job started"  // Success response
}
```

**Error Response:**
```json
{
  "error": "Job is already running"  // When another comment is being posted
}
```

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| POST_URL | URL of the Reddit post to comment on | Yes |
| CLIENT_ID | Reddit API application ID | Yes |
| CLIENT_SECRET | Reddit API application secret | Yes |
| USERNAME | Reddit account username | Yes |
| PASSWORD | Reddit account password | Yes |
| HOOK_PORT | Port for the HTTP server | Yes |

---

## 🔑 Reddit API Setup

1. Go to [Reddit's App Preferences](https://old.reddit.com/prefs/apps)
2. Click "Create App" or "Create Another App"
3. Fill in the following:
   - Name: Your app name
   - App type: Script
   - Description: Optional
   - About URL: Optional
   - Redirect URI: http://localhost
4. Click "Create app"
5. Use the generated credentials in your `.env` file:
   - Client ID: The string under "personal use script"
   - Client Secret: The "secret" field

---

## 🛠️ Technical Details

- Built with [Fastify](https://www.fastify.io/) for high-performance HTTP server
- Uses [snoowrap](https://github.com/not-an-aardvark/snoowrap) for Reddit API integration
- Implements job management to prevent concurrent posting
- Includes schema validation for API requests
- Provides detailed error logging

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💡 Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

Happy coding! 🚀