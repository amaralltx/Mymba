import ArrowIcon from "../../assets/icons/north_east.svg";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={`h-14 bg-primary text-white font-bold text-[16px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-x-1 ${className}`}
      {...props}
    >
      {children}
      <img
        src={ArrowIcon}
        alt="Seta"
        className="inline-block ml-4"></img>
    </button>
  );
}