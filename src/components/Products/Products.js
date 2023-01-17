import Product from "../Product/Product.js";
import "./Products.css"
function Products() {
    return (
        <section className="Products">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    );
}

export default Products;