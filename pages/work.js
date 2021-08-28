import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Carousel from '@/components/carousel'

export default function Work() {

  const scrollToTarget = (e) => {
    e.preventDefault();
    var target = e.target.dataset.target;
    var element = document.getElementById(target);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  return (
    <Layout>
      <NextSeo title="Work" />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mt-32 lg:mt-56"
        >
          
            <m.div variants={fade}>

              <Container>

                <h1 className="text-center text-2xl lg:text-[40px]">Selected Work</h1>

                <ul className="flex flex-wrap justify-center max-w-3xl mx-auto">
                  <li className="w-1/2 sm:w-1/3 md:w-1/5">
                    <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target="brand-features" onClick={scrollToTarget}>
                      Brand Features
                    </a>
                  </li>

                  <li className="w-1/2 sm:w-1/3 md:w-1/5">
                    <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target="editorial" onClick={scrollToTarget}>
                      Editorial
                    </a>
                  </li>

                  <li className="w-1/2 sm:w-1/3 md:w-1/5">
                    <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target="events" onClick={scrollToTarget}>
                      Events
                    </a>
                  </li>

                  <li className="w-1/2 sm:w-1/3 md:w-1/5">
                    <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target="influencers" onClick={scrollToTarget}>
                      Influencers
                    </a>
                  </li>

                  <li className="w-1/2 sm:w-1/3 md:w-1/5">
                    <a className="block px-4 py-2 text-center uppercase cursor-pointer text-blue" data-target="projects" onClick={scrollToTarget}>
                      Projects
                    </a>
                  </li>
                </ul>

              </Container>        

              <Carousel
                id="brand-features"
                title="Brand Features"
                items
              />

              <Carousel
                id="editorial"
                title="Editorial"
                items
              />

              <Carousel
                id="events"
                title="Events"
                items
              />

              <Carousel
                id="influencers"
                title="Influencers"
                items
              />

              <Carousel
                id="projects"
                title="Projects"
                items
              />

              
            </m.div>
          
        </m.div>
        
      </LazyMotion>
      
    </Layout>
  )
}
