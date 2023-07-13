//Gifts
export function Gifts() {
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
    <div className="group flex w-fit flex-col items-center">
        <img
          className="h-[5.5rem] w-[5.5rem] rounded-full border border-solid border-[#dedede] object-cover lg:h-[7rem] lg:w-[7rem] transition duration-500 hover:scale-110 group-hover:drop-shadow-md"
          src={imgUrl} alt={altText} />
        <p className="flex pt-2 text-center text-[13px] font-semibold md:max-w-[10vw] lg:text-base group-hover:border-b-2 group-hover:border-text-secondary group-hover:text-hover-text">
          {label}
        </p>
    </div>
  );
}


//Recently Viewed Section
export function RecentlyViewedItems () {
  return (
    <div className="grid grid-cols-2 gap-1 sm:mx-[calc(8px+2.5625vw)] sm:grid-cols-4 sm:gap-3 lg:grid-cols-5">
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemInvisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemInvisible>
          <RecentlyViewedItemInvisible imgUrl="./assets/imgs/flower2.jpg" price="1.50"></RecentlyViewedItemInvisible>
    </div>
  );
}
function RecentlyViewedItemVisible ({ imgUrl, price}) {
  return (
     <div className="relative">
            <img className="relative z-0 h-[7.5rem] w-full object-cover sm:h-[10rem] sm:rounded-sm"
              src={imgUrl} alt="pink flowers in white vase" />
            <div className="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
              <p className="w-fit px-2 py-0.5 text-[13px] font-bold">{price}</p>
            </div>
     </div>
  );
}

function RecentlyViewedItemInvisible ({ imgUrl, price }) {
  return (
      <div className="invisible absolute lg:visible lg:relative">
            <img className="relative z-0 h-[7.5rem] w-full object-cover sm:h-[10rem] sm:rounded-sm"
              src={imgUrl} alt="pink flowers in white vase" />
            <div className="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
              <p className="w-fit px-2 py-0.5 text-[13px] font-bold">{price}</p>
            </div>
      </div>
  );
}

export function RecentlyViewedCategories () {
  return (
    <div
          className="z-10 mx-[calc(8px+10.5625vw)] mb-6 mt-12 grid grid-cols-4 gap-6 lg:mx-[calc(8px+10.5625vw)] lg:grid-cols-6">
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
        <Category imgUrl="./assets/imgs/gift1.jpg" altText="filler" label="filler"></Category>
    </div>   
  )
}


//Collections
export function Collections () {
 return (
  <div className="sm:mx-[calc(8px+2.5625vw)] sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      <Collection
        title="Digital Stamps" numberOfItems="27 items"
        img1="./assets/imgs/flower3.jpg" img2="./assets/imgs/flower3.jpg" img3="./assets/imgs/flower3.jpg" img4="./assets/imgs/flower3.jpg"
        alt1="filler" alt2="filler" alt3="filler" alt4="filler">
      </Collection> 
      <Collection
        title="Digital Stamps" numberOfItems="27 items"
        img1="./assets/imgs/flower3.jpg" img2="./assets/imgs/flower3.jpg" img3="./assets/imgs/flower3.jpg" img4="./assets/imgs/flower3.jpg"
        alt1="filler" alt2="filler" alt3="filler" alt4="filler">
      </Collection>  
      <Collection
        title="Digital Stamps" numberOfItems="27 items"
        img1="./assets/imgs/flower3.jpg" img2="./assets/imgs/flower3.jpg" img3="./assets/imgs/flower3.jpg" img4="./assets/imgs/flower3.jpg"
        alt1="filler" alt2="filler" alt3="filler" alt4="filler">
      </Collection>  
      <Collection
        title="Digital Stamps" numberOfItems="27 items"
        img1="./assets/imgs/flower3.jpg" img2="./assets/imgs/flower3.jpg" img3="./assets/imgs/flower3.jpg" img4="./assets/imgs/flower3.jpg"
        alt1="filler" alt2="filler" alt3="filler" alt4="filler">
      </Collection>      
  </div> 
 );
}

function Collection ({ title, numberOfItems, img1, alt1, img2, alt2, img3, alt3, img4, alt4}) {
  return (
    <div
            className="grid-rows-layout h-30 mx-3 mb-5 grid grid-cols-2 gap-1 rounded-md border border-solid border-[#dedede] sm:mx-0 sm:h-full sm:w-full">
            <div className="flex items-center">
              <h5 className="self-center whitespace-nowrap py-3 pl-4">
                {title}
              </h5>
              <img className="ml-1 h-4 w-4 self-center" src="./assets/icons/arrow-right.png" alt="arrow pointing to the right" />
            </div>
            <p className="self-center justify-self-end pr-4 text-[13px] text-text-secondary">
              {numberOfItems}
            </p>
            <img className="h-full w-full object-cover" src={img1} alt={alt1} />
            <img className="h-full w-full object-cover" src={img2} alt={alt2} />
            <img className="h-full w-full object-cover" src={img3} alt={alt3} />
            <img className="h-full w-full object-cover" src={img4} alt={alt4} />
    </div>
  );
}

//Selections

export function Selections () {
  return (
     <div className="mx-[calc(8px+2.5625vw)] mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        <SelectionItemVisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemVisible>
        <SelectionItemInvisible imgUrl="./assets/imgs/flower5.jpg" alt="filler" label="shop our selections"></SelectionItemInvisible>
       
     </div>
  )
}
function SelectionItemVisible ({imgUrl, alt, label}) {
  return (
    <div className="h-50 overflow-hidden rounded-md border border-[#dedede]">
            <img className="h-[12rem] w-full object-cover" src={imgUrl} alt={alt}/>
            <h5 className="py-4 text-center">{label}s</h5>
          </div>
  )
}
function SelectionItemInvisible ( {imgUrl, alt, label}) {
  return (
     <div className="h-50 overflow-hidden rounded-md border border-[#dedede] lg:invisible lg:absolute">
            <img className="h-[12rem] w-full object-cover" src={imgUrl} alt={alt} />
            <h5 className="py-4 text-center">{label}</h5>
          </div>
  )
}


//Blogs
export function Blogs () {
  return (
    <div className="mx-[calc(8px+2.5625vw)] mt-4 grid gap-2 sm:flex sm:gap-4">
       <Blog
       imgUrl="./assets/imgs/flower6.jpg" alt="filler" subtitle="filler" title="filler"
       description="filler">
       </Blog>
       <Blog
       imgUrl="./assets/imgs/flower6.jpg" alt="filler" subtitle="filler" title="filler"
       description="filler">
       </Blog>
       <Blog
       imgUrl="./assets/imgs/flower6.jpg" alt="filler" subtitle="filler" title="filler"
       description="filler">
       </Blog>
       <Blog
       imgUrl="./assets/imgs/flower6.jpg" alt="filler" subtitle="filler" title="filler"
       description="filler">
       </Blog>
    </div>
  )
}

function Blog ({ imgUrl, alt, subtitle, title, description}) {
  return (
    <div className="flex h-40 overflow-hidden rounded-md border border-[#dedede] sm:h-auto sm:flex-col">
            <img className="h-full w-full object-cover" src={imgUrl} alt={alt} />
            <div className="flex flex-col justify-center px-4">
              <p className="pt-3 text-left text-[13px] text-text-secondary">
                {subtitle}
              </p>
              <h5 className="py-4 text-left">
                {title}
              </h5>
              <p className="blog-ellipsis invisible absolute pb-4 text-[13px] text-text-secondary sm:visible sm:relative">
                {description}
              </p>
            </div>
          </div>
  )
}