import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { slugify } from "../../utils"

const Card = ({ name, description, image, inStock, price }) => {
  const shortDescription = `${description?.slice(0, 250)}...`

  const slugName = slugify(name)

  return (
    <section
      className="card-container"
      onClick={() => {
        navigate(`/${slugName}`)
      }}
    >
      <h2 className="card-title">{name}</h2>
      <img className="card-image" src={image} alt={name} />
      <h4 className="card-description">{shortDescription}</h4>
      <p className="card-stock">Currently in stock: {inStock}</p>
      <p className="card-price">price: {price}</p>
    </section>
  )
}

const CardsContainer = () => {
  const {
    allPocketbaseGames: { edges },
  } = useStaticQuery(graphql`
    query {
      allPocketbaseGames {
        edges {
          node {
            id
            description
            image
            inStock
            name
            price
          }
        }
      }
    }
  `)

  return (
    <article className="cards-container">
      {edges.map(edge => (
        <Card
          name={edge.node.name}
          description={edge.node.description}
          image={edge.node.image}
          inStock={edge.node.inStock}
          price={edge.node.price}
        />
      ))}
    </article>
  )
}

export default CardsContainer
