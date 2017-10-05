class Store extends React.Component {
  state = {
    products: Seed.products,
    productsInCart: [],
  }

  handleAddToCart = (id) => (
    this.updateInventoryQuantities(id)
  )

  handleCheckout = () => {
    this.emptyCart();
  }

  updateInventoryQuantities = (id) => {
    this.setState({
      products: this.updatedProductInventories(id),
      productsInCart: this.updatedProductInCartInventories(id),
    })
  }

  updatedProductInventories = (id) => (
    this.state.products.map((product) => {
      if (product.id === id) {
        return Object.assign({}, product, {
          inventory: product.inventory - 1
        });
      } else {
        return product;
      }
    })
  )

  updatedProductInCartInventories = (id) => {
    let freshCart = [...this.state.productsInCart]

    if (!this.isProductInCart(id)) {
      const productToAdd = Object.assign({}, this.findProductById(id), {inventory: 0});
      freshCart = freshCart.concat(productToAdd);
    }

    return freshCart.map((product) => {
      if (product.id === id) {
        return Object.assign({}, product, {
          inventory: product.inventory + 1
        });
      } else {
        return product;
      }
    })
  }

  isProductInCart = (id) => (
    this.state.productsInCart.some((product) => (product.id === id))
  )

  findProductById = (id) => (
    this.state.products.find((product) => (product.id === id))
  )

  emptyCart = () => {
    this.setState({
      productsInCart: [],
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <ProductList
          products={this.state.products}
          addToCart={this.handleAddToCart}
        />
        <Cart
          productsInCart={this.state.productsInCart}
          handleCheckout={this.handleCheckout}
        />
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
    ), 0).toFixed(2)
  );

  render() {
    const total = this.getTotal();
    return (
      <div>
        <h2>Cart</h2>
        <CartList productsInCart={this.props.productsInCart} />
        <CartTotal total={total}/>
        <CartCheckout handleCheckout={this.props.handleCheckout} />
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
      <button onClick={this.props.handleCheckout}>Checkout</button>
    );
  }
}

ReactDOM.render(<Store />, document.getElementById('content'));
