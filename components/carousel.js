import { useEmblaCarousel } from 'embla-carousel/react'
import React, { useState, useEffect, useCallback } from "react";
import CarouselCard from '@/components/carouselCard';
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Container from './container';

export default function Carousel({ title, items, id }) {

    const [viewportRef, embla] = useEmblaCarousel({ loop: true, dragFree: true, slidesToScroll: 2, speed: 3 });

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

        <div className="mt-12 lg:mt-24">
                
                <div className="relative overflow-hidden mb-6">
                    <Container>
                        <div className="flex">
                            <m.h2 variants={reveal} className="font-sans text-left uppercase mb-0 pb-0" id={`${id}`}>{title}</m.h2>
                            
                            <div className="flex ml-auto">
                                <button
                                    className="block mr-5 text-xl text-blue"
                                    onClick={scrollPrev}
                                    disabled={!prevBtnEnabled}
                                >
                                    &larr;
                                </button>

                                <button
                                    className="block text-xl text-blue"
                                    onClick={scrollNext}
                                    disabled={!nextBtnEnabled}
                                >
                                    &rarr;
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>

                <div className={`embla embla__viewport`} ref={viewportRef}>
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
                            <CarouselCard
                                key={i}
                                index={i}
                                image={e.teaserImage.asset}
                                title={e.client}
                                detail={`${detailTitle} ${detailDate} ${detailNone}`}
                                link={`/work/${e.slug.current}`}
                                onClick={() => onSlideClick(i)}
                            />        
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
                            <CarouselCard
                                key={i}
                                index={i}
                                image={e.teaserImage.asset}
                                title={e.client}
                                detail={`${detailTitle} ${detailDate} ${detailNone}`}
                                link={`/work/${e.slug.current}`}
                            />        
                        )
                    })}
                  </div>

                </div>      

              </div>

    )
}