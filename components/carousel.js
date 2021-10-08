import { useEmblaCarousel } from 'embla-carousel/react'
import React, { useState, useEffect, useCallback } from "react";
import CarouselCard from '@/components/carouselCard';
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Container from './container';
import { setupWheelGestures } from 'embla-carousel-wheel-gestures'


export default function Carousel({ title, items, id }) {

    const [viewportRef, embla] = useEmblaCarousel({ containScroll: "keepSnaps", loop: true, dragFree: true, slidesToScroll: 2, speed: 3, align: 0.045 });

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
        embla
    ]);

    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
      }, [embla]);


    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
        embla && setupWheelGestures(embla)
      }, [embla, setScrollSnaps, onSelect]);

    return (

        <div className="mt-12 lg:mt-24">
                
                <div className="relative overflow-hidden mb-6">
                    <Container>
                        <div className="flex items-center">
                            <m.h2 variants={reveal} className="font-sans text-left uppercase mb-0 pb-0" id={`${id}`}>{title}</m.h2>
                            
                            <div className="flex ml-auto">
                                <button
                                    className="mr-2 lg:mr-3 text-base text-blue border-black border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500"
                                    onClick={scrollPrev}
                                    disabled={!prevBtnEnabled}
                                >
                                    &larr;
                                </button>

                                <button
                                    className="text-base text-blue border-black border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] flex items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500"
                                    onClick={scrollNext}
                                    disabled={!nextBtnEnabled}
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className="embla">
                    <div className="embla__viewport" ref={viewportRef}>
                  <div className="embla__container">
                    {items.map((e, i) => {
                        let detailTitle = '';
                        let detailDate = '';
                        let detailNone = '';

                        if (e.title) {
                            detailTitle = e.title
                        }
                        if (e.date) {
                            detailDate = e.date
                        }

                        if (!e.date && !e.title) {
                            detailNone = 'View More'
                        }
                        return (
                            <div className="embla__slide" key={i}>
                                <div className="embla__slide__inner">
                                <CarouselCard
                                    index={i}
                                    image={e.teaserImage.asset}
                                    title={e.client}
                                    detail={`${detailTitle} ${detailDate} ${detailNone}`}
                                    link={`/work/${e.slug.current}`}
                                    onClick={() => onSlideClick(i)}
                                />  
                                </div>      
                            </div>
                        )
                    })}
                    {/* If items are less than 5, add a second fake loop to give the "infinite" effect */}
                    {items.map((e, i) => {
                        let detailTitle = '';
                        let detailDate = '';
                        let detailNone = '';

                        if (e.title) {
                            detailTitle = e.title
                        }
                        if (e.date) {
                            detailDate = e.date
                        }

                        if (!e.date && !e.title) {
                            detailNone = 'View More'
                        }
                        return items.length < 5 && (
                            <div className="embla__slide" key={i}>
                                <div className="embla__slide__inner">
                                <CarouselCard
                                    index={i}
                                    image={e.teaserImage.asset}
                                    title={e.client}
                                    detail={`${detailTitle} ${detailDate} ${detailNone}`}
                                    link={`/work/${e.slug.current}`}
                                />   
                                </div>     
                            </div>
                        )
                    })}
                  </div>

                </div>    
                </div>  

              </div>

    )
}