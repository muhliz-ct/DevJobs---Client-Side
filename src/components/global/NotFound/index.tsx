import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
        <div>
            <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Error 404</h1> <br />
            <h2 className="text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Page Not Found</h2> <br />
            <Link className="text-blue-500 hover:underline" to='/'>Return to Home Page</Link>
        </div>
    </div>
  )
}

export default NotFoundPage