export default function Isr({ content, author }) {
  return (
    <div className="p-4 space-y-3">
      <h1>ISR</h1>
      <h2>&quot;{content}&quot;</h2>
      <h3>- {author}</h3>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://api.quotable.io/random')
  const { content, author } = await response.json()
  return { props: { content, author }, revalidate: 10 }
}
