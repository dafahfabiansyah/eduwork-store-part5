import axios from 'axios';

const GetAddress = async () => {
  try {
    const response = await axios.get('http://localhost:3300/address');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    throw error;
  }
};

export default GetAddress;
