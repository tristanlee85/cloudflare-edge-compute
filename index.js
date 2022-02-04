addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  let url = new URL(request.url);

  for (let i = 1; i < 1001; i++) {
    const route = `/test/${i}`;

    if (url.pathname == route) {
      return new Response(`route /test/${i}`, {
        status: 200,
        headers: new Headers({ 'Content-Type': 'text/html; charset=utf-8' }),
      });
    }
  }
  
  return new Response('Hello worker!', {
    headers: { 'content-type': 'text/plain' },
  })
}
