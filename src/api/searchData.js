import axios from 'axios';

export const getSearchData = async (phrase) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );

  let resultData = response?.data?.filter((value) => {
    return value?.name?.includes(phrase);
  });
  return resultData;
};
