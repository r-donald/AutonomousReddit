import Fastify from 'fastify';
import { Env } from './env.js';
import * as job from './job.js';
import { postComment } from './reddit.js';

const fastify = Fastify({
	logger: true,
});

fastify.post(
	'/ingest',
	{
		schema: {
			body: {
				type: 'object',
				properties: {
					msg: { type: 'string' },
				},
			},
		},
	},
	function (request, reply) {
		if (job.isRunning()) return reply.send({ error: 'Job is already running' });

		postComment(request.body.msg);
		reply.send({ msg: 'Job started' });
	}
);

export async function listen() {
	await fastify.listen({ port: Env.HOOK_PORT, host: '0.0.0.0' });
}
