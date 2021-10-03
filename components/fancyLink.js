import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${extraClasses} group`}>
      <span className="block overflow-hidden relative">
        <span className="block">
          <span className="block relative z-10 transition-transform ease-in-out duration-[450ms] group-hover:-translate-y-full">{label}</span>
          <span className="absolute inset-0 block z-10 transition-transform ease-in-out duration-[600ms] group-hover:translate-y-0 translate-y-full text-off-white">{label}</span>
        </span>
      </span>
      </a>
    </Link>
  )
}