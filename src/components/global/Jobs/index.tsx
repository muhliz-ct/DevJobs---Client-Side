import { featuredJobs } from "./job";

type Props = {}

const Jobs = (props: Props) => {
  return (
    <div className='flex justify-center items-center p-12 bg-[#C7F3FC]'>
        <div className='flex flex-col w-5/6'>

            <div className="flex flex-col justify-center items-center">
                <h1 className='text-2xl font-semibold'>Featured Jobs</h1>
                <p className='text-m font-semibold'>Find your dream job from thousands of daily updated job vacancies.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        {featuredJobs.map((job, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-md border border-black">
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <div className="flex items-center text-black mb-4">
              <span className="mr-2">📍</span>
              <span>{job.location}</span>
            </div>
            <div className="flex items-center text-black mb-4">
              <span className="mr-2">⏰</span>
              <span>{job.jobType}</span>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <span className="font-bold text-black">{job.company}</span>
                <span className="ml-2 text-sm text-black">{job.daysAgo} days</span>
              </div>
              <button className=" text-black font-semibold px-4 py-2 rounded hover:opacity-80 border border-black">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

        <div className="flex justify-center items-center">
            <button className="text-white bg-black px-4 py-2 rounded-xl hover:opacity-80 border border-black">
                View All Jobs
            </button>
        </div>
        </div>
    </div>
  )
}

export default Jobs