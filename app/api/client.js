import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://n2m3o4byrb.execute-api.us-west-2.amazonaws.com/development"
});

export default apiClient;
