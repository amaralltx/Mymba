export default function Button({ children, className, icon }) {
  return (
    <button
      className={`min-h-14 flex flex-row justify-center items-center bg-primary text-white rounded-sm font-bold text-[16px] cursor-pointer transition-transform duration-300 ease-in-out transform hover:translate-x-1 ${className}`}
    >
      {children}
      {icon && (
        <img
          src={icon}
          alt=""
          className="inline-block ml-4"
        />
      )}
    </button>
  );
}
