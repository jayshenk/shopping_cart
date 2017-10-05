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
    productsInCart: [
      {
        "id": 3,
        "title": "Charli XCX - Sucker CD",
        "price": 19.99,
        "inventory": 3,
      }
    ]
  }

  handleAddToCart = (id) => (
    this.addToCart(id)
  );

  addToCart = (id) => (
    this.setState({
      products: this.state.products.map((product) => {
        if (product.id === id) {
          return Object.assign({}, product, {
            inventory: product.inventory - 1
          });
        } else {
          return product;
        }
      }),
      productsInCart: this.state.productsInCart.map((product) => {
        if (product.id === id) {
          return Object.assign({}, product, {
            inventory: product.inventory + 1
          });
        } else {
          return product;
        }
      }),
    })
  );

  render() {
    return (
      <div>
        <ProductList
          products={this.state.products}
          addToCart={this.handleAddToCart}
        />
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
        key={product.id}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
        addToCart={this.props.addToCart}
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
        <AddToCartButton
          id={this.props.id}
          inventory={this.props.inventory}
          addToCart={this.props.addToCart}
        />
        <hr/>
      </div>
    );
  }
}

class AddToCartButton extends React.Component {
  handleAddToCart = () => (
    this.props.addToCart(this.props.id)
  )

  render() {
    if (this.props.inventory > 0) {
      return (
        <div>
          <button onClick={this.handleAddToCart}>Add to Cart</button>
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
  getTotal = () => (
    this.props.productsInCart.reduce((acc, product) => (
      acc += product.inventory * product.price
    ), 0)
  );

  render() {
    const total = this.getTotal();
    return (
      <div>
        <h2>Cart</h2>
        <CartList productsInCart={this.props.productsInCart} />
        <CartTotal total={total}/>
        <CartCheckout />
      </div>
    );
  }
}

class CartList extends React.Component {
  render() {
    const cartItems = this.props.productsInCart.map((product) => (
      <CartItem
        id={product.id}
        key={product.id}
        title={product.title}
        price={product.price}
        inventory={product.inventory}
      />
    ));

    return (
      <div>
        {cartItems}
      </div>
    );
  }
}

class CartItem extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <span> - </span>
        <span>{this.props.price}</span>
        <span> x </span>
        <span>{this.props.inventory}</span>
      </div>
    );
  }
}

class CartTotal extends React.Component {
  render() {
    return (
      <div>
        <span>Total: {this.props.total}</span>
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
