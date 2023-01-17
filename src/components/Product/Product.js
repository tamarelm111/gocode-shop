import "./Product.css"
function Product() {
    return (
        <div className="Product-card">
        <div className="Product-image">
          <img alt="img" src="https://cdn.shopify.com/s/files/1/0938/8938/products/10231100205_1_1315x1800_300_CMYK_1024x1024.jpeg?v=1445623369"
          />
        </div>
        <div className="Product-info">
          <h5>Winter Jacket</h5>
          <h6>$99.99</h6>
        </div>
      </div>
    );
  }
  
  export default Product;