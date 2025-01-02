import SignInBG from './SignInBG.jpeg'
import { useNavigate, Link } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { api } from '../../../api/userApi'
import { useDispatch } from 'react-redux'
import { login } from '../../../Redux/slice'
import { Appdispatch } from '../../../Redux/store'
import { Button } from '@/components/ui/button'
import {auth, provider} from '@/firebase/config'
import { signInWithPopup } from 'firebase/auth'

type Props = {}

const SignIn = (props: Props) => {
    const [data, setData] = useState({})
    const dispatch = useDispatch<Appdispatch>()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleGoogleSignUP = async (e: FormEvent) => {
        e.preventDefault();
        try {

          const result = await signInWithPopup(auth, provider);
          
          const user = result.user;

        //   console.log("Google sign-up successful:", user.displayName, user.email);

          const {data} = await api.googleSignIn(user.displayName, user.email, user.phoneNumber)

            // console.log(data);

            dispatch(login({ username: data.data.user.fullName, email:data.data.user.email}));
            
            localStorage.setItem("access-token", data.data.token);
            
            console.log("successfull");

            navigate('/');

        //   setData(user);

        } catch (error) {
          console.error("Error during Google sign-up:", error);
        }
      };


    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault()
        console.log(email,password);
        

        try {
            const {data} = await api.login(email, password)
            console.log("hello");
            
            console.log(data);
            dispatch(login({ username: data.data.user.fullName, email:data.data.user.email}));
            
            localStorage.setItem("access-token", data.data.token);
            
            console.log("successfull");
            navigate('/');
            
        } catch (error) {
            
        }
    }
  return (
    <div className="w-full h-full flex justify-center items-center" 
         style={{
           backgroundImage: `url(${SignInBG})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           minHeight: '100vh'
         }}>

        <div className="bg-white bg-opacity-30 shadow-md rounded-lg p-10 mx-auto max-w-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Dev Jobs</h1>
            <h2 className="text-xl font-semibold mb-6 text-center">Welcome Back</h2>

        <div className="flex mb-6 justify-center">
            <button className="bg-white hover:opacity-80 text-black font-bold py-2 px-4 rounded mr-2">User Login</button>
            <button onClick={()=>navigate('/companylogin')} className="bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded">Company Login</button>
        </div>

        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="email">Email Address</label>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter Email" />
            </div>

            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Enter Password" />
                <Link to="/forgot-password" className="text-sm text-white hover:opacity-80 mt-2 inline-block">
                    Forgot Password?
                </Link>
            </div>

            <div className="flex flex-col items-center justify-between">
                <button 
                className="bg-black hover:opacity-80 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit">
                    Sign In
                </button> 
                <br />
                <a onClick={() => navigate('/signup')} className="inline-block align-baseline font-bold text-sm text-white hover:opacity-80" href="#">Don't have an account? Sign Up</a>
            </div>
        </form>
        <div className='flex justify-center'>
        <Button type='button' onClick={handleGoogleSignUP} variant={'default'} className='mt-3'>Sign Up with google</Button>
        </div>
    </div>

    </div>
  )
}

export default SignIn