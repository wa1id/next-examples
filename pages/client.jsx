import { useState, useEffect } from 'react'

export default function Client() {
  const [quote, setQuote] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://api.quotable.io/random')
      .then((res) => res.json())
      .then((data) => {
        setQuote(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!quote) return <p>No quote found</p>

  return (
    <div className="p-4 space-y-3">
      <h1>Client</h1>
      <h2>&quot;{quote.content}&quot;</h2>
      <h3>- {quote.author}</h3>
    </div>
  )
}
