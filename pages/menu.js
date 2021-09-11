import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'
import { useState } from 'react'

const query = `{
  "contact": *[_type == "contact"][0]{
    instagram,
    homeMenuImage {
      asset ->
    },
    aboutMenuImage {
      asset ->
    },
    workMenuImage {
      asset ->
    },
    clientsMenuImage {
      asset ->
    },
    digitalShowroomMenuImage {
      asset ->
    },
    contactMenuImage {
      asset ->
    }
  }
}`

const pageService = new SanityPageService(query)

export default function Menu(initialData) {
  const { data: { contact }  } = pageService.getPreviewHook(initialData)()
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Layout>
      <NextSeo title="Menu" />

      <Header isMenu />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-white"
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto">
                
                <div className="flex flex-wrap items-center justify-end w-full min-h-[40vh] lg:min-h-screen lg:flex-row-reverse">
                  
                  <div className="relative w-full min-h-[40vh] lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:right-0 bg-gray-100 overflow-hidden">
                    <m.div variants={imageScale}  className="absolute inset-0">
                      <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/images/menu.jpeg" alt="A woman stood next to a vase in a multicoloured dress" />

                      {contact.homeMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'home' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.homeMenuImage.asset.url} alt="" />
                        </div>
                      )}
                      
                      {contact.aboutMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'about' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.aboutMenuImage.asset.url} alt="" />
                        </div>
                      )}

                      {contact.workMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'work' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.workMenuImage.asset.url} alt="" />
                        </div>
                      )}

                      {contact.clientsMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'clients' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.clientsMenuImage.asset.url} alt="" />
                        </div>
                      )}

                      {contact.digitalShowroomMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'digital-showroom' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.digitalShowroomMenuImage.asset.url} alt="" />
                        </div>
                      )}

                      {contact.contactMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'contact' ? 'opacity-100' : 'opacity-0' }`}>
                          <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.contactMenuImage.asset.url} alt="" />
                        </div>
                      )}
                    </m.div>
                  </div>

                  <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="w-full"
                    variants={{
                      enter: { transition: { staggerChildren: 0.04 } }
                    }}
                  >
                  <div className="flex-col justify-end w-full p-6 lg:px-8 lg:w-1/2 lg:p-20 lg:pl-16 lg:pt-32 lg:pb-16 lg:min-h-screen lg:flex">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/">
                          <a aria-label="Go to Home" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('home')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Home
                              </m.div>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/about">
                          <a aria-label="Go to about" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('about')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                About Us
                              </m.div>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/work">
                          <a aria-label="Go to about" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('work')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Work
                              </m.div>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/clients">
                          <a aria-label="Go to clients" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('clients')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Clients
                              </m.div>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <a href="https://digitalshowroom.l52.world/" rel="noopener noreferrer" target="_blank" aria-label="Go to digital showroom" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('digital-showroom')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Digital Showroom
                              </m.div>
                            </div>
                          </a>
                        </li>

                        <li>
                          <Link href="/contact">
                          <a aria-label="Go to contact us" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue" onMouseOver={() => setCurrentImage('contact')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Contact Us
                              </m.div>
                            </div>
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
                  </m.div>

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