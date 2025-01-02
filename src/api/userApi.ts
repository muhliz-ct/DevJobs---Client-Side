import API from "../services/axios";



interface RegisterData {
    fullName: string;
    phoneNumber: string
    email: string;
    password: string;
    
  }


  export const api = {


  register: async (userData: RegisterData) => {
    try {
      console.log('Sending registration request:', userData);
      const response = await API.post('/users/register', userData); // Endpoint is '/register'
      console.log('Response data:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in registration:', error);
      throw error;
    }
  },

  verifyotp: async (email: string, otp: string)=>{
    const response = await API.post('/users/verify-otp', { email, otp });
    return response.data;
  },

  login: async (email: string, password: string)=>{
    const response = await API.post('users/login', {email, password});
    return response;
  },

  googleSignIn: async (fullName:string | null, email: string | null, phoneNumber: string | null)=>{
    const response = await API.post('users/googlelogin', {fullName, email, phoneNumber});
    return response;
  }

}