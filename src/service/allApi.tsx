

import type { UpdateTodoPayload } from "../types/form_type"
import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"
interface Todo {
  _id: string;
  task: string;
  status: boolean;
}

//register a user
export const registerApi =async (reqBody:unknown)=>{
    return await commonApi('POST',`${BASE_URL}/user/register`,reqBody)
}

//request to login 
export const loginApi=async(reqBody:unknown)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,reqBody)
}

const getAuthHeader = () => {
  const token = sessionStorage.getItem("token");
  return {
    Authorization: `Bearer ${token}`,
  };
};

// ADD TODO
export const addTodoApi = (task: string) => {
  return commonApi(
    "POST",
    `${BASE_URL}/todo/add`,
    { task },
    getAuthHeader()
  );
};

// GET TODOS
export const getTodosApi = () => {
  return commonApi<Todo[]>(
    "GET",
    `${BASE_URL}/todo/all`,
    undefined,
    getAuthHeader()
  );
};


// UPDATE TODO
export const updateTodoApi = (id: string, data:UpdateTodoPayload) => {
  return commonApi(
    "PUT",
    `${BASE_URL}/todo/update/${id}`,
    data,
    getAuthHeader()
  );
};

// DELETE TODO
export const deleteTodoApi = (id: string) => {
  return commonApi(
    "DELETE",
    `${BASE_URL}/todo/delete/${id}`,
    undefined,
    getAuthHeader()
  );
};