import Link from 'next/link'
import { fade, reveal, imageScale } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function CarouselCard({ image, title, detail, link }) {
    return (
        <div className="flex flex-wrap embla__slide">
            <Link href={link}>
                <a className="block overflow-hidden transition group w-full">
                    <div className="w-full">
                        <div className="overflow-hidden mb-4 relative">
                            <img className="w-full min-w-full transition-transform ease-in-out duration-[750ms] group-hover:scale-[1.05]" src={image} alt="" />
                        </div>

                        <div className="overflow-hidden relative">
                            <m.span variants={reveal} className="block uppercase text-blue">{title}</m.span>
                        </div>
                        <div className="overflow-hidden relative">
                            <m.span variants={reveal} className="text-off-black group-hover:hidden block">{detail}</m.span>
                        </div>
                        <span className="hidden underline group-hover:block">View More</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}