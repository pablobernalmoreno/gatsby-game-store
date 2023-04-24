import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Card = ({ name, description, image, inStock, price }) => {
  const shortDescription = `${description?.slice(0, 250)}...`
  return (
    <div
      style={{
        width: "25rem",
        height: "30rem",
        margin: "10px",
        background: "#F1F6F9",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ margin: 0 }}>{name}</h2>
      <img
        style={{ margin: 0, height: "13rem", width: "100%" }}
        src={image}
        alt={name}
      />
      <h4 style={{ margin: 0 }}>{shortDescription}</h4>
      <p style={{ margin: 0 }}>Currently in stock: {inStock}</p>
      <p style={{ margin: 0 }}>Price: {price}</p>
    </div>
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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {edges.map(edge => (
        <Card
          name={edge.node.name}
          description={edge.node.description}
          image={edge.node.image}
          inStock={edge.node.inStock}
          price={edge.node.price}
        />
      ))}
    </div>
  )
}

export default CardsContainer
