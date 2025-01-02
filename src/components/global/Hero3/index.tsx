import Hero3Img from './Hero3Img.jpeg'

type Props = {}

const Hero3 = (props: Props) => {
  return (
    <div className='flex justify-center p-12'>
        <div className='flex justify-between w-5/6'>

        <div className="py-16 pl-16">


          <h1 className="font-bold text-3xl italic leading-tight">
            Why We are Most <br />
          Popular
          </h1>


          <p className="mt-5 leading-relaxed tracking-wide">
             Unlike other job portals we only focus <br />
            on one sector which is computer  <br />
            science engineering and web <br />
            development which makes users related <br />
            easy and efficiently search job. Our  <br />
            portal also has trusted companies  <br />
            registered which make the whole  <br />
            process convenient.
          </p>

          <div className="flex justify-start gap-4 py-6">
                <button className="bg-black hover:opacity-80 text-white px-4 rounded-lg">Quality Jobs</button>
                <button className="bg-black hover:opacity-80 text-white px-4 rounded-lg">Top Companies</button>
                
          </div>
          <div className="flex justify-start gap-4 py-6">
                <button className="bg-black hover:opacity-80 text-white px-4 rounded-lg">No charge</button>
                <button className="bg-black hover:opacity-80 text-white px-4 rounded-lg">Convenient</button>
          </div>
        </div>


        <div className='rounded-2xl p-16'>
            <img className='h-96 rounded-xl mt-12' src={Hero3Img} alt="Hero3 Image" />
        </div>

        </div>
    </div>
  )
}

export default Hero3