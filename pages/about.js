import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      <NextSeo title="About" />

      <Header logoWhite />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto max-w-screen-2xl">

                <div className="flex flex-wrap items-center justify-end w-full min-h-screen">

                  <div className="relative w-full min-h-screen lg:w-1/2 lg:absolute lg:top-0 lg:left-0">

                    <img className="absolute object-cover w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="https://placedog.net/2000?random" alt="" />

                  </div>

                  <div className="w-full p-6 md:px-8 lg:w-1/2 lg:px-20">

                    <h1 className="mb-8 text-2xl md:text-3xl xl:text-4xl"><span className="block">Nimble &amp; tailored.</span> We help you communicate with the world around you.</h1>

                    <div className="flex-wrap justify-between mb-4 content lg:flex">

                      <div className="lg:pr-8 lg:w-1/2">
                        <p>With so many fields in the midst of major changes, being adaptable in how we reach both consumers and industry insiders is more important than ever.</p>
                      </div>

                      <div className="lg:pr-8 lg:w-1/2">
                        <p>L52 helps hone your message to media, consumers, opinion-leaders and everyone in between. Our services range from strategy and brand building to day-to-day communications management.</p>
                      </div>
                      
                    </div>

                    <h2 className="py-4 mt-20 mb-0 font-sans uppercase border-b text-off-black border-black/20">Services</h2>

                    <dl>
                      <dt id="one"><a href="#one">Public relations</a></dt>
                      <dd>
                        <p>A brief introduction goes here</p>
                        <ul>
                          <li>list item</li>
                          <li>list item</li>
                          <li>list item</li>
                        </ul>
                      </dd>

                      <dt id="two"><a href="#two">Marketing</a></dt>
                      <dd>
                        <p>A brief introduction goes here</p>
                        <ul>
                          <li>list item</li>
                          <li>list item</li>
                          <li>list item</li>
                        </ul>
                      </dd>

                      <dt id="three"><a href="#three">Events</a></dt>
                      <dd>
                        <p>A brief introduction goes here</p>
                        <ul>
                          <li>list item</li>
                          <li>list item</li>
                          <li>list item</li>
                        </ul>
                      </dd>

                      <dt id="four"><a href="#four">Social Media</a></dt>
                      <dd>
                        <p>A brief introduction goes here</p>
                        <ul>
                          <li>list item</li>
                          <li>list item</li>
                          <li>list item</li>
                        </ul>
                      </dd>
                    </dl>
                    
                  </div>

                </div>   

              </div>
              
            </m.div>
          
        </m.div>
        
      </LazyMotion>
      
    </Layout>
  )
}
