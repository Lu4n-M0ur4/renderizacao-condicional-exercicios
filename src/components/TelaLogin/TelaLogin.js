import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from "./styled";
import { useState } from "react";



function TelaLogin(props) {
  const {mudarTela} = props;
  
  const login = () => {
   console.log({email,senha})
   mudarTela("TelaPrincipal")

  };

  const mostrarTelaCadastro = () => {
    
    
    
  mudarTela("TelaCadastro");
  };


  const [email, setEmail] =useState("")
  const [senha, setSenha] =useState('')
  
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeSenha = (e) => setSenha(e.target.value);


  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>
          E-mail:
          <Input value ={email} onChange={handleChangeEmail}/>
        </StyledLabel>

        <StyledLabel>
          Senha:
          <Input type={"password"} value ={senha} onChange={handleChangeSenha}/>
        </StyledLabel>

        <SendButton onClick={email.length && senha.length ? login: () => alert('Preencha os campos')}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
