import React from "react";

function Article({ title, date, preview }) {
  // Set a default date value if date is not provided
  const formattedDate = date ? new Date(date).toLocaleDateString() : "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
