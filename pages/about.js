import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'
import { useState } from 'react'
import ImageWrapper from '@/components/image-wrapper'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// import 'react-accessible-accordion/dist/fancy-example.css';


const query = `{
  "about": *[_type == "about"][0]{
    title,
    headingText,
    heroImage {
      asset ->
    },
    text,
    services[] {
      title,
      text,
      supportingImage {
        asset ->
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function About(initialData) {
  const { data: { about }  } = pageService.getPreviewHook(initialData)()
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Layout>
      <NextSeo title={about.title} />

      <Header logoWhite />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="bg-white"
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto">

                <div className="flex flex-wrap items-center justify-end w-full min-h-[40vh] lg:min-h-screen">

                  <div className="relative w-full min-h-[50vh] lg:min-h-screen lg:w-1/2 lg:max-h-screen lg:fixed lg:top-0 lg:left-0 lg:bottom-0 bg-gray-100 overflow-hidden">
                    <m.div variants={imageScale} className="absolute inset-0">
                      <img className={`absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity ease-in-out duration-500 ${ currentImage > 0 ? 'opacity-0' : 'opacity-100' }`} src={about.heroImage.asset.url} alt="" />
                      
                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 1 ? 'opacity-100' : 'opacity-0' }`}>
                        <ImageWrapper
                          image={about.services[0].supportingImage.asset}
                          className="absolute object-cover object-top w-full h-full"
                          baseWidth={1200}
                          baseHeight={1600}
                          fill
                        />
                      </div>

                      <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 2 ? 'opacity-100' : 'opacity-0' }`}>
                        <ImageWrapper
                          image={about.services[1].supportingImage.asset}
                          className="absolute object-cover object-top w-full h-full"
                          baseWidth={1200}
                          baseHeight={1600}
                          fill
                        />
                      </div>

                      {about.services.length > 2 && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 3 ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={about.services[2].supportingImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {about.services.length > 3 && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 4 ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={about.services[3].supportingImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}
                      
                      {about.services.length > 4 && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 5 ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={about.services[4].supportingImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}

                      {about.services.length > 5 && (
                        <div className={`absolute inset-0 z-100 transition-opacity ease-in-out duration-500 ${ currentImage == 6 ? 'opacity-100' : 'opacity-0' }`}>
                          <ImageWrapper
                            image={about.services[5].supportingImage.asset}
                            className="absolute object-cover object-top w-full h-full"
                            baseWidth={1200}
                            baseHeight={1600}
                            fill
                          />
                        </div>
                      )}
                    </m.div>
                  </div>

                  <div className="w-full pt-8 p-6 md:px-8 lg:w-1/2 lg:px-[6vw] lg:py-[12vh]">
                    
                    <div className="mx-auto max-w-[760px]">
                      <h1 className="mb-8 text-2xl md:text-3xl xl:text-4xl 2xl:text-[2.8rem] 2xl:leading-tight lg:mt-[3rem] italic">{about.headingText}</h1>

                      <div className="flex-wrap justify-between mb-4 lg:flex">
                        <div className="lg:pr-8 pb-4 content content--cols text-off-black 2xl:text-[1.02rem]">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={about.text} />
                        </div>                       
                      </div>

                      <div className="pt-4 pb-6 border-b text-off-black border-black/20 ">
                        <div className="overflow-hidden relative">
                          <m.h2 variants={reveal} className="mt-6 2xl:mt-10 lg:mt-8 mb-0 pb-0 leading-none font-sans uppercase 2xl:text-[1.1rem]">Services</m.h2>
                        </div>
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
                        <Accordion allowZeroExpanded>
                        {about.services.map((service, i) => {
                          return (
                            <AccordionItem key={i}>
                              <AccordionItemHeading>
                                  <AccordionItemButton>
                                  <div id={`service-${i}`} className="2xl:text-[1.1rem]">
                                    <a href={`#service-${i}`} onClick={() => setCurrentImage(i + 1)}>
                                      <div className="overflow-hidden relative flex">
                                        <m.div variants={reveal}>{service.title}</m.div>
                                        <m.div vatiants={reveal} className="ml-auto mt-[-1px]">
                                          <span className="cross">+</span>
                                          <span className="minus hidden">-</span>
                                        </m.div>
                                      </div>
                                    </a>
                                  </div>
                                  </AccordionItemButton>
                              </AccordionItemHeading>
                              <AccordionItemPanel>
                                <div className="content w-11/12 lg:w-11/12 text-off-black 2xl:text-[1.02rem] py-3">
                                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={service.text} />
                                </div>
                              </AccordionItemPanel>
                          </AccordionItem>
                          )
                        })}
                        </Accordion>
                      </m.div>
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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}