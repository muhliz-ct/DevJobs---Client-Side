import { useForm, SubmitHandler } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { adminApi } from '@/api/adminApi'
import { loginAdmin } from '@/Redux/adminSlice'
import { useDispatch } from 'react-redux'
import { Appdispatch } from '@/Redux/store'
import { adminAuth } from '@/auth/AuthProvider'
import { useNavigate } from 'react-router-dom'

type LoginInputs = {
  email: string
  password: string
}


const AdminLogin = () => {

  const {setAdmin} = adminAuth()
  const dispatch = useDispatch<Appdispatch>()
  const navigate = useNavigate()

    const {
      register,
      handleSubmit,
      formState:{errors},
    } = useForm<LoginInputs>();

    const onSubmit : SubmitHandler<LoginInputs> = async(inputs)=>{
          console.log(inputs);
          

            const { data } = await adminApi.login(inputs.email,inputs.password);

            if(data){
              console.log("fetched");
              
              setAdmin(data.data.admin.fullName)
              dispatch(loginAdmin({adminName:data.data.admin.fullName, email: data.data.admin.email}));
              navigate('/admin-dashboard');
            }


            
            

            console.log(data.data.admin.fullName, data.data.admin.email);
            

            
    }

  return (

    <div>
        <div
        className='flex justify-center items-center h-screen w-screen bg-slate-500'>
            <div className='flex flex-col items-center justify-center w-1/4 h-2/3 bg-white rounded-2xl p-4'>
              <h1 className='text-2xl font-bold mb-6 text-center'>Welcome To DevJobs</h1>
              <h1 className='text-center text-xl font-semibold mb-6 text-center">'>Admin Login</h1>

              <div className='flex h-5/6 w-5/6 border-dotted'>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center  w-full h-full gap-3'>
                    <div>
                      <Label htmlFor='email'>Email</Label>
                      <Input
                        id='email'
                        type='email'
                        {
                          ...register('email', {
                            required: "Email is required",
                            setValueAs: (value) => value.trim(),
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Invalid Email Address'
                            }
                          })
                        }
                        />
                        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
                    </div>
                    <div>
                      <Label htmlFor='password'>Password</Label>
                      <Input
                       id = 'password'
                       type = 'password'
                       {
                         ...register('password',{
                          required: "Password is required",
                          setValueAs: (value) => value.trim(),
                          minLength: {
                            value: 6,
                            message: 'Password must be 6 charecters'
                          }
                        })
                      }
                      />
                       {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
                    </div>

                    <div>
                    <Button type="submit" className="w-full">Login</Button>
                    </div>
                </form>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin