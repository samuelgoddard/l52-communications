import Link from 'next/link'

export default function CarouselCard({ image, title, detail, link }) {
    return (
        <div className="flex flex-wrap embla__slide">
            <Link href={link}>
                <a className="block overflow-hidden transition group w-full">
                    <div className="w-full">
                        <div className="overflow-hidden mb-4">
                            <img className="w-full min-w-full transition-transform ease-in-out duration-[750ms] group-hover:scale-[1.05]" src={image} alt="" />
                        </div>

                        <span className="block uppercase text-blue">{title}</span>
                        <span className="text-off-black group-hover:hidden">{detail}</span>
                        <span className="hidden underline group-hover:block">View More</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}