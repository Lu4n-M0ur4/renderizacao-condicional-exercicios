import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaCadastroEndereco(props) {
  const { mudarTela } = props;

  const cadastrar = () => {
    console.log({ endereco, numero, complemento, telefone });
    mudarTela("TelaPrincipal");
  };

  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleChangeEndereco = (e) => setEndereco(e.target.value);
  const handleChangeNumero = (e) => setNumero(e.target.value);
  const handleChangeComplemento = (e) => setComplemento(e.target.value);
  const handleChangeTelefone = (e) => setTelefone(e.target.value);

  return (
    <FormContainer>
      <h1>Cadastro Endereço </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Endereço:
          <Input
            id="Endereço"
            value={endereco}
            onChange={handleChangeEndereco}
          />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Numero:
          <Input 
            id="Numero" 
            value={numero} 
            onChange={handleChangeNumero} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Complemento:
          <Input
            id="complemento"
            value={complemento}
            onChange={handleChangeComplemento}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Telefone:
          <Input
            id="telefone"
            value={telefone}
            onChange={handleChangeTelefone}
          />
        </StyledLabel>

        <SendButton
          onClick={
            endereco.length &&
            numero.length &&
            complemento.length &&
            telefone.length
              ? cadastrar
              : () => alert("Preencha os campos abaixo")
          }
        >
          Confirmar
        </SendButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
