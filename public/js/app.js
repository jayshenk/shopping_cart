class Store extends React.Component {
  state = {
    products: [
      {
        "id": 1,
        "title": "iPad 4 Mini",
        "price": 500.01,
        "inventory": 2,
      },
      {
        "id": 2,
        "title": "H&M T-Shirt White",
        "price": 10.99,
        "inventory": 10,
      },
      {
        "id": 3,
        "title": "Charli XCX - Sucker CD",
        "price": 19.99,
        "inventory": 5,
      }
    ],
    productsInCart: [],
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} />
        <Cart productsInCart={this.state.productsInCart}/>
      </div>
    );
  }
}

class ProductList extends React.Component {
  render() {
    const products = this.props.products.map((product) => (
      <Product
        id={product.id}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
      />
    ));

    return (
      <div>
        <h2>Products</h2>
        {products}
      </div>
    );
  }
}

class Product extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <span> - </span>
        <span>{this.props.price}</span>
        <span> x </span>
        <span>{this.props.inventory}</span>
        <AddToCartButton inventory={this.props.inventory} />
        <hr/>
      </div>
    );
  }
}

class AddToCartButton extends React.Component {
  render() {
    if (this.props.inventory > 0) {
      return (
        <div>
          <button>Add to Cart</button>
        </div>
      );
    } else {
      return (
        <div>
          <button disabled={true}>Sold Out</button>
        </div>
      );
    }
  }
}

class Cart extends React.Component {
  getTotal = (productsInCart) => (
    productsInCart.reduce((acc, product) => (
      acc += product.inventory * product.price
    ), 0);
  );

  render() {

    return (
      <div>
        <h2>Cart</h2>
        <CartList productsInCart={this.props.productsInCart} />
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
