import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'

const query = `{
  "contact": *[_type == "contact"][0]{
    instagram,
  }
}`

const pageService = new SanityPageService(query)

export default function Menu(initialData) {
  const { data: { contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title="Menu" />

      <Header isMenu />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto">
                
                <div className="flex flex-wrap items-center justify-end w-full min-h-[40vh] lg:min-h-screen lg:flex-row-reverse">
                  
                  <div className="relative w-full min-h-[40vh] lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:right-0 bg-gray-100">

                    <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/menu.jpeg" alt="A woman stood next to a vase in a multicoloured dress" />

                  </div>

                  <div className="flex-col justify-end w-full p-6 lg:px-8 lg:w-1/2 lg:p-20 lg:pl-16 lg:pt-32 lg:pb-16 lg:min-h-screen lg:flex">

                    <nav>
                      <ul>
                        <li>
                          <Link href="/">
                          <a aria-label="Go to Home" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            Home
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/about">
                          <a aria-label="Go to about" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            About Us
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/work">
                          <a aria-label="Go to about" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            Work
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/clients">
                          <a aria-label="Go to clients" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            Clients
                          </a>
                          </Link>
                        </li>

                        <li>
                          <a href="https://digitalshowroom.l52.world/" rel="noopener noreferrer" target="_blank" aria-label="Go to digital showroom" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            Digital Showroom
                          </a>
                        </li>

                        <li>
                          <Link href="/contact">
                          <a aria-label="Go to contact us" className="inline-block my-2 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue">
                            Contact us
                          </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    {contact.instagram && (
                      <a aria-label="Go to our Instagram page" className="block mt-8 lg:mt-12 mb-0 font-sans uppercase text-blue" href={contact.instagram} target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    )}
                    
                  </div>

                </div>

              </div>              
              
            </m.div>
          
        </m.div>
        
      </LazyMotion>
      
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}