import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "./rating";

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded ">
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title>
            <b>{product.name}</b>
          </Card.Title>
        </a>

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
