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