
import { Features } from './features/Features'
import Hero from './Hero/Hero'
import { Stats } from './stats/Stats'
import { Testimonials } from './testimonials/Testimonials'
import { Footer } from '../../shared/footer/Footer'
import CountUpStat from './countUp/Countup'

export const Home = () => (
    <>
        <Hero />
        <Features />
        <Stats />
      <CountUpStat/>
        <Testimonials />
        <Footer/>
     
    </>
)
