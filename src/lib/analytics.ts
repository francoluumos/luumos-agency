// Product analytics — only ever started after the visitor grants consent
// (see CookieConsent + lib/consent). PostHog is not wired yet; this is the
// single place to enable it when ready:
//
//   1. npm i posthog-js
//   2. set VITE_POSTHOG_KEY in the Vercel env (Preview + Production)
//   3. uncomment the block below (EU host is mandatory per our privacy policy)
//
// Keeping the import commented avoids bundling/build errors until the dep exists.

let started = false

export async function enableAnalytics(): Promise<void> {
  if (started) return
  started = true

  // const key = import.meta.env.VITE_POSTHOG_KEY
  // if (!key) return
  // const { default: posthog } = await import('posthog-js')
  // posthog.init(key, {
  //   api_host: 'https://eu.i.posthog.com', // EU hosting — required
  //   person_profiles: 'identified_only',
  //   capture_pageview: true,
  // })
}
