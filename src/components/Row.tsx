type Props = {};

export default function Row({}: Props) {
  const letterClasses =
    "flex flex-row gap-2 items-center justify-center w-16 h-16 bg-white text-bold text-3xl rounded-md";

  return (
    <div id="row" className="flex flex-row gap-2">
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
      <div id="row" className={letterClasses}></div>
    </div>
  );
}
