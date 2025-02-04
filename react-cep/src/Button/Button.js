import React, { useState } from "react";
import ViaCepService from "../Api/ViaCepService";
import "./Button.css";

const Button = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false); // Estado para controlar a mensagem

  const handleClick = async () => {
    try {
      setError(null);
      setSuccessMessage(false); // Reseta a mensagem antes de buscar o CEP
      const addressData = await ViaCepService.getAddressByCep(props.cep);
      setData(addressData); // Define os dados da API
      setSuccessMessage(true); // Define o estado para mostrar a mensagem de sucesso
      console.log(addressData);
    } catch (err) {
      setError(err.message);
      setData(null);
      setSuccessMessage(false); // Reseta a mensagem em caso de erro
    }
  };

  return (
    <div>
      <button className="button" onClick={handleClick}>
        {props.children}
      </button>
      {error && <p style={{ color: "red" }}>Erro: {error}</p>}
      {data && (
        <div>
          <p>
            <strong>Rua:</strong> {data.logradouro}
          </p>
          <p>
            <strong>Bairro:</strong> {data.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {data.localidade}
          </p>
          <p>
            <strong>Estado:</strong> {data.uf}
          </p>
        </div>
      )}
    </div>
  );
};

export default Button;
