import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
          
          <m.div variants={fade}>

            <div className="relative flex flex-wrap items-end justify-center w-full min-h-screen bg-black bg-center bg-cover" style={{backgroundImage: "url(https://placedog.net/1000?random)"}}>

              <h1 className="w-full text-center mb-4 font-display text-[6vw] 3xl:text-[5vw] italic text-white mix-blend-difference ">Experts in communication.</h1>
              
              <div className="w-full self-end py-[64px]">
                <Container>
                  <div className="flex flex-wrap items-center justify-between w-full text-sm uppercase">
                    <Link href="/about">
                      <a className="text-white mix-blend-difference">
                        About
                      </a>
                    </Link>

                    <Link href="/work">
                      <a className="text-white mix-blend-difference">
                        Work
                      </a>
                    </Link>

                    <Link href="/clients">
                      <a className="text-white mix-blend-difference">
                        Clients
                      </a>
                    </Link>

                    <Link href="/">
                      <a className="text-white mix-blend-difference">
                        Digital Showroom
                      </a>
                    </Link>

                    <Link href="/contact">
                      <a className="text-white mix-blend-difference">
                        Contact
                      </a>
                    </Link>
                  </div>
                </Container>
              </div>

            </div>
          </m.div>
          
        </m.div>

      </LazyMotion>
      
    </Layout>
  )
}
