import { useDataQuery } from '../useDataQuery';


export const getAllProjects = () => {
  return useDataQuery('project/get-all');
}
