import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Demo</title>
      </Head>
      <header>
        <nav className="p-8">
          <ul className="list-disc list-inside">
            <li>
              <Link href="/default-ssr">Default SSR</Link>
            </li>
            <li className="line-through">SSR Lazy</li>
            <li className="line-through">Minimize Payload</li>
            <li>
              <Link href="/client">Client</Link>
            </li>
            <li>
              <Link href="/ssg">SSG</Link>
            </li>
            <li>
              <Link href="/isr">ISR</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
