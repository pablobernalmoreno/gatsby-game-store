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
      <h1 className="game-page__title">{name}</h1>
      <section className="game-page__container">
        <img className="game-page__image" src={image} alt={name} />
        <section className="game-page__info__container">
          <h3 className="game-page__description">{description}</h3>
          <p className="game-page__price">Current price: ${price}</p>
          <p className="game-page__stock">Currently in stock: {inStock}</p>
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
