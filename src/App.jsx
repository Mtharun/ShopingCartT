import './App.css'
import { useState } from 'react'

function App() {

  const data = [
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnkffqEUiOlfjlnabO8fW1G1voPv6MUJDUg&usqp=CAU",
      productName: "Sketchers",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Fji1OJgAt5m98SYtZ2jAxZm2oPq30RlIrw&usqp=CAU",
      productName: "Nike",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a7WpFDuTCsuSE5rucLX9RJOc8UzelbnsDQ&usqp=CAU",
      productName: "puma",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7wTZZyLxDjCSZevcgBD0awNb8xOvZHFnPg&usqp=CAU",
      productName: "USP",
    }, {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnkffqEUiOlfjlnabO8fW1G1voPv6MUJDUg&usqp=CAU",
      productName: "Sketchers",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Fji1OJgAt5m98SYtZ2jAxZm2oPq30RlIrw&usqp=CAU",
      productName: "Nike",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5a7WpFDuTCsuSE5rucLX9RJOc8UzelbnsDQ&usqp=CAU",
      productName: "puma",
    },
    {
      productImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ7wTZZyLxDjCSZevcgBD0awNb8xOvZHFnPg&usqp=CAU",
      productName: "USP",
    }

  ];

  const [product, setProduct] = useState(data)
  setTimeout(() => {
    setProduct(data)
  }, 1000)
  const [inCart, setCart] = useState(0)
  return (
    <div className='app'>
      <>
      <div className='navBar'> 
        <Navbar
          inCart={inCart} />
          </div>
        <Middlebar />
        <div className='cart-area'>
          {
            product?.map((prod, idx) => (
              <ProductCards key={idx}
                img={prod.productImage}
                name={prod.productName}
                inCart={inCart}
                setCart={setCart} />
            ))
          }</div>
      </>
      <Endbar />
    </div>


  )
}

export default App


// eslint-disable-next-line react/prop-types
function Navbar({ inCart }) {
  return (
<div className='nav-bar'>
      <nav className="container-fluid navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">StartBootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                Shop
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">All Products</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Popular Items</a>
                <a className="dropdown-item" href="#">New Arrivals</a>
              </div>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-outline-dark"><h6><i className="fa fa-shopping-cart" aria-hidden="true"></i> cart <span className="badge badge-secondary">{inCart}</span></h6></button>
      </nav>
      </div>

  )
}

function Middlebar() {
  return (
      <div className="header container-fluid bg-dark text-white  text-center jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4 font-weight-bold">Shop in style</h1>
          <p className="lead">With this shop homepeage template</p>
        </div>
      </div>
  )
}

// eslint-disable-next-line react/prop-types
function ProductCards({ img, name, inCart, setCart }) {
  const [show, setShow] = useState(true)

  const handleAdd = () => {
    //change the stateof the add button
    setShow(!show),
      setCart(inCart + 1);
  }

  const handleRemove = () => {
    //change the state of remeove
    setShow(!show)
    setCart(inCart - 1);
  }
  return (
      <div className="card" >
        <img src={img} className="card-img-top" alt='no data' />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the content.</p>
          {
            show === true ? <button type="button" onClick={handleAdd} className="btn btn-outline-dark">Add to Cart</button> :
              <button type="button" onClick={handleRemove} className="btn btn-outline-dark">Remove from Cart</button>
          }
        </div>
      </div>
  )
}

function Endbar() {
  return (
      <footer className="container-fluid bg-dark text-center text-white">

        <div className="box text-center p-3">
        <h5>Copyright © Your Website 2023</h5>
        </div>
      </footer>
  )
}