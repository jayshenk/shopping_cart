class Store extends React.Component {
  render() {
    return (
      <div>
        <ProductList />
        <Cart />
      </div>
    );
  }
}

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <h2>Products</h2>
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <span>iPad 4 Mini</span>
        <span> - </span>
        <span>$500.01</span>
        <span> x </span>
        <span>2</span>
        <AddToCartButton />
        <hr/>
      </div>
    );
  }
}

class AddToCartButton extends React.Component {
  render() {
    return (
      <div>
        <button>Add to Cart</button>
      </div>
    );
  }
}

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h2>Cart</h2>
        <CartList />
        <CartTotal />
        <CartCheckout />
      </div>
    );
  }
}

class CartList extends React.Component {
  render() {
    return (
      <div>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <div>
        <span>iPad 4 Mini</span>
        <span> - </span>
        <span>$500.01</span>
        <span> x </span>
        <span>2</span>
      </div>
    );
  }
}

class CartTotal extends React.Component {
  render() {
    return (
      <div>
        <span>Total: $1000</span>
      </div>
    );
  }
}

class CartCheckout extends React.Component {
  render() {
    return (
      <button>Checkout</button>
    );
  }
}

ReactDOM.render(<Store />, document.getElementById('content'));
