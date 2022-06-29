import axios from 'axios';

export const convertValue = async (
  have: string,
  want: string,
  amount: number
) => {
  const options = {
    method: 'GET',
    url: 'https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',
    params: { have, want, amount },
    headers: {
      'X-RapidAPI-Key': '515e2d16a4msh41841740c8c618ap1c187fjsn011600a17ce9',
      'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com',
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
