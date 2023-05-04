import React from "react";

// Routing
import { Link } from "react-router-dom";

const BlogCard = ({ image, date, title }) => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img className="img-fluid" src={image} alt="blog preview" />
        </div>

        <div className="blog-content">
          <span className="date">{date} </span>
          <h5 className="title">{title}</h5>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link className="button" to="/">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
