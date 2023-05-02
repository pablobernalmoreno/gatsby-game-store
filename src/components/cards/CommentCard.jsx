import React from "react"
import { FullStarIcon, StarIcon } from "../icons/starIcon"

export const CommentCard = ({ comment, rating, user }) => {
  const MAX_STARS = 5
  const STARS = []

  for (let i = 1; i <= MAX_STARS; i++) {
    STARS.push(i)
  }

  return (
    <section className="comment-card">
      <h4 className="comment-title">
        Rating of:
        {STARS.map(star => (rating >= star ? <FullStarIcon /> : <StarIcon />))}
      </h4>
      {comment}

      {user}
    </section>
  )
}
