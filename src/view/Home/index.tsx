import React, { useEffect, useState } from 'react';
import { Container } from './style';
import api from './../../services/api';
import logo from './../../assets/logo.png';
import Cart from './../../assets/cart.png';
interface IProduct {
  id: number;
  photo: string;
  name: string;
  description: string;
  price: number;
}


const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('').then(response => {
      setData(response.data)
    })
  }, [])

  const handleCart = (index: number, name: string, price: number) => {
    let product = data[index];
    let push: any = [...cart, cart.push(product)];
    setCart(push)
    const productStore = JSON.stringify(cart);
    localStorage.setItem('@cart', productStore)
  }

  return (
    <Container>
      <div className="nav">
        <div>
          <img src={logo} alt="gamezone" width="200px" height="auto" />
        </div>
        <div className="InicioCompra">

        <div className="cartItens">
          <img src={Cart} alt="cartIcon" width="30px" height="auto" />
          <p>
            <span>
              {cart.length} - itens no carrinho
            </span>

          </p>
          
          </div>
          <div className="botaCompra" >

          <button className = "bot">Efetuar Compra</button>
        </div>
        </div>
      </div>
      <section>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="mouse" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R${prod.price}</h6>
            <button className="botao" onClick={() => handleCart(index, '', 0 )}>Adicionar ao Carrinho</button>
          </div>
        ))}
      </section>

    </Container >
  );
}

export default Home;