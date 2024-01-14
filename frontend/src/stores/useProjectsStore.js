import { defineStore } from 'pinia';
import { ref } from 'vue';

const useProjectsStore = defineStore('projects', () => {
  const projects = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const setData = ({ data, isLoading: isLoadintT, error: errorT }) => {
    data && (projects.value = data.value);
    isLoadintT && (isLoading.value = isLoadintT.value);
    errorT && (error.value = errorT.value);
  }
  return {
    projects,
    isLoading,
    error,
    setData
  }
});

export default useProjectsStore;
