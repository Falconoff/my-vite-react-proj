function Product(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: {props.cost} credits</p>
      {props.children}
    </div>
  );
}

export default Product;
