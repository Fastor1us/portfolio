import { useDataQuery } from '../useDataQuery';


export const getAllProjects = () => {
  return useDataQuery('/projects');
}


// export const get
