import axios from "axios";
const API_URL = "http://44.193.74.82:5500";

const endpointService = {
  getClasses: async () => {
    const content = await axios.get(`${API_URL}/class`, {
    });

    return content;
  },
  getStudentsClasses: async (classId) => {
    const content = await axios.get(`${API_URL}/class/alunos/${classId}`, {
    });

    return content;
  },
};

export default endpointService;
