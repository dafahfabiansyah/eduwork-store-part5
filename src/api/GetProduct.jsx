import axios from 'axios';

const FetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3300/api/products');
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API: ', error);
    throw error;
  }
};

export default FetchData;
