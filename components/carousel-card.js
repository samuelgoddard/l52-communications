import Link from 'next/link'

export default function CarouselCard({ image, title, detail }) {
    return (
        <div className="flex flex-wrap embla__slide">
            <Link href="">
                <a className="block p-4 transition group">
                <img className="w-full h-[500px] object-cover mb-4 transition-all duration-200 group-hover:h-[450px]" src={image} alt="" />
                <span className="block uppercase text-blue">{title}</span>
                <span className="text-off-black group-hover:hidden">{detail}</span>
                <span className="hidden underline group-hover:block">View More</span>
                </a>
            </Link>
        </div>
    )
}