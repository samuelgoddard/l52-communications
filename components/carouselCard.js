import Link from 'next/link'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import ImageWrapper from './image-wrapper'

export default function CarouselCard({ image, title, detail, link, index }) {
    return (

                    <Link href={link}>
                        <a className="flex flex-wrap group overflow-hidden group w-full">
                            <div className="w-full">
                                <div className="overflow-hidden mb-4 relative">
                                    {/* <img className="w-full min-w-full transition-transform ease-in-out duration-[750ms] group-hover:scale-[1.05]" src={image} alt="" /> */}

                                    <ImageWrapper
                                        image={image}
                                        className="w-full min-w-full transition-all ease-in-out duration-[750ms] group-hover:scale-[1.05]"
                                        baseWidth={640}
                                        baseHeight={860}
                                        lqip={image.metadata.lqip}
                                    />
                                </div>

                                <div className="overflow-hidden relative">
                                    <m.span variants={reveal} className="block uppercase text-blue">{title}</m.span>
                                </div>
                                <div className="overflow-hidden relative">
                                    <m.span variants={reveal} className="block">
                                    <span className="block overflow-hidden relative">
                                        <span className="text-off-black block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">{detail}</span>
                                        <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[450ms] group-hover:translate-y-0 translate-y-[90%] underline">View More</span>
                                        
                                    </span>
                                    </m.span>
                                </div>
                                {/* <span className="hidden underline group-hover:block">View More</span> */}
                            </div>
                        </a>
                    </Link>
                
    )
}