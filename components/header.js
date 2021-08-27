import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import Link from 'next/link'

export default function Header({ logoWhite, isMenu }) {
  return (
    <header className="absolute top-0 w-full z-50 py-[64px]">
      <Container>

        <div className="flex flex-wrap items-center justify-between">
          
          <Link href="/">
              <a className="inline-block">
                <img className="h-full w-[219px]" src={`${logoWhite ? '/images/logo-white.svg' : '/images/logo.svg'}`} alt="L52 Communications" />
              </a>
            
          </Link>

          <nav>
            <FancyLink destination={`${isMenu ? '/' : '/menu'}`} a11yText={`${isMenu ? 'Close Menu' : 'Open Menu'}`} label={`${isMenu ? 'Close' : 'Menu'}`} extraClasses="uppercase" />
          </nav>
          
        </div>
        
      </Container>
    </header>
  )
}