import { useEmblaCarousel } from 'embla-carousel/react'
import Link from 'next/link'
import CarouselCard from '@/components/carousel-card';

export default function Carousel({ title, items, id }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true,
        slidesToScroll: 3,
    });

    return (

        <div className="mt-20">

               <h2 className="font-sans text-center uppercase" id={`${id}`}>{title}</h2>

                <div className="embla" ref={emblaRef}>
                  
                  <div className="embla__container">

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />

                    <CarouselCard
                        image="https://placedog.net/800/500?random"
                        title="Maximillian"
                        detail="I-D magazine, February 2021"
                    />
                    
                  </div>

                </div>      

              </div>

    )
}