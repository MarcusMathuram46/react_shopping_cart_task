import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';


const App = () => {
  const [cart, setCart] = useState([]);
  
  // Sample product data
  const products = [
    { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', description: 'Elegant Luxury' },
    { id: 2, name: 'Special Item', price: '$20.00 $18.00', description: 'Unique Offer' },
    { id: 3, name: 'Sale Item', price: '$50.00 $25.00', description: 'Discounted Price' },
    { id: 4, name: 'Popular Item', price: '$40.00', description: 'High Demand' },
    { id: 5, name: 'Sale Item', price: '$50.00 $25.00', description: 'Discounted Price' },
    { id: 6, name: 'Fancy Product', price: '$120.00 - $280.00', description: 'Elegant Luxury' },
    { id: 7, name: 'Special Item', price: '$20.00 $18.00', description: 'Unique Offer' },
    { id: 8, name: 'Popular Item', price: '$40.00', description: 'High Demand' },
  ];

  // Function to add item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from the cart
  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#!">All Products</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                  <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
        {/* Header */}
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
                </div>
            </div>
        </header>
  {/* Shopping Cards */}
  <section>
    <div className="shopping-cards">
          {/* First row */}
          <div className="row">
            {products.slice(0, 4).map(product => (
              <div key={product.id} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p className="img-size">450 x 300</p>
                    <h5 className="card-title">{product.name}</h5>
                    {product.name === 'Special Item' || product.name === 'Popular Item' ? (
                      <div className="star-rating">⭐⭐⭐⭐⭐</div>
                    ) : null}
                    <p className="card-price">{product.price}</p>
                    <p className="card-text">{product.description}</p>
                    {cart.find(item => item.id === product.id) ? (
                      <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Second row */}
          <div className="row">
            {products.slice(4).map(product => (
              <div key={product.id} className="col-md-3">
                <div className="card">
                  <div className="card-body">
                    <p className="img-size">450 x 300</p>
                    <h5 className="card-title">{product.name}</h5>
                    {product.name === 'Special Item' || product.name === 'Popular Item' ? (
                      <div className="star-rating">⭐⭐⭐⭐⭐</div>
                    ) : null}
                    <p className="card-price">{product.price}</p>
                    <p className="card-text">{product.description}</p>
                    {cart.find(item => item.id === product.id) ? (
                      <button className="btn btn-danger" onClick={() => removeFromCart(product)}>Remove from Cart</button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>

    {/* Footer */}
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        
        <script src="js/scripts.js"></script>
    </div>
  );
}

export default App;