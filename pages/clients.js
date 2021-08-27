import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

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


                <Tabs selectedTabClassName="text-blue">
                  <TabList className="flex flex-wrap justify-center mb-8">
                    <Tab>
                      <button className="p-2 text-2xl lg:text-[32px] xs:p-4 font-display">
                        Clients
                      </button>
                    </Tab>
                    <Tab>
                      <button className="p-2 text-2xl lg:text-[32px] xs:p-4 font-display">
                        Recent Projects
                      </button>
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <ul className="flex flex-wrap items-center justify-center">
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="/images/logo.svg" alt="" />
                      </li>
                    </ul>
                  </TabPanel>

                  <TabPanel>
                    <ul className="flex flex-wrap items-center justify-center">
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                      <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/5">
                        <img src="https://placedog.net/200/100?random" alt="" />
                      </li>
                    </ul>
                  </TabPanel>

                </Tabs>

                

              </Container>                  
              
            </m.div>
          
        </m.div>
        
      </LazyMotion>
      
    </Layout>
  )
}
