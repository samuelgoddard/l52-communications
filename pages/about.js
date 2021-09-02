import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import BlockContent from '@sanity/block-content-to-react'
import SanityPageService from '@/services/sanityPageService'

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
      text
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

                  <div className="relative w-full min-h-[40vh] lg:min-h-screen lg:w-1/2 lg:max-h-screen lg:fixed lg:top-0 lg:left-0 lg:bottom-0 bg-gray-100 overflow-hidden">
                    <m.div variants={imageScale} className="absolute inset-0">
                      <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={about.heroImage.asset.url} alt="" />
                    </m.div>
                  </div>

                  <div className="w-full pt-8 p-6 md:px-8 lg:w-1/2 lg:px-[6vw] lg:py-[12vh]">
                    
                    <div className="mx-auto max-w-[760px]">
                      <h1 className="mb-8 text-2xl md:text-3xl xl:text-4xl 2xl:text-[2.8rem] 2xl:leading-tight">{about.headingText}</h1>

                      <div className="flex-wrap justify-between mb-4 lg:flex">
                        <div className="lg:pr-8 pb-4 content content--cols text-off-black 2xl:text-[1.1rem]">
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={about.text} />
                        </div>                       
                      </div>

                      <div className="pt-4 pb-6 border-b text-off-black border-black/20 ">
                        <div className="overflow-hidden relative">
                          <m.h2 variants={reveal} className="mt-8 2xl:mt-12 lg:mt-20 mb-0 pb-0 leading-none font-sans uppercase 2xl:text-[1.1rem]">Services</m.h2>
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
                      <dl>
                        {about.services.map((service, i) => {
                          return (
                            <div key={i}>
                              <dt id={`service-${i}`} className="2xl:text-[1.1rem]">
                                <a href={`#service-${i}`}>
                                  <div className="overflow-hidden relative">
                                    <m.div variants={reveal}>{service.title}</m.div>
                                  </div>
                                </a>
                              </dt>
                              <dd>
                                <div className="content w-11/12 lg:w-11/12 text-off-black 2xl:text-[1.1rem]">
                                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={service.text} />
                                </div>
                              </dd>
                            </div>
                          )
                        })}
                      </dl>
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