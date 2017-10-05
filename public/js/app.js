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
      </div>
    );
  }
}

class AddToCartButton extends React.Component {
  render() {
    return (
      <button>Add to Cart</button>
    );
  }
}

class Cart extends React.Component {
  render() {
    return (
      <div>
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

}

ReactDOM.render(<Store />, document.getElementById('content'));
