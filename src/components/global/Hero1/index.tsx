import HeroImg from "./HeroImg.jpeg"

type Props = {}

const Hero1 = (props: Props) => {
  return (
    <div className=' flex justify-center w-full bg-[#C7F3FC] p-12 '>
        <div className=' flex justify-between w-5/6'>
            <div>
                <h1 className='font-bold text-3xl italic leading-tight'>
                Looking for a software <br /> 
                developer job that <br />
                fits your life
                </h1>
                <p className='mt-5 leading-relaxed tracking-wide'>
                Tired of looking for a software developer job ? we <br />
                got you. By being a part of our community we will <br />
                help you to get the perfect job that matches you <br />
                skills and preferences. Tired of looking for a <br />
                 software developer job ? we got you. By being a <br />
                part of our community we will help you to get the <br />
                 perfect job that matches you skills and preferences. <br />
                We are always ready to help.
                </p>
                <div className="flex justify-between gap-4 py-6 mx-3">
                <button className="bg-black hover:opacity-80 text-white px-4 py-2 rounded-lg">Sign Up</button>
                <button className="bg-black hover:opacity-80 text-white px-4 py-2 rounded-lg">Register a Company</button>
                </div>
            </div>
            <div className="flex justify-end my-auto">
                <img className="rounded-2xl w-4/6 h-5/6" src={HeroImg} alt="hero image" />
            </div>
        </div>
    </div>
  )
}

export default Hero1