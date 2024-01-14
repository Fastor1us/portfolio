import { useQuery } from 'vue-query';

const URL = 'http://localhost:8081';

export const useDataQuery = (url) => {
  return useQuery('data', async () => {
    const response = await fetch(`${URL}/${url}`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных');
    }
    return response.json();
  });
};
