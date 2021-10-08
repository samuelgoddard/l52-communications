import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

import SanityPageService from '@/services/sanityPageService'
import { useState } from 'react'
import ImageWrapper from '@/components/image-wrapper'

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
                      {/* <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.homeMenuImage.asset.url} /> */}
                      
                      <Image
                        src={contact.homeMenuImage.asset.url}
                        layout="fill"
                        className={`absolute object-cover object-top w-full h-full`}
                        priority
                      />

                      {contact.homeMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'home' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.homeMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}
                      
                      {contact.aboutMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'about' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.aboutMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {contact.workMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'work' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.workMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {contact.clientsMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'clients' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.clientsMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {contact.digitalShowroomMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'digital-showroom' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.digitalShowroomMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {contact.contactMenuImage && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 'contact' ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={contact.contactMenuImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
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
                          <a aria-label="Go to Home" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group" onMouseOver={() => setCurrentImage('home')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Home
                              </m.div>
                            </div>

                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/about">
                          <a aria-label="Go to about" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group relative group" onMouseOver={() => setCurrentImage('about')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                About Us
                              </m.div>
                            </div>
                            
                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/work">
                          <a aria-label="Go to about" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group" onMouseOver={() => setCurrentImage('work')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Work
                              </m.div>
                            </div>

                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/clients">
                          <a aria-label="Go to clients" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group" onMouseOver={() => setCurrentImage('clients')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Clients
                              </m.div>
                            </div>

                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                          </Link>
                        </li>

                        <li>
                          <a href="https://digitalshowroom.l52.world/" rel="noopener noreferrer" target="_blank" aria-label="Go to digital showroom" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group" onMouseOver={() => setCurrentImage('digital-showroom')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Digital Showroom
                              </m.div>
                            </div>

                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                        </li>

                        <li>
                          <Link href="/contact">
                          <a aria-label="Go to contact us" className="inline-block py-2 text-[28px] italic lg:text-[2.6vw] 2xl:text-[3vw] font-display text-blue relative group" onMouseOver={() => setCurrentImage('contact')} onMouseLeave={() => setCurrentImage(null)}>
                            <div className="relative overflow-hidden leading-tight">
                              <m.div variants={reveal}>
                                Contact Us
                              </m.div>
                            </div>

                            <div className="absolute top-0 right-0 mt-2 w-[15px] h-[15px] mr-[-20px] font-sans text-[18px] normal-case rotate-[25deg] opacity-50 overflow-hidden text-black">
                              <span className="block -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:-translate-y-1 transition-transform ease-in-out duration-500">↑</span>
                            </div>
                          </a>
                          </Link>
                        </li>
                      </ul>
                    </nav>

                    {contact.instagram && (
                      <a aria-label="Go to our Instagram page" className="block mt-8 lg:mt-12 mb-0 font-sans uppercase group text-blue group" href={contact.instagram} target="_blank" rel="noopener noreferrer">
                        <span className="block overflow-hidden relative">
                              <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Instagram</span>
                              <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Instagram</span>
                          </span>
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