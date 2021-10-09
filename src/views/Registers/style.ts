import styled from 'styled-components';

export const Container = styled.div`
  width: 85%;
  margin: auto;
  color: #fff;
  .nav{
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #483c67;
    padding: 2px;
    align-content: center;
    .botaoVoltar{
      background-color: #626483;
      color: red;
      border-radius: 3px;
      box-shadow: 0px 1px;
      
    }
    
    
    
    
  }
  section {
    height: 100vh;
    width: 100%;
    background-color: #201b2d;
    display: flex;
    justify-content: space-around;
    padding: 2px;
    flex-wrap: wrap;
    .cardForm{
      display: flex;
      height: auto;
      width: 50%;
    justify-content: center;
    flex-direction: column;

    }
   .form{
     display: grid;
     flex-wrap: wrap;

   }
   .submitB{
    background-color: #626483;
            color: #78d1e1;
            border-radius: 3px;
            box-shadow: 0px 1px;
            padding: 2px;
            margin-bottom: 10px;
   }
   .inputText{
     margin-bottom: 10px;
      padding: 4px;
      border-radius: 10px;
      box-shadow: 2px 2px;
      border: #78d1e1 ridge;
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
