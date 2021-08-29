import { useEmblaCarousel } from 'embla-carousel/react'
import CarouselCard from '@/components/carouselCard';

export default function Carousel({ title, items, id }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        dragFree: true
    });

    return (

        <div className="mt-12 lg:mt-24">

               <h2 className="font-sans text-center uppercase" id={`${id}`}>{title}</h2>

                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    {items.map((e, i) => {
                        return (
                            <CarouselCard
                                key={i}
                                image={e.teaserImage.asset.url}
                                title={e.client}
                                detail={`${e.title}, ${e.date}`}
                                link={`/work/${e.slug.current}`}
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