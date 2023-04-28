import React, { useState } from "react"
import { slugify } from "../../utils"
import { navigate } from "gatsby"

export const SearchGames = () => {
  const [name, setName] = useState("")

  const handleChange = e => {
    setName(slugify(e.target.value))
  }

  return (
    <article className="search-input__container">
      <h1 className="search-input__title">Look around our games!</h1>
      <section>
        <input className="search-input" onChange={handleChange} />
        <button
          className="search-button"
          onClick={() => {
            navigate(`/${name}`)
          }}
        >
          Search
        </button>
      </section>
    </article>
  )
}
