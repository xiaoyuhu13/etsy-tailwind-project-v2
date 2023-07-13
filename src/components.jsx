//Gifts

export function Gifts() {
  // TODO: Actually implement a navigation bar
  return (
    <div className="relative z-10 mx-[calc(8px+10.5625vw)] grid grid-cols-3 justify-items-center gap-6 sm:grid-cols-6 sm:gap-3 lg:mt-4">
        <Category imgUrl="./assets/imgs/gift6.jpg" altText="Father's Day spelled out in Scrabble" label="Unique Gifts for Dad"></Category>
        <Category imgUrl="./assets/imgs/gift5.jpg" altText="outdoor grill" label="Outdoor Entertaining"></Category>
        <Category imgUrl="./assets/imgs/gift4.jpg" altText="glass bottle filled with alcohol" label="Barware & Glassware"></Category>
        <Category imgUrl="./assets/imgs/gift3.jpg" altText="black graduation cap" label="Graduation Gifts"></Category>
        <Category imgUrl="./assets/imgs/gift2.jpg" altText="colorful balloons" label="Wedding Gifts"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="gift wrapped in brown paper with pink ribbon" label="On Sale"></Category>
    </div>
  );
}

function Category({ imgUrl, altText, label }) {
  return (
    <div className="flex w-fit flex-col items-center">
        <img
          className="h-[5.5rem] w-[5.5rem] rounded-full border border-solid border-[#dedede] object-cover lg:h-[7rem] lg:w-[7rem] hover:scale-110"
          src={imgUrl} alt={altText} />
        <p className="flex pt-2 text-center text-[13px] font-semibold md:max-w-[10vw] lg:text-base">
          {label}
        </p>
    </div>
  );
}