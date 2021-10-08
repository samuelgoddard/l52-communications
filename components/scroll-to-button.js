export default function ScrollToButton({ children, scrollTarget, full }) {

  const scrollToArea = () => {
    document.getElementById(scrollTarget).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={scrollToArea} className={`hover:border-0 focus:border-0 hover:outline-none focus:outline-none group block pr-8 pb-1 md:pb-2 text-center uppercase cursor-pointer group text-blue ${full ? 'block w-full' : ''}`}>
      {children}
    </button>
  )
}