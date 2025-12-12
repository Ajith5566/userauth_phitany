

import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

//register a user
export const registerApi =async (reqBody:unknown)=>{
    return await commonApi('POST',`${BASE_URL}/user/register`,reqBody)
}

//request to login 
export const loginApi=async(reqBody:unknown)=>{
    return await commonApi('POST',`${BASE_URL}/user/login`,reqBody)
}