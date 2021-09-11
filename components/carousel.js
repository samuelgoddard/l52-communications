import { useEmblaCarousel } from 'embla-carousel/react'
import React, { useState, useEffect, useCallback } from "react";
import CarouselCard from '@/components/carouselCard';
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Carousel({ title, items, id }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true,
        dragFree: true})

    const onSlideClick = useCallback(
        (i) => {
          if (emblaApi && emblaApi.clickAllowed()) console.log(index)
        },
        [emblaApi],
      )

    return (

        <div className="mt-12 lg:mt-24">
                
                <div className="relative overflow-hidden mb-6">
                    <m.h2 variants={reveal} className="font-sans text-center uppercase mb-0 pb-0" id={`${id}`}>{title}</m.h2>
                </div>

                <div className={`embla embla__viewport`} ref={emblaRef}>
                  <div className="embla__container">
                    {items.map((e, i) => {
                        return (
                            <CarouselCard
                                key={i}
                                image={e.teaserImage.asset.url}
                                title={e.client}
                                detail={`${e.title}, ${e.date}`}
                                link={`/work/${e.slug.current}`}
                                onClick={() => onSlideClick(i)}
                            />        
                        )
                    })}
                    {/* If items are less than 5, add a second fake loop to give the "infinite" effect */}
                    {items.map((e, i) => {
                        return items.length < 5 && (
                            <CarouselCard
                                key={i}
                                image={e.teaserImage.asset.url}
                                title={e.client}
                                detail={`${e.title}, ${e.date}`}
                                link={`/work/${e.slug.current}`}
                            />        
                        )
                    })}
                  </div>

                </div>      

              </div>

    )
}