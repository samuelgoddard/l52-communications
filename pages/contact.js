import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

import SanityPageService from '@/services/sanityPageService'

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
          className=""
        >
          
            <m.div variants={fade}>

              <div className="w-full mx-auto">
                
                <div className="flex flex-wrap lg:items-end justify-end w-full min-h-[40vh] lg:min-h-screen lg:flex-row-reverse">
                  
                  <div className="relative w-full min-h-[40vh] lg:min-h-screen lg:w-1/2 lg:fixed lg:top-0 lg:right-0 bg-gray-100">

                    <img className="absolute object-cover object-top w-full h-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={contact.heroImage.asset.url} alt="" />

                  </div>

                  <div className="w-full p-6 lg:px-8 lg:w-1/2 lg:p-20 lg:pl-16 lg:pt-16 lg:pb-16">

                    <h2 className="py-4 mt-1 lg:mt-20 mb-0 font-sans uppercase text-off-black">Connect</h2>
                    
                    {contact.emailGeneralEnquiries && (
                      <p><a aria-label="Email link for general enquiries" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href={`mailto:${contact.emailGeneralEnquiries}`}>
                        General Enquiries
                      </a></p>
                    )}

                    {contact.emailPressEnquiries && (
                      <p><a aria-label="Email link for press enquiries" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href={`mailto:${contact.emailPressEnquiries}`}>
                        Press Enquiries
                      </a></p>
                    )}

                    {contact.instagram && (
                      <p><a aria-label="Go to our Instagram page" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href={contact.instagram} target="_blank" rel="noreferrer">
                        Instagram
                      </a></p>
                    )}

                    {contact.linkedin && (
                      <p><a aria-label="Go to our Linkedin page" className="inline-block my-3 text-[28px] italic lg:text-[3vw] xl:text-[2.7vw] font-display text-blue" href={contact.linkedin} target="_blank" rel="noreferrer">
                        Linkedin
                      </a></p>
                    )}

                    <div className="flex-wrap self-end w-full lg:flex">
                      
                      {contact.address && (
                        <div className="lg:w-1/2">

                          <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Find us</h3>

                          <p className="text-off-black">{contact.address}</p>

                        </div>
                      )}

                      <div className="lg:w-1/2 mb-5 lg:mb-0">

                        <h3 className="py-4 mt-5 lg:mt-20 mb-0 font-sans uppercase text-off-black">Contact</h3>

                        <p className="text-off-black">{contact.telephone && (<a className="inline-block" href={`tel:${contact.telephone}`}> {contact.telephone}</a>)} <br /> <a href="https://www.l52.world" aria-label="Go to L52 World" rel="noreferrer noopener" className="text-blue">www.l52.world</a></p>

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

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}