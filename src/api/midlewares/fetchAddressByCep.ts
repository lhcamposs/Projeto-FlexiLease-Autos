import axios from 'axios';

async function fetchAddresByCep(cep) {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    const addressData = response.data;

    const userAddress = {
      cep: addressData.cep,
      street: addressData.logradouro,
      neighborhood: addressData.bairro,
      city: addressData.localidade,
      uf: addressData.uf,
    };

    return userAddress;
  } catch (error) {
    throw new Error('Erro ao consultar CEP: ', error);
  }
}

export default fetchAddresByCep;
