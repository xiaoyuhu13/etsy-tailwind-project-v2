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
          className="h-[5.5rem] w-[5.5rem] rounded-full border border-solid border-[#dedede] object-cover lg:h-[7rem] lg:w-[7rem] transition duration-500 hover:scale-105 group-hover:drop-shadow-md"
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
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower18.jpg" alt="white flowers" price="2.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower17.jpg" alt="small colorful flowers" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower16.jpg" alt="yellow tulips" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower15.jpg" alt="red and yellow roses" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower14.jpg" alt="pik and white flowers" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower13.jpg" alt="pink cherry blossoms" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower12.jpg" alt="pink flowers" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemVisible imgUrl="./assets/imgs/flower11.jpg" alt="yellow sunflowers" price="1.50"></RecentlyViewedItemVisible>
          <RecentlyViewedItemInvisible imgUrl="./assets/imgs/flower10.jpg" alt="pinke wildflowers" price="1.50"></RecentlyViewedItemInvisible>
          <RecentlyViewedItemInvisible imgUrl="./assets/imgs/flower9.jpg" alt="redt and white tulips" price="1.50"></RecentlyViewedItemInvisible>
    </div>
  );
}

function RecentlyViewedItemVisible ({ imgUrl, price, alt}) {
  return (
     <div className="group relative">
            <div className="absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
              <img className="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
            </div>
            <img className="relative z-0 h-[7.5rem] w-full object-cover sm:h-[10rem] sm:rounded-sm hover:shadow-md"
              src={imgUrl} alt={alt} />
            <div className="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
              <p className="w-fit px-2 py-0.5 text-[13px] font-bold">{price}</p>
            </div>
     </div>
  );
}

function RecentlyViewedItemInvisible ({ imgUrl, price }) {
  return (
      <div className="group invisible absolute lg:visible lg:relative">
           <div className="absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
              <img className="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
            </div>
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
          className="justify-items-center z-10 mx-[calc(8px+10.5625vw)] mb-6 mt-12 grid grid-cols-4 gap-6 lg:mx-[calc(8px+10.5625vw)] grid-rows-1 lg:grid-cols-6">
        <Category imgUrl="./assets/imgs/gift11.jpg" altText="lavender flowers" label="lavender flowers"></Category>
        <Category imgUrl="./assets/imgs/gift9.jpg" altText="lavender clipart" label="lavender clipart"></Category>
        <Category imgUrl="./assets/imgs/gift10.jpg" altText="lavender watercolor" label="lavender watercolor"></Category>
        <Category imgUrl="./assets/imgs/gift12.jpg" altText="lavender illustration" label="lavender illustration"></Category>
        <CategoryInvisible imgUrl="./assets/imgs/gift8.jpg" altText="watercolor lavender" label="watercolor lavender"></CategoryInvisible>
        <CategoryInvisible imgUrl="./assets/imgs/gift7.jpg" altText="purple wildflower" label="purple wildflower"></CategoryInvisible>
    </div>   
  )
}

function CategoryInvisible({ imgUrl, altText, label }) {
  return (
    <div className="invisible absolute group flex w-fit flex-col items-center lg:visible lg:relative">
        <img
          className="h-[5.5rem] w-[5.5rem] rounded-full border border-solid border-[#dedede] object-cover lg:h-[7rem] lg:w-[7rem] transition duration-500 hover:scale-105 group-hover:drop-shadow-md"
          src={imgUrl} alt={altText} />
        <p className="flex pt-2 text-center text-[13px] font-semibold md:max-w-[10vw] lg:text-base group-hover:border-b-2 group-hover:border-text-secondary group-hover:text-hover-text">
          {label}
        </p>
    </div>
  );
}


//Collections
export function Collections () {
 return (
  <div className="sm:mx-[calc(8px+2.5625vw)] sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      <Collection
        title="Productivity" numberOfItems="27 items"
        img1="./assets/imgs/label2.jpg" img2="./assets/imgs/digital5.jpg" img3="./assets/imgs/digital1.jpg" img4="./assets/imgs/digital2.jpg"
        alt1="hands holding ipad" alt2="'do something great' sign" alt3="ipad and coffee on a white desk" alt4="phone with facebook open">
      </Collection> 
      <Collection
        title="Lavender" numberOfItems="12 items"
        img1="./assets/imgs/gift12.jpg" img2="./assets/imgs/gift11.jpg" img3="./assets/imgs/gift10.jpg" img4="./assets/imgs/gift9.jpg"
        alt1="lavender, notebook, and coffee on a white table" alt2="hand holding a bunch of lavender" alt3="various pottery bowls" alt4="colorful swirls">
      </Collection>  
      <Collection
        title="Containers" numberOfItems="13 items"
        img1="./assets/imgs/label3.jpg" img2="./assets/imgs/label1.jpg" img3="./assets/imgs/digital8.jpg" img4="./assets/imgs/digital7.jpg"
        alt1="small glass stopper jars" alt2="clear plastic food containers" alt3="small drawers" alt4="mini spray bottles">
      </Collection>  
      <Collection
        title="Digital Stamps" numberOfItems="27 items"
        img1="./assets/imgs/label4.jpg" img2="./assets/imgs/digital3.jpg" img3="./assets/imgs/digital6.jpg" img4="./assets/imgs/digital4.jpg"
        alt1="compuer creen with landscape images displayed" alt2="lines of code" alt3="tablet and keyboard against yellow background" alt4="phone with colorful filter">
      </Collection>      
  </div> 
 );
}

function Collection ({ title, numberOfItems, img1, alt1, img2, alt2, img3, alt3, img4, alt4}) {
  return (
    <div
            className="grid-rows-layout overflow-hidden h-auto mx-3 mb-5 grid grid-cols-2 gap-1 rounded-md border border-solid border-[#dedede] sm:mx-0 sm:w-full">
            <div className="group flex items-center">
              <h5 className="self-center whitespace-nowrap py-3 pl-4">
                {title}
              </h5>
              <img className="ml-1 h-4 w-4 self-center ease-in-out duration-300 group-hover:translate-x-1" src="./assets/icons/arrow-right.png" alt="arrow pointing to the right" />
            </div>
            <p className="self-center justify-self-end pr-4 text-[13px] text-text-secondary">
              {numberOfItems}
            </p>
            <img className="h-[25vh] lg:h-[18vh] w-full object-cover hover:opacity-60" src={img1} alt={alt1} />
            <img className="h-[25vh] lg:h-[18vh] w-full object-cover hover:opacity-60" src={img2} alt={alt2} />
            <img className="h-[25vh] lg:h-[18vh] w-full object-cover hover:opacity-60" src={img3} alt={alt3} />
            <img className="h-[25vh] lg:h-[18vh] w-full object-cover hover:opacity-60" src={img4} alt={alt4} />
    </div>
  );
}

//Selections

export function Selections () {
  return (
     <div className="mx-[calc(8px+2.5625vw)] mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        <SelectionItemVisible imgUrl="./assets/imgs/gifts17.jpg" alt="create spelled out in wooden blocks" label="Creating Change Together"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/gifts13.jpg" alt="leather breifcase" label="Gifts for Him"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/gifts16.jpg" alt="candles" label="Gifts for Her"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/gifts14.jpg" alt="lego blocks" label="Gifts for Kids"></SelectionItemVisible>
        <SelectionItemVisible imgUrl="./assets/imgs/gifts15.jpg" alt="gold necklaces with various charm shapes" label="Gifts under $30"></SelectionItemVisible>
        <SelectionItemInvisible imgUrl="./assets/imgs/gift2.jpg" alt="colorful balloons" label="Birthday Gifts"></SelectionItemInvisible>
     </div>
  )
}
function SelectionItemVisible ({imgUrl, alt, label}) {
  return (
    <div className="h-50 overflow-hidden rounded-md border border-[#dedede] ease-in-out duration-300 hover:shadow-md">
            <img className="h-[12rem] w-full object-cover" src={imgUrl} alt={alt}/>
            <h5 className="py-6 px-4 font-semibold text-center">{label}</h5>
          </div>
  )
}
function SelectionItemInvisible ( {imgUrl, alt, label}) {
  return (
     <div className="h-50 overflow-hidden rounded-md border border-[#dedede] lg:invisible lg:absolute">
            <img className="h-[12rem] w-full object-cover" src={imgUrl} alt={alt} />
            <h5 className="py-6 px-4 font-semibold text-center">{label}</h5>
          </div>
  )
}


//Blogs
export function Blogs () {
  return (
    <div className="mx-[calc(8px+2.5625vw)] mt-4 grid gap-2 sm:flex sm:gap-4">
       <Blog
       imgUrl="./assets/imgs/article1.jpg" alt="leather wallets"
       subtitle="Gift Ideas"
       title="Martha Stewart's Father's Day Curated Collection"
       description="Call off your search! Just in time for Dad’s big day, the lifestyle
          icon shares her favorite foolproof present picks from small shops on
          Etsy.">
       </Blog>
       <Blog
       imgUrl="./assets/imgs/article2.jpg" alt="colorfully furnished room with vibrant paintings on the wall"
       subtitle="Featured Shops"
       title="Colorful Home Accents to Brighten Your Everyday From Object Lover"
       description="Create a welcoming space full of vibrant side tables, playful planters, and handy trays 
       from this ultra-imaginative, trans-founded 3D-printing shop.">
       </Blog>
       <Blog
       imgUrl="./assets/imgs/article3.jpg" alt="a wreath made of pink and purple flowers and green leaves"
       subtitle="Shopping Guides"
       title="Summer Wreaths With Serious Curb-Appeal"
       description="Give your front door an instant summer glow-up with these cheery summer wreaths full
        of sunny pops of color.">
       </Blog>
    </div>
  )
}

function Blog ({ imgUrl, alt, subtitle, title, description}) {
  return (
    <div className="flex h-40 w-1/3 overflow-hidden rounded-md border border-[#dedede] sm:h-auto sm:flex-col ease-in-out duration-300 hover:shadow-md">
            <img className="h-[40vh] object-cover" src={imgUrl} alt={alt} />
            <div className="flex flex-col justify-center px-4">
              <p className="pt-3 text-left text-[13px] text-text-secondary">
                {subtitle}
              </p>
              <h5 className="py-4 text-left">
                {title}
              </h5>
              <p className="blog-ellipsis invisible absolute mb-4 text-[13px] text-text-secondary sm:visible sm:relative">
                {description}
              </p>
            </div>
          </div>
  )
}

export function Farmhouse () {
  return (
    <div
    class="mx-[calc(8px+2.5625vw)] grid grid-cols-2 grid-rows-decor gap-2 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 lg:h-[55vh] lg:grid-cols-6">
    <div class="group relative lg:col-span-2 lg:row-span-2">
       <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="h-full w-full rounded-sm object-cover" src="./assets/imgs/digital1.jpg"
        alt="hands holding ipad" />
    </div>
    <Decor imgUrl="./assets/imgs/digital1.jpg" alt="hands holding ipad"></Decor>
    <div class="relative group sm:row-span-2 lg:col-span-2">
      <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="col-span-2 h-full w-full rounded-sm object-cover " src="./assets/imgs/digital1.jpg"
        alt="hands holding ipad" />
    </div>
    <div class="group relative sm:row-span-2 lg:col-span-1 lg:row-span-1">
      <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="col-span-2 h-full w-full rounded-sm object-cover"
        src="./assets/imgs/digital1.jpg" alt="hands holding ipad" />
    </div>
    <Decor imgUrl="./assets/imgs/digital1.jpg" alt="hands holding ipad"></Decor>
    <Decor imgUrl="./assets/imgs/digital1.jpg" alt="hands holding ipad"></Decor>
  </div> 
  )
}

export function Boho () {
  return (
    <div
    class="mx-[calc(8px+2.5625vw)] grid grid-cols-2 grid-rows-decor gap-2 sm:grid-cols-4 sm:grid-rows-2 sm:gap-4 lg:h-[55vh] lg:grid-cols-6">
    <div class="group relative lg:col-span-2 lg:row-span-2">
       <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="h-full w-full rounded-sm object-cover" src="./assets/imgs/digital1.jpg"
        alt="hands holding ipad" />
    </div>
    <Decor imgUrl="./assets/imgs/digital1.jpg" alt="hands holding ipad"></Decor>
    <div class="relative group sm:row-span-2 lg:col-span-2">
      <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="col-span-2 h-full w-full rounded-sm object-cover " src="./assets/imgs/digital1.jpg"
        alt="hands holding ipad" />
    </div>
    <div class="group relative sm:row-span-2 lg:col-span-1 lg:row-span-1">
      <div class=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
        <img class="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
      </div>
      <div class="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
        <p class="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
      </div>
      <img class="col-span-2 h-full w-full rounded-sm object-cover"
        src="./assets/imgs/digital1.jpg" alt="hands holding ipad" />
    </div>
    <Decor imgUrl="./assets/imgs/digital1.jpg" alt="hands holding ipad"></Decor>
    <Decor imgUrl="./assets/imgs/digital2.jpg" alt="hands holding ipad"></Decor>
  </div> 
  )
}

function Decor ({imgUrl, alt}) {
  return (
    <div className="group relative">
    <div className=" absolute top-2 right-2 z-10 px-2 py-[9px] bg-white rounded-full border border-solid border-[#dedede] invisible group-hover:visible">
      <img className="h-4" src="./assets/icons/heart.png" alt="heart icon"/>
    </div>
    <div className="absolute bottom-0 z-10 mb-1 ml-1 w-fit rounded-lg border border-solid border-[#dedede] bg-white">
      <p className="w-fit px-2 py-0.5 text-[13px] font-bold">$1.50</p>
    </div>
    <img className="h-full w-full rounded-sm object-cover" src={imgUrl} alt={alt} />
  </div>
  )
}