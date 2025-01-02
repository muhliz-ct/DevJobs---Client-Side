import API from "../services/axios";



interface AdminData {

    email: string;
    password: string;
    
  }


  export const  adminApi = {


        login: async (email: string, password: string)=>{
                const response = await API.post('/admin/login', {email, password});
                return response;
            }


}