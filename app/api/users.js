import client from "./client";

const endpoint = "/user/";

const getUser = async (id) => {
  const response = await client.get(endpoint + `${id}`);
  if (response.ok) {
    return response.data;
  } 
};

const postUser = (user) => {
  return client.post(endpoint, user);
};

export default {
  getUser,
  postUser,
};
