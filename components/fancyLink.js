import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination}>
      <a aria-label={a11yText} className={`${extraClasses}`}>
        {label}
      </a>
    </Link>
  )
}