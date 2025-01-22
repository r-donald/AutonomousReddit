import { Env } from './env.js';
import snoowrap from 'snoowrap';
import * as job from './job.js';

const reddit = new snoowrap({
	userAgent: 'DonaldAI/1.0.0',
	clientId: Env.CLIENT_ID,
	clientSecret: Env.CLIENT_SECRET,
	username: Env.USERNAME,
	password: Env.PASSWORD,
});

export async function postComment(commentText) {
	job.setRunning(true);
	try {
		const postId = extractPostId(Env.POST_URL);
		if (!postId) {
			console.log('Job error: Failed to extract post id');
			return;
		}

		const submission = await reddit.getSubmission(postId);
		const comment = await submission.reply(commentText);
		console.log('Job Success:', comment.permalink);
	} catch (error) {
		console.log('Job error:', e);
	} finally {
		job.setRunning(false);
	}
}

function extractPostId(url) {
	// https://www.reddit.com/r/subreddit/comments/xxxxx/title
	// https://reddit.com/comments/xxxxx
	const matches = url.match(/comments\/([a-z0-9]+)/i);
	return matches ? matches[1] : null;
}
