import axios from "axios"

const BASE_URL = "https://viacep.com.br/ws/";

const ViaCepService = { 
  getAddressByCep: async (cep) => {
    try {
      const response = await axios.get(`${BASE_URL}${cep}/json/`);
      if (response.data.erro) {
        throw new Error("CEP não encontrado.");
      }
      return response.data;
    } catch (error) {
      throw error; 
    }
  },
}

export default ViaCepService; 