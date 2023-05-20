import LazyLoad from "react-lazy-load";

const Banner = () => {
   return (
      <div className="hero min-h-screen md:px-20" style={{ backgroundImage: "url('/bannerBg.jpg')" }}>
         <div className="hero-content flex-col-reverse p-2 md:p-4 lg:flex-row-reverse">
            <div className="md:w-1/2">
               <LazyLoad height={500} offset={1000}>
                  <img src="/banner.png" data-aos="fade-left" data-aos-duration="2000" />
               </LazyLoad>
            </div>
            <div className="text-slate-100 font-semibold md:w-1/2 pr-10">
               <h1 className="md:text-6xl font-bold text-4xl">TinyDriverToy.com</h1>
               <p className="py-6  md:text-xl">
                  Discover miniature driving delight with TinyDriverToy: Remote-controlled wonders, thrilling
                  racing sets, and endless fun. Let the excitement take the wheel!
               </p>
               <a href="#cars">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded">
                     Shop Now!
                  </button>
               </a>
            </div>
         </div>
      </div>
   );
};

export default Banner;
