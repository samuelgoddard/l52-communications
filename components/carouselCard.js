import Link from 'next/link'

export default function CarouselCard({ image, title, detail, link }) {
    return (
        <div className="flex flex-wrap embla__slide">
            <Link href={link}>
                <a className="block px-4 overflow-hidden transition group">
                    <div className="transform group-hover:translate-y-[-50px] transition-all duration-200">
                        <img className="w-full min-w-full h-[500px] object-cover mb-4 " src={image} alt="" />
                        <span className="block uppercase text-blue">{title}</span>
                        <span className="text-off-black group-hover:hidden">{detail}</span>
                        <span className="hidden underline group-hover:block">View More</span>
                    </div>
                </a>
            </Link>
        </div>
    )
}