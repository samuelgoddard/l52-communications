import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function ScrollToButton({ children, scrollTarget, full }) {
  const { scroll } = useLocomotiveScroll()
  let scrollTargetElement = null;

  const scrollToArea = () => {
    scrollTargetElement = document.querySelector(scrollTarget)
    if (scroll) {
      scroll.scrollTo(scrollTargetElement, { 
        'offset': -85
      })
    }
  }

  return (
    <button onClick={scrollToArea} className={`hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block pr-8 pb-1 md:pb-2 text-center uppercase cursor-pointer text-blue ${full ? 'block w-full' : ''}`}>
      {children}
    </button>
  )
}