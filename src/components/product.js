import React from "react";
import {Link} from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Rating from "./rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded ">
      <Link to={`/product/${product._id}`} >
        <Card.Img variant="top" src={product.image} />
      </Link>

      <Card.Body>
      <Link to={`/product/${product._id}`} >
          <Card.Title>
            <b>{product.name}</b>
          </Card.Title>
        </Link>

        <Card.Text>
          <Rating value={product.rating} text={product.numReviews + ' reviews'} />
        </Card.Text>

        <Card.Text as='div' >
            <h4>${product.price}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
