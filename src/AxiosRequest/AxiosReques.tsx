

import axios, { AxiosResponse, AxiosError } from 'axios';

// Define a type for the data you expect to receive
interface UserData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Example function to fetch data using Axios
const fetchData = async (url: string) => {
  try {
    // Make a GET request
    const response: AxiosResponse<UserData[]> = await axios.get(url);

    // Access the data
    const data = response.data;
    return data
    // Do something with the data
  } catch (error: any) {
    // Handle 
    console.log(error)
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;
      console.error('Axios error:', axiosError.message);
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

export default fetchData
