import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const GameTemplate = ({ data }) => {
  const {
    pocketbaseGames: {
      name,
      description,
      image,
      comments,
      inStock,
      price,
      tags,
    },
  } = data

  return (
    <Layout>
      <h1 style={{ color: "#9BA4B5" }}>{name}</h1>
      <section style={{ display: "flex" }}>
        <img
          src={image}
          alt={name}
          style={{ width: "50rem", height: "30rem" }}
        />
        <section style={{ display: "flex", flexDirection: "column" }}>
          <h3 style={{ margin: "2rem", color: "#9BA4B5" }}>{description}</h3>
          <p
            style={{ margin: "1rem 2rem", fontSize: "24px", color: "#F1F6F9" }}
          >
            Current price: ${price}
          </p>
          <p
            style={{ margin: "1rem 2rem", fontSize: "24px", color: "#F1F6F9" }}
          >
            Currently in stock: {inStock}
          </p>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleGame($name: String) {
    pocketbaseGames(name: { eq: $name }) {
      id
      name
      comments
      description
      inStock
      price
      tags
      image
    }
  }
`

export default GameTemplate
