import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Carousel from '@/components/carousel'
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll'

import SanityPageService from '@/services/sanityPageService'
import { useRef } from 'react'
import ScrollToButton from '@/components/scroll-to-button'

const query = `{
  "work": *[_type == "work"]{
    title,
    client,
    date,
    teaserImage {
      asset -> {
        ...
      }
    },
    slug {
      current
    }
  },
  "categories": *[_type == "categories"] | order(order asc) {
    slug {
      current
    },
    _id,
    _type,
    title,
    "relatedWork": *[_type == "work" && references(^._id)] | order(title) {
      title,
      client,
      date,
      teaserImage {
        asset -> {
          ...
        }
      },
      slug {
        current
      }
    }
  }
}`

const pageService = new SanityPageService(query)

export default function WorkIndex(initialData) {
  const { data: { work, categories }  } = pageService.getPreviewHook(initialData)()
  const containerRef = useRef(null)

  const scrollToTarget = (e) => {
    e.preventDefault();
    var target = e.target.dataset.target;
    var element = document.getElementById(target);
    element.scrollIntoView({
      behavior: "smooth", block: "start", inline: "nearest"
    });
  }

  return (
    <Layout>
      <NextSeo title="Work" />

      <Header />
      
      <LocomotiveScrollProvider options={{ smooth: true, lerp: 0.075 }} watch={[]} containerRef={containerRef}>
        <div data-scroll-container ref={containerRef} id="scroll-container">
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
                      <m.h1 variants={reveal} className="text-left text-2xl lg:text-4xl 2xl:text-5xl leading-tight lg:leading-tight xl:leading-tight mb-0 lg:mb-0 2xl:mb-0">Selected Work</m.h1>
                    </div>

                    <ul className="flex flex-wrap justify-start max-w-3xl">
                      {categories.map((cat, i) => {
                        return cat.relatedWork.length > 0 && (
                          <li className=" pl-0 ml-0" id={i} key={i}>
                            <ScrollToButton scrollTarget={`#${cat.slug.current}`}>
                              <div className="overflow-hidden relative">
                                <m.div variants={reveal}>
                                  <span className="block overflow-hidden relative">
                                    <m.span variants={fade} className="block">
                                      <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">{cat.title}</span>
                                      <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-full text-off-white">{cat.title}</span>
                                    </m.span>
                                  </span>
                                </m.div>
                              </div>
                            </ScrollToButton>
                          </li>
                        )
                      })}
                    </ul>
                  </Container>        
                  
                  {categories.map((cat, i) => {
                    return cat.relatedWork.length > 0 && (
                      <div className="">
                        <Carousel
                          id={cat.slug.current}
                          title={cat.title}
                          items={cat.relatedWork}
                          key={i}
                        />
                      </div>
                    )
                  })}
                </m.div>
              
            </m.div>
            
          </LazyMotion>
        </div>
      </LocomotiveScrollProvider>
          
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}