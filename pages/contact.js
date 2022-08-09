import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import BlockContent from '@sanity/block-content-to-react'

import SanityPageService from '@/services/sanityPageService'
import image from 'next/image'
import Container from '@/components/container'

const query = `{
  "contact": *[_type == "contact"][0]{
    title,
    heroImage {
      asset ->
    },
    emailGeneralEnquiries,
    emailPressEnquiries,
    instagram,
    linkedin,
    telephone,
    address,
    addressTitle,
    addressImage {
      asset ->
    },
    addressEmail,
    address2,
    address2Title,
    address2Email,
    address2Image {
      asset ->
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

export default function Contact(initialData) {
  const { data: { contact }  } = pageService.getPreviewHook(initialData)()

  return (
    <Layout>
      <NextSeo title={contact.title} />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="py-32 lg:py-40 bg-white"
        >
          
            <m.div variants={fade}>

            <Container> 
              <div className="overflow-hidden relative mb-5">
                <m.h1 variants={reveal} className="text-left text-2xl lg:text-4xl 2xl:text-5xl leading-tight lg:leading-tight xl:leading-tight mb-0 lg:mb-0 2xl:mb-0 italic">Contact Us</m.h1>
              </div>

              <div className="w-full mx-auto">
                
                <div className="flex flex-wrap w-full">
                  
                  {/* <div className="relative w-full min-h-[50vh] lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:right-0 bg-gray-100 overflow-hidden">
                    <m.div variants={imageScale} className="inset-0 absolute">
                      <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.heroImage.asset.url} alt="" />
                    </m.div>
                  </div> */}

                  <div className="w-full">

                  <m.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    className="w-full"
                    variants={{
                      enter: { transition: { staggerChildren: 0.04 } }
                    }}
                  >

                    <div className="w-full md:flex md:space-x-5">

                      <div className="md:w-1/2 mb-6 md:mb-0">
                        <div className="w-full h-[55vw] md:h-[30vw] relative overflow-hidden mb-4">
                          <img className="absolute object-cover object-center w-full h-full" src={contact.addressImage.asset.url} alt="" />
                        </div>

                        <div className="text-off-black text-[14px]">
                          <span className="uppercase text-black text-[14px] md:text-[14px] block mb-2">{contact.addressTitle}</span>
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={contact.address} /> 

                          <a href={`mailto:${contact.addressEmail}`} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue relative overflow-hidden mt-4">
                            <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Contact L52 {contact.addressTitle}</span>
                            <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">Contact L52 {contact.addressTitle}</span>
                          </a>                    
                        </div> 
                      </div>

                      <div className="md:w-1/2">
                        <div className="w-full h-[55vw] md:h-[30vw] relative overflow-hidden mb-4">
                          <img className="absolute object-cover object-center w-full h-full" src={contact.address2Image.asset.url} alt="" />
                        </div>

                        <div className="text-off-black text-[14px]">
                          <span className="uppercase text-black text-[14px] md:text-[14px] block mb-2">{contact.address2Title}</span>
                          <BlockContent serializers={{ container: ({ children }) => children }} blocks={contact.address2} /> 
                          
                          <a href={`mailto:${contact.address2Email}`} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue relative overflow-hidden mt-4">
                            <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Contact L52 {contact.address2Title}</span>
                            <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">Contact L52 {contact.address2Title}</span>
                          </a>
                        </div> 
                      </div>
                      
                      {/* {contact.address && (
                        <div className="lg:w-1/2">

                          <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Find us</h3>

                          <div className="text-off-black">
                            <BlockContent serializers={{ container: ({ children }) => children }} blocks={contact.address} />                     
                          </div>    
                          
                        </div>
                      )}

                      <div className="lg:w-1/2 mb-5 lg:mb-0">

                        <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Contact</h3>

                        <p className="text-off-black">{contact.telephone && (<a className="inline-block" href={`tel:${contact.telephone}`}> {contact.telephone}</a>)} <br /> <a href="https://www.l52.world" aria-label="Go to L52 World" rel="noreferrer noopener" className="text-blue">www.L52.world</a></p>

                      </div> */}

                    </div>
                    </m.div>
                    
                  </div>

                </div>

              </div>   

              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={{
                  enter: { transition: { staggerChildren: 0.04 } }
                }}
                className="md:flex md:flex-nowrap md:flex-row md:justify-start md:overflow-scroll relative md:space-x-8 mt-6 md:mt-10"
              >
                {/* {contact.emailGeneralEnquiries && (
                  <span className="block overflow-hidden relative">
                    <m.a variants={fade} href={`mailto:${contact.emailGeneralEnquiries}?subject=General Enquiry`} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue">
                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">General Enquiries</span>
                      <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">General Enquiries</span>
                    </m.a>
                  </span>
                )}

                {contact.emailPressEnquiries && (
                  <span className="block overflow-hidden relative">
                    <m.a variants={fade} href={`mailto:${contact.emailPressEnquiries}?subject=Press Enquiry`} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue">
                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Press Enquiries</span>
                      <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">Press Enquiries</span>
                    </m.a>
                  </span>                  
                )} */}

                {contact.instagram && (
                  <span className="block overflow-hidden relative">
                    <m.a variants={fade} href={contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue">
                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Instagram</span>
                      <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">Instagram</span>
                    </m.a>
                  </span>
                )}

                {contact.linkedin && (
                  <span className="block overflow-hidden relative">
                    <m.a variants={fade} href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block uppercase cursor-pointer group text-blue">
                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">LinkedIn</span>
                      <span className="absolute left-0 top-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">LinkedIn</span>
                    </m.a>
                  </span>
                  
                )}
              </m.div>        
            </Container>   
              
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