import React, { useState, useEffect, useCallback } from "react";
import Layout from '@/components/layout'
import Header from '@/components/header'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { useEmblaCarousel } from 'embla-carousel/react'
import { PrevButton, NextButton } from "@/components/carouselButtons";
import Link from 'next/link'
import SanityPageService from '@/services/sanityPageService'

const query = `*[_type == "work" && slug.current == $slug][0]{
  title,
  client,
  date,
  category-> {
    title
  },
  imagesCarousel[]{
    asset->
  },
  slug {
    current
  },
  seo {
    ...,
    shareGraphic {
      asset->
    }
  }
}`

const pageService = new SanityPageService(query)

export default function WorkSlug(initialData) {
  const { data: { title, client, date, category, imagesCarousel, slug, seo }  } = pageService.getPreviewHook(initialData)()

  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false, draggable: true, slidesToScroll: 1, });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Layout>
      <NextSeo title={title} />

      <Header />

      <LazyMotion features={domAnimation}>
        <div className="flex flex-wrap items-center justify-center min-h-screen">
          <m.div
            initial="initial"
            animate="enter"
            exit="exit"
            className="w-full"
          >
            
              <m.div variants={fade}>

                <Container>

                  <div className="relative px-8 lg:px-20">

                    <div className="embla mt-[-5vh]">
                      <div className="embla__viewport" ref={viewportRef}>
                        <div className="embla__container">
                            {imagesCarousel.map((e,i) => {
                              return (
                                <div className="embla__slide embla__slide--single" key={i}>
                                  <div className="embla__slide__inner text-center">
                                    <div className="h-[44vh] lg:h-[58vh] mx-auto">
                                      <img className="h-full mx-auto object-cover object-center" src={e.asset.url} alt="" />
                                    </div> 
                                  </div>
                                </div>
                              )
                            })}
                            
                            {/* @TODO remove these when content's in... */}
                            <div className="embla__slide embla__slide--single" key="1">
                              <div className="embla__slide__inner text-center">
                                <div className="h-[44vh] lg:h-[58vh] mx-auto">
                                  <img className="h-full mx-auto object-cover object-center" src="https://placedog.net/2000/700?random" alt="" />
                                </div> 
                              </div>
                            </div>

                            <div className="embla__slide embla__slide--single" key="1">
                              <div className="embla__slide__inner text-center">
                                <div className="h-[44vh] lg:h-[58vh] mx-auto">
                                  <img className="h-full mx-auto object-cover object-center" src="https://placedog.net/2000/700?random" alt="" />
                                </div> 
                              </div>
                            </div>
                          
                        </div>
                      </div>
                      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
                    </div>   

                  </div>      

                  <div className="fixed bottom-0 left-0 right-0 py-[32px] lg:py-[64px]">
                    <Container>
                      <div className="flex flex-wrap items-end justify-center">
                        <div className="w-full text-center sm:my-0 sm:w-1/3 sm:text-left">
                          <Link href="/work">
                            <a className="uppercase text-blue">
                              Back to work
                            </a>
                          </Link>
                        </div>

                        <div className="w-full text-center sm:my-0 sm:w-1/3">
                            {client && (
                              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-display text-blue mb-0">{client}</h1>
                            )}
                            <p className="uppercase text-off-black text-xs md:text-sm">{title}, {date}</p>                    
                        </div>

                        <div className="w-full-4 text-center sm:my-0 sm:text-right sm:w-1/3 mt-2 sm:mt-0">
                          <p className="italic font-display text-off-black">{category.title}</p>
                        </div>
                      </div>
                    </Container>
                  </div>

                </Container>        

                
                
              </m.div>
            
          </m.div>
        </div>
      </LazyMotion>
      
    </Layout>
  )
}


export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return {
    props
  };
}

export async function getStaticPaths() {
  const paths = await pageService.fetchPaths('work')
  return {
    paths: paths,
    fallback: false,
  };
}