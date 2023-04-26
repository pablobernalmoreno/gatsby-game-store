import React from "react"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { slugify } from "../../utils"

const Card = ({ name, description, image, inStock, price }) => {
  const shortDescription = `${description?.slice(0, 250)}...`

  const slugName = slugify(name)

  return (
    <div
      style={{
        width: "25rem",
        height: "30rem",
        margin: "10px",
        background: "#F1F6F9",
        borderRadius: "10px",
      }}
      onClick={() => {
        navigate(`/${slugName}`)
      }}
    >
      <h2 style={{ margin: 0, color: "#212A3E" }}>{name}</h2>
      <img
        style={{ margin: 0, height: "13rem", width: "100%" }}
        src={image}
        alt={name}
      />
      <h4 style={{ margin: 0, color: "#212A3E" }}>{shortDescription}</h4>
      <p
        style={{
          margin: "1rem 0",
          color: "#212A3E",
          display: "block",
          fontWeight: "bold",
        }}
      >
        Currently in stock: {inStock}
      </p>
      <p
        style={{
          margin: 0,
          color: "#212A3E",
          display: "block",
          fontWeight: "bold",
        }}
      >
        price: {price}
      </p>
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
