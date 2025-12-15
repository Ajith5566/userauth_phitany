export interface FormData {
  name: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword: string;
}
 
export interface FormErrors {
  name: string;
  mobile: string;
  email: string;
  password: string;
  confirmPassword:string;
}

//login form type
export interface Lform{
  email:string;
  password:string;
}
//login error
export interface Lformerror {
  email: string;
  password: string;
  
}
export interface User {
  _id: string;
  username: string;
  phoneNumber: string;
  mailId: string;
}

export interface LoginResponse {
  existingUser: User;
  token: string;
}

export interface UpdateTodoPayload {
  task?: string;
  status?: boolean;
}
