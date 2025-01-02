
import Hero1 from './global/Hero1'
import Hero2 from './global/Hero2'
import Jobs from './global/Jobs'
import Hero3 from './global/Hero3'
import Navbar from './global/Navbar'
import Footer from './global/Footer'
type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <Navbar />
        <Hero1 />
        <Hero2 />
        <Jobs />
        <Hero3 />
        <Footer />
    </div>
  )
}

export default Home