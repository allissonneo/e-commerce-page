import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import logo from './../../assets/logo.png';

import { Container } from './style';

const Register: React.FC = () => {
    const history = useHistory();
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        age: '',
        phoneNumber: '',
        address: '',
        number: '',
        city: '',
        state: ''
    });
   
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    function backButton() {
        localStorage.clear();
        history.push('/');
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (formValues.name !== "") {            
           const formData: any = new FormData(e.target);
           const data = Object.fromEntries(formData);
           localStorage.setItem('@cliente',JSON.stringify(data)) 
           window.alert('Cadastro Efetuado!\n\nClique no botão "Voltar para Home"')    
        }else window.alert('Por Favor Insira Seus Dados!');
        
        // window.confirm("Cadastrado com sucesso!\n\nDeseja voltar para o início?")?history.push('/'):history.push('/register');
    }


    return (
        <Container>
            <div className="nav">
                <div>
                    <img src={logo} alt="gamezone" width="200px" height="auto" />
                </div>

                <div className="Voltar">

                    <button type="button" className="botaoVoltar" onClick={() => backButton()}>Voltar para Home</button>
                </div>
            </div>

            <section>
                <div className="cardForm" >
                    <form className="form" onSubmit={handleSubmit}>

                        <label >
                            Nome:
                        </label>
                        <input className="inputText" type="text" name="name" onChange={handleInputChange} value={formValues.name}/>
                        <label >
                            Email:
                        </label>
                        <input className="inputText" type="email" onChange={handleInputChange} name="email" value={formValues.email} />
                        <label>
                            Data de Nascimento:
                        </label>
                        <input className="inputText" type="date" onChange={handleInputChange} name="age" value={formValues.age}/>
                        <label>
                            Telefone:
                        </label>
                        <input className="inputText" type="text" placeholder="(xx)x xxxx-xxxx" onChange={handleInputChange} name="phoneNumber" value={formValues.phoneNumber}/>
                        <label>
                            Nome da rua:
                        </label>
                        <input className="inputText" type="text" onChange={handleInputChange} name="address" value={formValues.address}/>
                        <label>
                            Número:
                        </label>
                        <input className="inputText" type="text" onChange={handleInputChange} name="number" value={formValues.number} />
                        <label >
                            Cidade:
                        </label>
                        <input className="inputText" type="text" onChange={handleInputChange} name="city" value={formValues.city}/>
                        <label >
                            Estado:
                        </label>
                        <input className="inputText" type="text" onChange={handleInputChange} name="state" value={formValues.state} />
                        <input className="submitB" type="submit" value="Enviar" />
                    </form>
                </div>
            </section>
            <footer>
                &copy;  Allisson Néo
                <div>

                <a href= "https://github.com/allissonneo">
                <img src="https://image.flaticon.com/icons/png/512/25/25231.png" width="25px" height="auto" alt='git' />
                </a>
                <a  href="https://www.linkedin.com/in/allisson-neo/" >

                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" width="25px" height="auto" alt='linkedin' />
                </a>
                </div>

            </footer>
        </Container>
       
    )
}
export default Register;

