import Hero2Img from "./Hero2Img.gif"

type Props = {}

const Hero2 = (props: Props) => {
  return (
    <div className="p-12 flex justify-center bg-slate-100">

      <div className="flex justify-between w-5/6">

        <div className="flex justify-center items-center py-16 pl-6 rounded-2xl ">
          <img className="rounded-2xl" src={Hero2Img} alt="Hero Image" />
        </div>


        <div className="py-16 pr-6">


          <h1 className="font-bold text-3xl italic leading-tight">
            Trusted & Popular <br />
            Job Portal
          </h1>


          <p className="mt-5 leading-relaxed tracking-wide">
          Find your dream job from thousands of daily <br />
          updated job vacancies. Find the best jobs <br />
          online from popular companies and apply <br />
          directly with an ATS friendly resume. We Are <br />
          always ready to help . Join us today and lets <br />
          start a new journey.
          </p>

          <div className="flex justify-between gap-4 py-6">
                <button className="bg-black hover:opacity-80 text-white px-4 py-2 rounded-lg">Apply Now</button>
                <button className="bg-white hover:opacity-50 text-black px-4 py-2 rounded-lg border border-black">Build a Resume</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero2