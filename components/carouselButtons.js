export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev text-base text-blue border-black border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500 hidden md:flex hover:border-blue"
    onClick={onClick}
    disabled={!enabled}
  >
    <span className="block mt-[-1px]"><svg className="w-4 rotate-180" viewBox="0 0 15 7" xmlns="http://www.w3.org/2000/svg"><path d="m11.552 6.144 3.296-2.784L11.552.592v2.352H.352v.848h11.2z" fill="#00206E" fill-rule="nonzero"/></svg></span>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next text-base text-blue border-black hover:border-blue border border-opacity-20 w-[30px] lg:w-[35px] h-[30px] lg:h-[35px] hidden md:flex items-center justify-center hover:border-opacity-100 transition-all ease-in-out duration-500"
    onClick={onClick}
    disabled={!enabled}
  >
    <span className="block mt-[-1px]"><svg className="w-4" viewBox="0 0 15 7" xmlns="http://www.w3.org/2000/svg"><path d="m11.552 6.144 3.296-2.784L11.552.592v2.352H.352v.848h11.2z" fill="#00206E" fill-rule="nonzero"/></svg></span>
  </button>
);

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);