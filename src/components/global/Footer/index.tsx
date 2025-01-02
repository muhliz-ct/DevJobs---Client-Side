import React from 'react'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="bg-black text-white px-16">
  <div className="container mx-auto py-10 px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0 px-6">
        <h2 className="text-2xl font-bold mb-4">Dev Jobs</h2>
        <p>Know more about DevJobs</p>
        <div className="mt-4">
          <input type="email" placeholder="Your email" className="border border-gray-300 p-2 rounded-md" />
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-md ml-2">→</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-6 px-6">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <ul>
            <li>Career</li>
            <li>Our mission</li>
            <li>Our vision</li>
            <li>Successes</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">For Creative</h3>
          <ul>
            <li>Explore</li>
            <li>Suggestions</li>
            <li>Working</li>
            <li>Future Plans</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul>
            <li>Our users</li>
            <li>why pick us</li>
            <li>Clients</li>
            <li>Companies</li>
            <li>Any help</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center mt-10">
      <p>Copyright 2024 by DevJobs. All rights reserved</p>
    </div>
  </div>
</footer>
  )
}

export default Footer