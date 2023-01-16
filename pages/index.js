import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade, reveal, revealDelay1, revealDelay2, revealDelay3 } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'
import Div100vh from 'react-div-100vh'


const query = `{
  "home": *[_type == "home"][0]{
    title,
    headingText,
    backgroundImage {
      asset ->
    },
    backgroundVideo {
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

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={home.title} />

      <Header />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
          <m.div variants={fade}>

            <Div100vh className="relative flex flex-wrap items-end justify-center w-full bg-black bg-center bg-cover">
              {home.backgroundImage && (
                <div className="absolute inset-0 z-0">
                  <img src={home.backgroundImage.asset.url} alt="ADD AN ALT SAM" className="w-full h-full object-cover object-center" />
                </div>
              )}
              {home.backgroundVideo && (
                <div className="absolute inset-0 z-0">
                  <video playsInline loop={true} autoPlay="autoplay" muted className="w-full h-full object-center object-cover">
                    <source src={home.backgroundVideo.asset.url} type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              <div className="relative overflow-hidden">
                <h1 className="w-full text-center mb-0 pb-0 font-display text-[10vw] lg:text-[4.5vw] 3xl:text-[4vw] italic text-white mix-blend-difference">
                  <m.span variants={reveal} className="inline-block">
                    Experts&nbsp;
                  </m.span>

                  <m.span variants={revealDelay1} className="inline-block">
                    in&nbsp;
                  </m.span>

                  <m.span variants={revealDelay2} className="inline-block">
                    creative&nbsp;
                  </m.span>

                  <m.span variants={revealDelay3} className="inline-block">
                    communication.
                  </m.span>
                </h1>
              </div>
              
              <div className="w-full self-end pb-[32px] lg:pb-[64px] relative z-10 mix-blend-difference px-12 md:px-0 justify-center">
                <Container>
                  <div className="flex flex-wrap items-center justify-between w-full text-sm uppercase mix-blend-difference">
                    <Link href="/about">
                      <div className="relative overflow-hidden">
                        <m.div variants={reveal}>
                          <a className="w-1/2 md:w-auto text-white text-center mix-blend-difference cursor-pointer 2xl:text-[1.1rem] group">
                          <span className="block overflow-hidden relative">
                              <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">About</span>
                              <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">About</span>
                          </span>
                          </a>
                        </m.div>
                      </div>
                    </Link>

                    <Link href="/work">
                      <div className="relative overflow-hidden">
                        <m.div variants={reveal}>
                          <a className="w-1/2 md:w-auto text-white text-center mix-blend-difference cursor-pointer 2xl:text-[1.1rem] group">
                          <span className="block overflow-hidden relative">
                              <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Work</span>
                              <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Work</span>
                          </span>
                          </a>
                        </m.div>
                      </div>
                    </Link>

                    <Link href="/clients">
                      <div className="relative overflow-hidden">
                        <m.div variants={reveal}>
                          <a className="w-1/2 md:w-auto text-white text-center mix-blend-difference cursor-pointer 2xl:text-[1.1rem] group">
                          <span className="block overflow-hidden relative">
                              <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Clients</span>
                              <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Clients</span>
                          </span>
                          </a>
                        </m.div>
                      </div>
                    </Link>

                    <Link href="/contact">
                      <div className="relative overflow-hidden">
                        <m.div variants={reveal}>
                          <a className="w-1/2 md:w-auto text-white text-center mix-blend-difference cursor-pointer 2xl:text-[1.1rem] group">
                            
                          <span className="block overflow-hidden relative">
                              <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">Contact</span>
                              <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full ">Contact</span>
                          </span>
                          </a>
                        </m.div>
                      </div>
                    </Link>
                  </div>
                </Container>
              </div>

            </Div100vh>
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