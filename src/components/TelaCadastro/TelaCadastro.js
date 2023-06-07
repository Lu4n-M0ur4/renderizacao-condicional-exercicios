import { useState } from "react";
import {
  Form,
  FormContainer,
  Input,
  StyledLabel,
  SendButton,
  BackToLoginButton,
} from "./styled";





function TelaCadastro(props) {
  const cadastrar = () => {
    console.log({nome,email,senha,confirmarSenha})
    props.mudarTela("TelaCadastroEndereco");
  };

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin");
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleChangeNome = (e) => setNome(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeSenha = (e) => setSenha(e.target.value);
  const handleChangeConfirmarSenha = (e) => setConfirmarSenha(e.target.value);

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" value={nome} onChange={handleChangeNome} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto"  value={email} onChange={handleChangeEmail}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" value={senha} onChange={handleChangeSenha} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" value={confirmarSenha} onChange={handleChangeConfirmarSenha} />
        </StyledLabel>

        <SendButton onClick={   nome.length &&
            email.length &&
            senha.length &&
            confirmarSenha.length
              ? cadastrar
              : () => alert("Preencha os campos abaixo")}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>
          Já possuo cadastro
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
