export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev text-base text-blue border-black border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500 hidden md:flex"
    onClick={onClick}
    disabled={!enabled}
  >
    <span className="block mt-[-2px]">←</span>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next text-base text-blue border-black border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] hidden md:flex items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500"
    onClick={onClick}
    disabled={!enabled}
  >
    <span className="block mt-[-2px]">→</span>
  </button>
);

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);