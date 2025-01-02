import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Rootstate } from "../../../Redux/store"
import { FaUser } from "react-icons/fa"
import { useState } from "react"
import { Appdispatch } from "../../../Redux/store"
import { logout } from "../../../Redux/slice"
import { Button } from "@/components/ui/button"

type Props = {
    color?: string
}

const Navbar = ({color}: Props) => {


    const dispatch = useDispatch<Appdispatch>()
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };
  
    const handleLogout = () => {
      console.log("Logged out");
      dispatch(logout())
    };

    
    const Navigate = useNavigate()
    const user = useSelector((state: Rootstate) => state.user.username);
    console.log(user);
    
  return (
    <div className={`flex justify-between p-12 ${color ? color : 'bg-[#C7F3FC]'}`}>
        <div className="flex justify-between mx-auto w-5/6">
            <div className="flex justify-between gap-16 w-full text-lg">
                <h1 className="font-bold">DevJobs</h1>
            
            <div className="flex justify-between w-full gap-4">
                {/* Inner Left div */}
                <div className="flex justify-between gap-8">
                    <a href=""><p>Home</p></a>
                    <a href=""><p>Jobs</p></a>
                    <a href=""><p>Companies</p></a>
                    <a href=""><p>Contact Us</p></a>
                    <a href=""><p>About Us</p></a>

                </div>
                {/*Inner Right div  */}
                
                <div className="flex justify-between gap-6">
                    {/* <button className="bg-black hover:opacity-80 text-white px-4 rounded-lg font">Create Resume</button> */}
                    <Button variant={'mine'} size={'lg'}>Create Resume</Button>
                    {
                        user ? <FaUser size={30} onClick={toggleDropdown} /> :
                        <button onClick={()=> Navigate('/signin')} className="bg-black hover:opacity-80 text-white px-4 rounded-lg">Sign In</button>}
                </div>
                </div>
            </div>
        </div>
        {dropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '0',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
            zIndex: 1000,
            width: '150px',
          }}
        >
          <ul style={{ listStyleType: 'none', margin: 0, padding: '10px 0' }}>
            <li
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
                borderBottom: '1px solid #f0f0f0',
              }}
              onClick={() => console.log('Profile clicked')}
            >
              Profile
            </li>
            <li
              style={{
                padding: '10px 20px',
                cursor: 'pointer',
              }}
              onClick={handleLogout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar