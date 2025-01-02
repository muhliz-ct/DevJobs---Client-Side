import API from "../services/axios";



interface RegisterData {
    companyname: string;
    companyphone:string;
    email: string;
    password: string;
    
  }


  export const  companyApi = {
//     register: async (userData: RegisterData) => {
//         console.log(userData);
        
//       const response = await API.post("/register", userData);
//       return response.data;
//     },

register: async (companyData: RegisterData) => {
    try {
      console.log('Sending registration request:', companyData);
      const response = await API.post('/company/register', companyData); // Endpoint is '/register'
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in registration:', error);
      throw error;
    }
  },

  verifyotp: async (email: string, otp: string)=>{
    const response = await API.post('/company/verify-otp', { email, otp });
    return response.data;
  },

  login: async (email: string, password: string)=>{
    const response = await API.post('/company/login', {email, password});
    return response;
  }


}