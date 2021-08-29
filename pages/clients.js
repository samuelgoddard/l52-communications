import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

      <Header alwaysBlack />

      <LazyMotion features={domAnimation}>
        <div className="lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:min-h-screen">
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="py-32 lg:py-40 w-full"
          >
              <m.div variants={fade}>
                <Container>
                  <Tabs>
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
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                      </ul>
                    </TabPanel>

                    <TabPanel>
                    <ul className="flex flex-wrap items-center justify-center">
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                        <li className="w-full p-6 xs:w-1/2 md:p-12 lg:py-20 md:w-1/3 lg:w-1/4 xl:w-1/5">
                          <img src="/images/logo.svg" alt="" />
                        </li>
                      </ul>
                    </TabPanel>

                  </Tabs>

                  

                </Container>                  
                
              </m.div>
            
          </m.div>
        </div>
      </LazyMotion>
      
    </Layout>
  )
}
