export const dynamic = 'force-static'

const APP_ADS_TXT = `google.com, pub-7881218553410999, DIRECT, f08c47fec0942fa0
`

export function GET() {
  return new Response(APP_ADS_TXT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
