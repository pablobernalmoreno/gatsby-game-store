import React, { useState } from "react"
import { slugify } from "../../utils"
import { navigate } from "gatsby"

export const SearchGames = () => {
  const [name, setName] = useState("")

  const handleChange = e => {
    setName(slugify(e.target.value))
  }

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#F1F6F9", margin: 0, fontSize: "48px" }}>
        Look around our games!
      </h1>
      <section>
        <input
          style={{
            margin: "8px 0 0",
            fontSize: "24px",
            borderRadius: "5px",
            border: "none",
          }}
          onChange={handleChange}
        />
        <button
          style={{
            fontSize: "24px",
            borderRadius: "5px",
            backgroundColor: "#F1F6F9",
            color: "#212A3E",
            borderColor: "#212A3E",
          }}
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
