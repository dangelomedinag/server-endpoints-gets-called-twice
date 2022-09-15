# reproduction sveltekit issues [#6800](https://github.com/sveltejs/kit/issues/6800)

routes/[whatever]/+server.ts
```js
import type { RequestHandler } from './$types';
let counter = 0;

export const GET: RequestHandler = ({ params }) => {
	counter++;
	console.log(params.whatever);
	return new Response(`count: ${counter}`);
};
```



```bash
npm i
npm run dev -- --open
visiti: http://localhost:5173/WHATEVER repeatedly
```

output: 
```bash
count: 1
count: 3
count: 5
count: 7
```
console.log
```bash
WHATEVER
favicon.ico
WHATEVER
favicon.ico
WHATEVER
favicon.ico
WHATEVER
favicon.ico
```

as this [comment](https://github.com/sveltejs/kit/issues/6800#issuecomment-1248064392) suggests, `favicon.ico` is the cause of repeated requests.


---
windows 11 Verison 21h2

Chrome Versión 105.0.5195.102

node v18
