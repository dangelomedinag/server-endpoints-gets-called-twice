import type { RequestHandler } from './$types';
let counter = 0;

export const GET: RequestHandler = ({ params }) => {
	counter++;
	console.log(params.whatever);
	return new Response(`count: ${counter}`);
};
