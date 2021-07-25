import styled from 'styled-components';

export const Container = styled.div`
width:85%;
margin: auto;

.nav{
    width:100%;
    display: flex;
    align-items: bottom;
    justify-content: space-between;
    background-color: #483c67;
    padding: 2px;
    
    
    .InicioCompra{
        display: flex;
        align-content: space-around;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        .cartItens{   
            display: flex;
            color: #78d1e1;
            flex-wrap: wrap;
            align-content: flex-end;
            align-items: baseline;
            
        }
        .botaoCompra{
            display: flex;
        }
        .bot{
            background-color: #626483;
            color: #78d1e1;
            border-radius: 3px;
            box-shadow: 0px 1px;
            /* width:100%; */
        }
    }
}
section {
        
    height: 100%;
    width: 100%;
    background-color: #201b2d;
    display: flex;
    justify-content: space-around;
    padding: 2px;
    flex-wrap: wrap;
   
  
    .botao{
        background-color: #626483;
        color: #eb9e64;
     
    }

    .product-content {
        display: grid;
        text-align: center;
        height: 300px;
        background: #e1e1e6;
        border-radius: 12px;
        padding: 12px;
        margin: 4px;

    }
}
footer{
    width:100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    background-color: #483c67;
    padding: 2px;
    align-content: center;
    align-items: center;
  }
`;