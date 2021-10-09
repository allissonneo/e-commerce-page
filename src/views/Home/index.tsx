import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { Container, ProdsContainer } from './style';
import api from '../../services/api';
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
  const history = useHistory();

  useEffect(() => {
    api.get('').then(response => {
      setData(response.data)
    })
  }, [])
  useEffect(() => {
    localStorage.setItem(`@cart`, JSON.stringify(cart));
  }, [cart]);

  const handleCart = (index: number) => {
    let product = data[index];
    setCart(cart => [...cart, product]);
  }

  function emptyCart() {
    if (cart.length < 1) { return (window.alert("Insira Algo No Carrinho")) }else{
      history.push('/register')
    }
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
          <div className="botaoCompra" >

            <button className="bot" onClick={() => emptyCart()}>Finalizar Compra</button>
          </div>
        </div>
      </div>
      <section>

        <ProdsContainer>
        {data.map((prod, index) => (
          <div className="product-content" key={prod.id}>
            <img src={prod.photo} alt="mouse" width="200" height="auto" />
            <h4>{prod.name}</h4>
            <span>{prod.description}</span>
            <h6>R${prod.price}</h6>
            <button className="botao" onClick={() => handleCart(index)}>Adicionar ao Carrinho</button>
          </div>
        ))}
        </ProdsContainer>
      </section>
      <footer>
                &copy;  Allisson Néo
                <div>

                <a href= "https://github.com/allissonneo">
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="25px" height="auto" alt='git'/>
                </a>
                <a  href="https://www.linkedin.com/in/allisson-neo/" >

                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" width="25px" height="auto" alt='linkedin'/>
                </a>
                </div>

            </footer>
    </Container >
  );
}

export default Home;