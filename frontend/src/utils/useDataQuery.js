import { useQuery } from 'vue-query';
import URL from '@/server_data';

export const useDataQuery = (path) => {
  return useQuery('data', async () => {
    const response = await fetch(`${URL}${path}`);
    if (!response.ok) {
      throw new Error('Ошибка получения данных');
    }
    return response.json();
  });
};
