import SignUpBG from './SignInBG.jpeg'
import { useNavigate } from 'react-router-dom'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useState } from 'react'
import { companyApi } from '../../../api/companyApi'




interface RegisterFormState{
    companyname: string,
    companyphone: string,
    email: string,
    password: string,
    confirmpassword: string
}

const index = () => {
    const [success, setSuccess] = useState<string>('');
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegisterFormState>();

      const onSubmit: SubmitHandler<RegisterFormState> = async (data) => {
        if (data.password !== data.confirmpassword) {
          return;
        }
        try {
            await companyApi.register({
              companyname: data.companyname,
              companyphone: data.companyphone,
              email: data.email,
              password: data.password,
            });
      
            setSuccess('Registration successful!');
            console.log(success);
            
            console.log("registeration success!");
            
            navigate('/otppage', { state: { email: data.email , role: "" } });
          } catch (error: any) {
            console.error('Registration error:', error);
          }
        };
  return (
    <div className="w-full h-full flex justify-center items-center" 
         style={{
           backgroundImage: `url(${SignUpBG})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh'
         }}>
            <div className="bg-white bg-opacity-30 shadow-md rounded-lg p-10 mx-auto w-5/12">
                <h1 className="text-2xl font-bold mb-6 text-center">Dev Jobs</h1>
                <h2 className="text-xl font-semibold mb-6 text-center">Register Your Company</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-white">Company Name</label>
                        <input
                            {...register("companyname",
                                {
                                    required: "Full Name is required",
                                    setValueAs: (value) => value.trim()
                                })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                        {errors.companyname && <p className='text-red-500'>{errors.companyname.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white">Phone Number</label>
                        <input
                            {...register("companyphone",{
                                required: "Phone Number is required",
                                pattern: {
                                    value: /^[0-9]{10}$/,
                                    message: 'Mobile number must be 10 digits',
                                  },
                                  setValueAs: (value) => value.trim()
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                        {errors.companyphone && <p>{errors.companyphone.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white">Email</label>
                        <input
                            {...register("email",{
                                required: "Email is required",
                                setValueAs: (value) => value.trim()
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white">Password</label>
                        <input
                            {...register("password",{
                                required: "Password is required",
                                setValueAs: (value) => value.trim()
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white">Confirm Password</label>
                        <input
                            {...register("confirmpassword",{
                                required: "Password is required",
                                setValueAs: (value) => value.trim()
                            })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
                        />
                        {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                        Sign Up
                    </button>

                    <p className="text-center mt-4">
                        Already have an account?{" "}
                        <a href="" className="text-white font-semibold hover:underline">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
            <div>
                
            </div>
    </div>
  )
}

export default index