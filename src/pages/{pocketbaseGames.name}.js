import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { CommentCard } from "../components/cards/CommentCard"
import PocketBase from "pocketbase"
import { FullStarIcon, StarIcon } from "../components/icons/starIcon"

const pb = new PocketBase("http://127.0.0.1:8090")

const GameTemplate = ({ data }) => {
  const [userComments, setUserComments] = useState({
    userComment: "",
    userRating: 1,
    user: "",
    posted: false,
  })

  const {
    pocketbaseGames: {
      name,
      description,
      image,
      inStock,
      price,
      tags,
      comments,
      pocketbase_id,
    },
  } = data

  const updatedCommentData = {
    name: name,
    description: description,
    price: price,
    inStock: inStock,
    image: image,
    tags: tags,
    comments: [
      ...comments,
      {
        comment: userComments.userComment,
        rating: userComments.userRating,
        user: userComments.user,
      },
    ],
  }

  const handlePost = async data => {
    await pb.collection("games").update(pocketbase_id, data)
    setUserComments({ ...userComments, posted: true })
  }

  const handleChange = e => {
    setUserComments({ ...userComments, [e.target.id]: e.target.value })
  }

  const handleRating = rating => {
    setUserComments({ ...userComments, userRating: rating })
  }

  return (
    <Layout>
      <h1 className="game-page__title">{name}</h1>
      <section className="game-page__container">
        <img className="game-page__image" src={image} alt={name} />
        <section className="game-page__info__container">
          <h3 className="game-page__description">{description}</h3>
          <article className="game-page__inventory">
            <section>
              <p className="game-page__price">Current price: ${price}</p>
              <p className="game-page__stock">Currently in stock: {inStock}</p>
            </section>
            <section className="game-page__tags">
              {tags?.map(tag => {
                return <span className="game-page__tag">{tag}</span>
              })}
            </section>
          </article>
        </section>
      </section>
      <article className="game-page__comments">
        <article>
          {comments?.map(comment => {
            return (
              <CommentCard
                comment={comment.comment}
                rating={comment.rating}
                user={comment.user}
              />
            )
          })}
        </article>
        <section className="game-page__comments-form">
          {userComments.posted ? (
            <h2 className="game-page__comments-title">
              Thanks for the comment!
            </h2>
          ) : (
            <>
              <h2 className="game-page__comments-title">
                Please leave your comment!
              </h2>
              <section>
                <button
                  className="game-page__user-rating"
                  onClick={() => handleRating(1)}
                >
                  {userComments.userRating >= 1 ? (
                    <FullStarIcon />
                  ) : (
                    <StarIcon />
                  )}
                </button>
                <button
                  className="game-page__user-rating"
                  onClick={() => handleRating(2)}
                >
                  {userComments.userRating >= 2 ? (
                    <FullStarIcon />
                  ) : (
                    <StarIcon />
                  )}
                </button>
                <button
                  className="game-page__user-rating"
                  onClick={() => handleRating(3)}
                >
                  {userComments.userRating >= 3 ? (
                    <FullStarIcon />
                  ) : (
                    <StarIcon />
                  )}
                </button>
                <button
                  className="game-page__user-rating"
                  onClick={() => handleRating(4)}
                >
                  {userComments.userRating >= 4 ? (
                    <FullStarIcon />
                  ) : (
                    <StarIcon />
                  )}
                </button>
                <button
                  className="game-page__user-rating"
                  onClick={() => handleRating(5)}
                >
                  {userComments.userRating >= 5 ? (
                    <FullStarIcon />
                  ) : (
                    <StarIcon />
                  )}
                </button>
              </section>
              <input
                id="user"
                placeholder="Your name"
                className="game-page__user-comment"
                onChange={handleChange}
              />
              <textarea
                id="userComment"
                placeholder="Your comment"
                className="game-page__user-comment"
                onChange={handleChange}
              />
              <button
                className="game-page__user-comment__submit-button"
                onClick={() => handlePost(updatedCommentData)}
              >
                submit
              </button>
            </>
          )}
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSingleGame($name: String) {
    pocketbaseGames(name: { eq: $name }) {
      pocketbase_id
      name
      description
      inStock
      price
      tags
      image
      comments {
        comment
        rating
        user
      }
    }
  }
`

export default GameTemplate
