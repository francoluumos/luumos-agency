// Vercel Edge Middleware — HTTP Basic-auth gate for the whole site.
// Active ONLY when SITE_PASSWORD is set (per scope). Unset → public (launch state).
// See DEPLOY.md §3. Two non-obvious details preserved from the AIRLUXO original:
//   - the matcher MUST exclude _vercel + favicon.ico (else the gate blocks Vercel internals)
//   - the realm string MUST be ASCII-only, or the browser never shows its login dialog.
export const config = {
  matcher: ['/((?!_vercel|favicon.ico).*)'],
}

export default function middleware(request) {
  const password = process.env.SITE_PASSWORD
  if (!password) return // unset → public
  const user = process.env.SITE_USER || 'luumos'
  const expected = 'Basic ' + btoa(`${user}:${password}`)
  if (request.headers.get('authorization') === expected) return
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Luumos private preview", charset="UTF-8"',
    },
  })
}
