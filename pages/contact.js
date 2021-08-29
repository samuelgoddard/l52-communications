import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      <NextSeo title="Contact" />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto">
                
                <div className="flex flex-wrap lg:items-end justify-end w-full min-h-[40vh] lg:min-h-screen lg:flex-row-reverse">
                  
                  <div className="relative w-full min-h-[40vh] lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:right-0">

                    <img className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="https://placedog.net/2000?random" alt="" />

                  </div>

                  <div className="w-full p-6 lg:px-8 lg:w-1/2 lg:p-20 lg:pl-16 lg:pt-16 lg:pb-16">

                    <h2 className="py-4 mt-1 lg:mt-20 mb-0 font-sans uppercase text-off-black">Connect</h2>
                    

                    <p><a aria-label="Email link for general enquiries" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href="mailto:">
                      General Enquiries
                    </a></p>

                    <p><a aria-label="Email link for press enquiries" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href="mailto:">
                      Press Enquiries
                    </a></p>

                    <p><a aria-label="Go to our Instagram page" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                      Instagram
                    </a></p>

                    <p><a aria-label="Go to our Linkedin page" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                      Linkedin
                    </a></p>

                    <div className="flex-wrap self-end w-full lg:flex">

                      <div className="lg:w-1/2">

                        <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Find us</h3>

                        <p>Floor 2, 42-43 Maiden Lane,<br /> London,<br /> WC2E 7LL</p>

                      </div>

                      <div className="lg:w-1/2 mb-5 lg:mb-0">

                        <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Contact</h3>

                        <p><a className="inline-block" href="tel:+44(0)2039059999"> +44 (0)20 3905 9999</a> <br /> <a href="https://www.l52.world" aria-label="Go to L52 World" rel="noreferrer">https://www.l52.world</a></p>

                      </div>

                    </div>
                    
                  </div>

                </div>

              </div>              
              
            </m.div>
          
        </m.div>
        
      </LazyMotion>
      
    </Layout>
  )
}
